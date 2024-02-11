import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    const timestamp = coinHistory.data.history[i].timestamp * 1000; // Convert timestamp to milliseconds
    const formattedDate = new Date(timestamp).toLocaleDateString();
    coinTimeStamp.push(formattedDate);
  }
  // console.log(coinTimeStamp);

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",

        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </React.Fragment>
  );
};

export default LineChart;
