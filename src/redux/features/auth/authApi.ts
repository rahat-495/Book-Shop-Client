import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    requestForUpdatePass: builder.mutation({
      query: ({email}) => ({
        url: "/auth/request-update-password",
        method: "PUT",
        body: {email},
      }),
    }),
    updatePass: builder.mutation({
      query: (payload) => ({
        url: "/auth/update-password",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation , useRequestForUpdatePassMutation , useUpdatePassMutation } = authApi;

