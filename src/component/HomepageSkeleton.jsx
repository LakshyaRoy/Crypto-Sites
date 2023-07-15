import React from "react";

import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import News from "./News";
import Cryptocurrencies from "./Cryptocurrencies";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const { Title } = Typography;

const HomepageSkeleton = () => {
  return (
    <React.Fragment>
      <Title level={2} className="heading">
        <Skeleton count={1} />
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies">
            <Skeleton count={1} />
          </Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges">
            <Skeleton count={1} />
          </Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap">
            <Skeleton count={1} />
          </Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24th Volume">
            <Skeleton count={1} />
          </Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets">
            <Skeleton count={1} />
          </Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          <Skeleton count={1} />
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">
            <Skeleton count={1} />
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          <Skeleton count={1} />
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">
            {" "}
            <Skeleton count={1} />
          </Link>
        </Title>
      </div>
      <News simplified />
    </React.Fragment>
  );
};

export default HomepageSkeleton;
