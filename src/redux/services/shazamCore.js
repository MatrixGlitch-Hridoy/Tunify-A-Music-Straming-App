import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "1b06c06981mshbc393b63fcdc77ap17e091jsn61846a334059"
      );
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" })
  })
});

export const { useGetTopChartsQuery } = shazamCoreApi;
