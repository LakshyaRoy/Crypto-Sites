import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Card } from "antd";
import ExchangesSkeleton from "./ExchangesSkeleton";
import { CryptoExchangeList } from "../services/market";
import { Flex } from "antd";

const { Text, Title } = Typography;

const Exchanges = () => {
  const cryptoMarketPlace = CryptoExchangeList?.cryptoExchanges;

  const isFetching = false;

  return (
    <React.Fragment>
      {isFetching || !cryptoMarketPlace ? (
        <ExchangesSkeleton />
      ) : (
        <div>
          <Title level={2} className="heading">
            Cryptocurrency Exchange platforms.
          </Title>
          <Row gutter={[24, 24]}>
            {cryptoMarketPlace.map((data, i) => (
              <Col xs={24} sm={12} lg={6} key={i}>
                <Card hoverable key={i}>
                  <Flex
                    horizontal={true.toString()}
                    align="center"
                    justify="space-between"
                    style={{ width: "100%", paddingBottom: "5px" }}
                  >
                    <Title className="heading" level={3}>
                      {i + 1}. {data?.name}
                    </Title>
                    <Avatar
                      src={data?.image}
                      alt={data?.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </Flex>
                  <Flex
                    vertical
                    align="start "
                    justify="space-between"
                    style={{
                      borderTop: "1px solid #ececec",
                      paddingTop: "10px",
                    }}
                  >
                    <Title level={5}>
                      Location:
                      <Text> {data?.location}</Text>
                    </Title>
                    <Title level={5}>
                      Trading Pairs:
                      <Text> {millify(data?.tradingPairs)}</Text>
                    </Title>
                    <Title level={5}>
                      Daily Volume:
                      <Text>
                        {" "}
                        {millify(data?.dailyVolume.replace(/,/g, ""))}
                      </Text>
                    </Title>
                  </Flex>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </React.Fragment>
  );
};

export default Exchanges;
