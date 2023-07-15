import React from "react";
import { Typography, Divider, Row, Col, Card } from "antd";
const { Title, Paragraph, Text } = Typography;

const About = () => {
    const teamMembers = [
        { name: "Lakshya", role: "UI/UX Designer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae condimentum velit. Etiam tristique tempus nunc, sed finibus tellus eleifend ut." },
        { name: "Mayank", role: "Frontend Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae condimentum velit. Etiam tristique tempus nunc, sed finibus tellus eleifend ut." },
        { name: "Shivansh", role: "Backend Developer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae condimentum velit. Etiam tristique tempus nunc, sed finibus tellus eleifend ut." },
    ];

    return (
        <div>
            <Title level={2}>About</Title>
            <Paragraph>
                Know more about us and our product, our mission, what we stand for and our small team.
            </Paragraph>
            <Divider />

            <Title level={4}>Project Description:</Title>
            <Paragraph>
                Our project is a cryptocurrency website that leverages the power of the Rapid API to fetch real-time information and deliver comprehensive insights to users. Our platform offers a user-friendly interface that allows users to explore a wide range of cryptocurrencies, tokens, and exchanges, empowering them to stay informed and make educated decisions.
            </Paragraph>

            <Title level={4}>Key Features:</Title>
            <Paragraph>
                <ul>
                    <li>Crypto Currency Overview: Our site provides an extensive collection of cryptocurrencies and tokens, allowing users to delve into their profiles, histories, and performance data. Stay up-to-date with the latest information on market capitalization, trading volume, and circulating supply.</li>
                    <li>Exchange Details: Discover in-depth information about popular crypto exchanges, including trading pairs, transaction fees, and user reviews. Compare different exchanges to find the one that suits your needs.</li>
                    <li>Real-time Price Tracking: Get access to live price data for various cryptocurrencies. Track price movements, view historical charts, and analyze market trends to make informed investment decisions.</li>
                    <li>News Section: Stay informed about the latest developments in the crypto industry. Our dedicated news section provides curated articles and updates related to specific cryptocurrencies, ensuring you never miss important news that could impact your investments.</li>
                    <li>Graphical Analysis: Analyze the performance of cryptocurrencies through detailed graphs and charts. Identify patterns, track historical price movements, and gain insights into market trends to enhance your trading strategies.</li>
                    <li>Comprehensive Stats: Access a wide range of statistical data related to cryptocurrencies, including market capitalization, trading volume, price changes, and more. Stay on top of the market and make data-driven decisions.</li>
                </ul>
            </Paragraph>

            <Paragraph>
                Our team is dedicated to providing a seamless user experience, ensuring that our platform remains intuitive, reliable, and visually appealing. We believe in the power of cryptocurrencies and aim to empower traders, analysts, and enthusiasts alike by providing a centralized hub for crypto-related information.
            </Paragraph>


            <Title level={4}>Our Team</Title>
            <Paragraph>
                <Row gutter={[16, 16]}>
                    {teamMembers.map((member, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card>
                                <Title level={4}>{member.name}</Title>
                                <Text strong style={{ "display": "block" }}>{member.role}</Text>
                                <Text>{member.description}</Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Paragraph>

            <Title level={4}>Mission Statement</Title>
            <Paragraph>
                Our mission is to be the ultimate companion for crypto enthusiasts, empowering them to stay engaged, informed, and connected in the rapidly evolving world of cryptocurrencies. Inspired by the advancements in technology and the concept of decentralization, we are dedicated to promoting the adoption and understanding of cryptocurrencies.
            </Paragraph>
            <Paragraph>
                Through our comprehensive platform, we aim to provide a one-stop solution for crypto geeks, offering a wide range of features including real-time news, in-depth stats, and up-to-date prices. We strive to deliver valuable insights and analysis, enabling users to make informed decisions and navigate the crypto landscape with confidence.
            </Paragraph>

            <Paragraph>
                As advocates for the emerging asset class of cryptocurrencies, we are committed to fostering education, exploration, and participation in this exciting space. By providing a reliable and user-friendly platform, we seek to empower individuals to embrace the potential of crypto and contribute to the ongoing digital revolution.

            </Paragraph>

            <Paragraph>
                Join us on this journey as we shape the future of finance and empower individuals to embrace the opportunities presented by the world of cryptocurrencies.
            </Paragraph>

        </div>
    );
};

export default About;
