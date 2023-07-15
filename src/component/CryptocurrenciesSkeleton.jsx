import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Typography, Row, Col, Card } from "antd";
const { Text, Title } = Typography;

const CryptocurrenciesSkeleton = () => {
  return (
    <>
      <Skeleton
        count={1}
        style={{
          margin: "10px",
          padding: "10px",
        }}
      />

      <Row gutter={[32, 32]} className="crypto-card-container">
        {Array(8)
          .fill(1)
          .map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i} className="crypto-card">
              <Card hoverable>
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    <Skeleton count={1} />
                  </Title>
                  <Skeleton
                    width="40px"
                    height="40px"
                    style={{
                      margin: "-10px 2px 2px 2px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <p>
                  <Skeleton count={1} />
                </p>
                <p>
                  <Skeleton count={1} />
                </p>
                <p>
                  <Skeleton count={1} />
                </p>
                <p>
                  <Skeleton count={1} />
                </p>
                <div className="provider-container"></div>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default CryptocurrenciesSkeleton;
