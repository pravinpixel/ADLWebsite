import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        bannerApi: builder.query  ({
            query: () => `/public/api/banners`,
        }),
    })
})

export const { useBannerApiQuery } = bannerApi