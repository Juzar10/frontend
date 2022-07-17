import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URI } from "../constant/general_variable"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URI
    }),
    endpoints: (builder) => ({
        getAutoCompleteSuggestion: builder.query({
            query: (searchTerm) => ({
                url: `books/autocomplete?search=${searchTerm}`
            })
        }),
        getBookDetail: builder.query({
            query: (id) => ({
                url: `books/${id}`
            })
        }),
        getSearchResult: builder.query({
            query: (params) => {

                return ({
                    url: `books?search=${params.searchTerm}&page=${params.pageNumber}`
                })
            }
        }),
        loadDashBoardData: builder.query({
            query: (itemsList) => ({
                url: "books/multiplebooks",
                method: "POST",
                body: {
                    itemsList: itemsList
                }

            })
        })

    })
})

export const { useGetAutoCompleteSuggestionQuery, useGetBookDetailQuery, useGetSearchResultQuery, useLoadDashBoardDataQuery } = apiSlice
