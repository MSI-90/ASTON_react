import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IPost} from "../model/types/Post.ts";

interface Params {
  id?: number;
  limit?: number;
}

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['posts', 'postById'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], Params>({
      query: ({limit}: Params) => ({
        url: 'posts',
        params: {_limit: limit}
      }),
      providesTags: ['posts'],
    }),
    getPostById: builder.query<IPost, Params>({
      query: ({id}: Params) => ({
        url: `posts/${id}`
      }),
      providesTags: ['postById'],
    })
  })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;