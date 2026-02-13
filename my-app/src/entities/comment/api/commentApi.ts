import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IComment} from "../Comment.ts";

interface Params {
  limit?: number;
}

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['comments'],
  endpoints: (builder) => ({
    getAllComments: builder.query<IComment[], Params>({
      query: ({limit}: Params) => ({
        url: 'comments',
        params: {_limit: limit}
      }),
      providesTags: ['comments'],
    }),
  }),
});

export const {useGetAllCommentsQuery} = commentApi;