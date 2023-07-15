import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
      <Title level={2}>About</Title>
      <Divider />

      <Title level={4}>Our Project</Title>
      <Paragraph>
        [Insert a brief description of your crypto site and its purpose.]
      </Paragraph>

      <Title level={4}>Our Team</Title>
      <Paragraph>
        [Insert information about your team members, their roles, and their contributions to the project.]
      </Paragraph>

      <Title level={4}>Mission Statement</Title>
      <Paragraph>
        [Insert your project's mission statement, highlighting your goals and objectives in the crypto space.]
      </Paragraph>

      {/* Add any other relevant sections or details about your project */}
    </div>
  );
};

export default About;
