import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IProductRes} from "../../types/types";
import Itype from  '../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks'
import endpoints from '../endpoints/endpoints';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoints.products.baseURL}),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProductRes, void>({
      query: () => {
        return {
            url: endpoints.products.getAllProducts + '/',
            method: "GET"
        }
      },
    }),


    getFlashProducts: builder.query<IProductRes, void>({
      query: () => {
        return {
            url: endpoints.products.getFlashProducts + '/',
            method: "GET",
        }
      },
    }),


    getTopSalesProducts: builder.query<IProductRes, void>({
        query: () => {
          return {
              url: endpoints.products.getTopSalesProducts + '/',
              method: "GET",
          }
        },
      }),

  }),
});

export const {useGetAllProductsQuery, useGetFlashProductsQuery, useGetTopSalesProductsQuery} = productApi;