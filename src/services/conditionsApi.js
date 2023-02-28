import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const conditionsApi = createApi({
    reducerPath: 'conditionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        conditionsApi: builder.query  ({
            query: () => `/api/get-conditions`,
        }),
    })
})

export const { useConditionsApiQuery } = conditionsApi