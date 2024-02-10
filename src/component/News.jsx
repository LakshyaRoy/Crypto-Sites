import React, { useState } from "react";

import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import NewsSkeleton from "./NewsSkeleton";
// import { Skeleton } from "antd";
const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data, isLoading } = useGetCryptosQuery(100);
  // console.log(data);

  const { data: result } = useGetCryptoNewsQuery({
    search: newsCategory,
    count: 9,
  });

  // console.log(result?.data);

  return (
    <div style={{ minHeight: "85vh" }} key={1}>
      {isLoading || !result ? (
        <NewsSkeleton />
      ) : (
        <Row gutter={[24, 24]}>
          {!simplified && (
            <Col span={24}>
              <Select
                showSearch
                className="select-news"
                placeholder="Select a Crypto"
                optionFilterProp="children"
                onChange={(value) =>
                  setNewsCategory(value ? value : "No Data Found")
                }
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Cryptocurrency">Cryptocurrency</Option>
                {data?.data?.coins?.map((currency) => (
                  <Option value={currency.name}>{currency.name}</Option>
                ))}
              </Select>
            </Col>
          )}

          {result?.articles?.length === 0 ? (
            <Col span={24}>
              <Title level={4}>News for "{newsCategory}" not found!</Title>
            </Col>
          ) : (
            result?.articles?.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                  <a href={news?.source?.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {news?.title.length > 100
                          ? `${news?.title.substring(0, 70)}...`
                          : news?.title}
                      </Title>
                      <img
                        src={news?.image || demoImage}
                        alt="cryptocurrency"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </div>
                    <p>
                      {news.description.length > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </p>
                    <div className="provider-container">
                      <div>
                        {/* <Avatar
                          src={news.source_favicon_url || demoImage}
                          alt="cryptocurrency news"
                        /> */}
                        <Text className="provider-name">
                          {news?.source?.name}
                        </Text>
                      </div>
                      <Text>
                        {moment(news.publishedAt).startOf("ss").fromNow()}
                      </Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))
          )}
        </Row>
      )}
    </div>
  );
};

export default News;
