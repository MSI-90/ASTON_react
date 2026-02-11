import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {IAlbumUser} from "../../entities/album/Album.ts";
import type {ITodosUser} from "../../entities/todos/Todos.ts";
import type {IPost} from "../../entities/post/Post.ts";

interface Params {
    userId: number
    section: string;
    limit?: number;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query<IAlbumUser[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            })
        }),
        getTodosByUserId: builder.query<ITodosUser[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            })
        }),
        getPostsByUserId: builder.query<IPost[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            })
        })
    }),
});

export const { useGetAlbumsByUserIdQuery, useGetTodosByUserIdQuery, useGetPostsByUserIdQuery } = userApi