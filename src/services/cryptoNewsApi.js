import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "17762e89a3msh089d0531fe2fedfp1066bdjsn4cda64986014",
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

// console.log(useGetCryptoNewsQuery);

// GET https://bing-news-search1.p.rapidapi.com/news?q=cryptocurrency&cc=us&safeSearch=Off

// https://api.bing.microsoft.com/v7.0/news/search?q=cryptocurrency
