import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptBlaze <br />
            Copyrights 2023 ©️ All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
          </Space>
    </div>
  )
}

export default Footer;
