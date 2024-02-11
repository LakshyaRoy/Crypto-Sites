// cryptoMarketApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// const herourl = "cors-anywhere.herokuapp.com/";
const baseUrl = `"https://pro-api.coinmarketcap.com/v1/exchange/"`;
const cryptoMarketHeaders = {
  // find keys from the site :)
};

export const cryptoMarketApi = createApi({
  reducerPath: "cryptoMarketApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoMarketHeaders }),
  endpoints: (builder) => ({
    getInfoBySlug: builder.query({
      query: (slug) => `info?slug=${slug}`,
    }),
  }),
});

export const { useGetInfoBySlugQuery } = cryptoMarketApi;
