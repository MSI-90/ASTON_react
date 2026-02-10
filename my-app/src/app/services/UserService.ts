import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {IAlbumUser} from "../../entities/album/Album.ts";

interface Params {
    id: number
    section: string;
    limit?: number;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query<IAlbumUser[], Params>({
            query: ({id, section, limit}: Params) => ({
                url: `users/${id}/${section}`,
                params: {_limit: limit}
            })
        }),
    }),
});

export const { useGetAlbumsByUserIdQuery } = userApi