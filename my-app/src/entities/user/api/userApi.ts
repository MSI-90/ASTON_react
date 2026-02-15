import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {IAlbum} from "../../album/model/types/Album.ts";
import type {ITodos} from "../../todos/model/types/Todos.ts";
import type {IPost} from "../../post/model/types/Post.ts";
import type {IUser} from "../model/types/User.ts";

interface Params {
    userId: number
    section?: string;
    limit?: number;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    tagTypes: ['user', 'albumByUser', 'todosByUser', 'postsByUser'],
    endpoints: (builder) => ({
        getUserById: builder.query<IUser, Params>({
            query: ({userId}: Params) => ({
                url: `users/${userId}`
            }),
            providesTags: ['user'],
        }),
        getAlbumsByUserId: builder.query<IAlbum[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            }),
            providesTags: ['albumByUser'],
        }),
        getTodosByUserId: builder.query<ITodos[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            }),
            providesTags: ['todosByUser'],
        }),
        getPostsByUserId: builder.query<IPost[], Params>({
            query: ({userId, section, limit}: Params) => ({
                url: `users/${userId}/${section}`,
                params: {_limit: limit}
            }),
            providesTags: ['postsByUser'],
        })
    }),
});

export const {
    useGetUserByIdQuery,
    useGetAlbumsByUserIdQuery,
    useGetTodosByUserIdQuery,
    useGetPostsByUserIdQuery
} = userApi