import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Card } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  const marketPlace = data?.data?.markets;

  // console.log(marketPlace);

  if (isFetching) return "Loading...";
  return (
    <React.Fragment>
      <Title level={2} className="heading">
        Cryptocurrency Exchange platforms.
      </Title>
      <Row gutter={[24, 24]}>
        {marketPlace.map((data, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card hoverable className="news-image-container" key={i}>
              <Title className="heading" level={3}>
                {i + 1}. {data?.exchange?.name}
              </Title>

              <Avatar
                src={data?.exchange?.iconUrl}
                alt={data?.exchange?.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Exchanges;
