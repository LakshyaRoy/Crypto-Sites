import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const selectRandomKey = () => {
  const apiKeys = process.env.REACT_APP_CRYPTO_API.split(","); //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * apiKeys.length); //this will get a random number
  return apiKeys[random];
};

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": selectRandomKey(),
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count, search }) =>
        createRequest(
          `/news/search?q=${search}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
