import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fc9f6b6e617f88de9a7032.mockapi.io/phonebook/' }),
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
        }),
      
    }),
});

export const { useFetchContactsQuery } = contactsApi;