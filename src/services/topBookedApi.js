import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'
import { API_URL } from '../Redux/Constant/ApiRoute'
export const topBookedApi = createApi({
    reducerPath: 'topBookedApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getTopBookedApi: builder.query({
            query() {
                return {
                    url: API_URL.TOP_BOOKED_TEST,
                    method: 'POST',
                }
            }
        }),
        updateTopBookedApi: builder.mutation({
            query(payload) {
                return {
                    url: API_URL.TOP_BOOKED_TEST,
                    method: 'POST',
                    body: payload,
                }
            }
        }),
    })
})
export const {
    useUpdateTopBookedApiMutation,
    useGetTopBookedApiQuery
} = topBookedApi
