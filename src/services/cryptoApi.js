import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const selectRandomKey = () => {
  if (process.env.REACT_APP_CRYPTO_API.search(",") !== -1) {
    const apiKeys = process.env.REACT_APP_CRYPTO_API.split(","); //we are splitting the api keys to make an array
    const random = Math.floor(Math.random() * apiKeys.length); //this will get a random number
    // console.log(process.env.REACT_APP_CRYPTO_API);
    return apiKeys[random];
  } else {
    // console.log(process.env.REACT_APP_CRYPTO_API);
    return process.env.REACT_APP_CRYPTO_API;
  }
};

const cryptoApiHeaders = {
  "X-RapidAPI-Key": selectRandomKey(),
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
