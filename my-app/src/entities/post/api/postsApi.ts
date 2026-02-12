import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IPost} from "../Post.ts";

interface Params {
  limit?: number;
}

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], Params>({
      query: ({limit}: Params) => ({
        url: 'posts',
        params: {_limit: limit}
      })
    })
  })
})

export const { useGetAllPostsQuery } = postsApi;