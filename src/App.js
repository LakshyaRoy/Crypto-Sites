import "./App.css";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import {
  Navbar,
  Homepage,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News, 
  Footer,
  About
} from "./component";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </div>
    </div>
  );
};

export default App;
