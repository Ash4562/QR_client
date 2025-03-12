import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_ADMIN_API}`,
        credentials: "include"

    }),
    tagTypes: ["users"],
    endpoints: (builder) => {
        return {
            UserHotelRegister: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/findHotelByDetails",
                        method: "POST",
                        body: userData
                    }
                },
                providesTags: ["users"]
            }),

            generateQR: builder.mutation({
                query: (hotel_id) => {
                    return {
                        url: "/generateQR",
                        method: "POST",
                        body: hotel_id
                    }
                },
                invalidatesTags: ["users"]
            }),
            generateAadhaarOTP: builder.mutation({
                query: userData => {
                    return {
                        url: "/generateOTP",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["users"]
            }),
       SubmitAadhaarOTP: builder.mutation({
                query: userData => {
                    return {
                        url: "/submitOTP",
    
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["users"]
            }),
        userDetailForm: builder.mutation({
                    query: userData => {
                        return {
                            url: "/submitAadhaarDetails",
                            method: "POST",
                            body: userData
                        }
                    },
                    invalidatesTags: ["users"]
                }),

        }
    }
})

export const {useUserDetailFormMutation, useUserHotelRegisterMutation,useGenerateQRMutation,useGenerateAadhaarOTPMutation,useSubmitAadhaarOTPMutation} = userApi
