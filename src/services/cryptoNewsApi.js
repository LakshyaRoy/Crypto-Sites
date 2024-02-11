import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// const selectRandomKey = () => {
//   const apiKeys = process.env.REACT_APP_CRYPTO_API.split(","); //we are splitting the api keys to make an array
//   const random = Math.floor(Math.random() * apiKeys.length); //this will get a random number
//   return apiKeys[random];
// };

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

const baseUrl = "https://gnews.io/api/v4/";

const createRequest = (url) => ({ url });
const apikey = process.env.REACT_APP_CRYPTO_NEWS;

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count, search }) =>
        createRequest(
          `search?q=${search}&lang=en&max=${count}&apikey=${apikey}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
