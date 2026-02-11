import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IPhoto} from "../../entities/photos/Photos.ts";

interface Params {
  albumId: number
  limit?: number;
}

export const albumApi = createApi({
  reducerPath: 'albumApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<IPhoto[], Params>({
      query: ({albumId, limit}: Params) => ({
        url: `albums/${albumId}/photos`,
        params: {_limit: limit}
      })
    })
  })
});

export const { useGetPhotosByAlbumIdQuery } = albumApi;