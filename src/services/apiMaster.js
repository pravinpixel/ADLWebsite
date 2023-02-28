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
    })
})

export const { 
    useOrgansQuery,
    useBannersQuery,
    useConditionsQuery,
    useTestPackageSliderQuery,
    useSetTestPackageSliderMutation
} = apiMaster