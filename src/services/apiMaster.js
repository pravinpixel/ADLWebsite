import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiMaster = createApi({
    reducerPath: 'apiMaster',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        organs: builder.query  ({
            query: () => '/api/get-organs'
        }),
        banners: builder.query  ({
            query: () => `/public/api/banners`,
        }),
        conditions: builder.query  ({
            query: () => `/api/get-conditions`,
        }),
        testPackageSlider: builder.query({
            query() {
                return {
                    url: '/public/api/topBookedTest',
                    method: 'POST',
                }
            }
        }),
        setTestPackageSlider: builder.mutation({
            query(payload) {
                return {
                    url: '/public/api/topBookedTest',
                    method: 'POST',
                    body: payload,
                }
            }
        }),
        cities: builder.query  ({
            query: () => `/api/get-city-master`,
        }),
        news: builder.query  ({
            query() {
                return { url:`/api/newsAndEvents`, method: 'POST', }
            },
        }),
    })
})

export const { 
    useOrgansQuery,
    useBannersQuery,
    useConditionsQuery,
    useTestPackageSliderQuery,
    useSetTestPackageSliderMutation,
    useCitiesQuery,
    useNewsQuery
} = apiMaster