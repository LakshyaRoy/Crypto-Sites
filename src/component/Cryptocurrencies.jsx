import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import CryptocurrenciesSkeleton from "./CryptocurrenciesSkeleton";
import { useGetCryptosQuery } from "../services/cryptoApi";
// import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  // if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      {isFetching || !cryptos ? (
        <CryptocurrenciesSkeleton />
      ) : (
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              {/* Note: Change currency.id to currency.uuid  */}
              <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                  hoverable
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={currency.name}
                    />
                  }
                >
                  <p>
                    <strong>Price: </strong> {millify(currency.price)}
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <strong>Market Cap: </strong> {millify(currency.marketCap)}
                  </p>
                  <p>
                    <strong>Daily Change: </strong> {millify(currency.change)}%
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Cryptocurrencies;
