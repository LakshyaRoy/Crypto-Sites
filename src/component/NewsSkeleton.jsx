import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Typography, Row, Col, Card } from "antd";
const { Text, Title } = Typography;

const NewsSkeleton = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        {Array(6)
          .fill(1)
          .map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    <Skeleton count={2} />
                  </Title>
                  <Skeleton width="80px" height="80px" />
                </div>
                <p>
                  <Skeleton count={4} />
                </p>
                <div className="provider-container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton width="32px" height="32px" borderRadius="50%" />
                    <Text className="provider-name">
                      <Skeleton count={1} width="35px" />
                    </Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default NewsSkeleton;
