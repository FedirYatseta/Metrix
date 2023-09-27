import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export interface Root {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface Post {
    userId: number
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getPostsById: builder.query<{ species: { id: string }; sprites: { front_shiny: string } }, string>({
            query: (id) => `posts/${id}`,
        }),
        getPostsList: builder.query<{ results: Array<{ title: string }> }, void>({
            query: () => `posts/`,
        }),
        getAlbumsList: builder.query<{ results: Array<{ title: string }> }, void>({
            query: () => `albums/1/photos`,
        }),
        getUsersList: builder.query<{ results: Root }, void>({
            query: () => `users`,
        }),
        createUser: builder.mutation<{ results: Root }, Partial<Root>>({
            query: (body) => ({
                url: `/users`,
                method: 'POST',
                body,
            }),
        }),
        getUserById: builder.query<Root, number>({
            query: (id) => `users/${id}`,
        }),
    }),
})

export const {
    useGetPostsByIdQuery,
    useGetPostsListQuery,
    useGetAlbumsListQuery,
    useGetUsersListQuery,
    useCreateUserMutation,
    useGetUserByIdQuery,
    util: { getRunningQueriesThunk },
} = api;

// export endpoints for use in SSR
export const { getPostsById, getPostsList, getAlbumsList, getUsersList, createUser, getUserById } = api.endpoints;