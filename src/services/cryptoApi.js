import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const selectRandomKey = () => {
  const apiKeys = process.env.REACT_APP_CRYPTO_API.split(","); //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * apiKeys.length); //this will get a random number
  return apiKeys[random];
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
    getExchanges: builder.query({
      query: () =>
        createRequest(
          `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/markets`
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
