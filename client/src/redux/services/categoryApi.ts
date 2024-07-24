import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ICategory} from "../../types/types";
import Itype from  '../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks'
import endpoints from '../endpoints/endpoints';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoints.categories.baseURL }),
  endpoints: (builder) => ({
    getAllCategory: builder.query<ICategory, string>({
      query: () => {
        return {
            url: endpoints.categories.getAllCategories,
            method: "GET"
        }
      },
    }),


    createCategory: builder.mutation<ICategory, string>({
      query: (data) => {
        return {
            url: endpoints.categories.createCategory,
            method: "POST",
            body: data
        }
      },
    }),
  }),
});

export const { useGetAllCategoryQuery, useCreateCategoryMutation } = categoryApi;