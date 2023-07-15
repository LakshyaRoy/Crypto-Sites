import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Typography, Row, Col, Card } from "antd";
const { Text, Title } = Typography;
const ExchangesSkeleton = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        {Array(12)
          .fill(1)
          .map((news, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card hoverable>
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    <Skeleton count={2} />
                  </Title>
                </div>
                <Skeleton width="80px" height="80px" />
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default ExchangesSkeleton;
