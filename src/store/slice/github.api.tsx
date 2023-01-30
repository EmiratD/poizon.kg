import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IServerResponse, IUser } from '../../modules/modules';
export const githubApi =  createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.github.com/'
  }),
  endpoints: build => ({
    searchUser: build.query<IUser[], string>({
      query: (search:string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        }
      }),
      transformResponse: (response: IServerResponse<IUser>) => response.items
    })
  })
});

export const {useSearchUserQuery} = githubApi;