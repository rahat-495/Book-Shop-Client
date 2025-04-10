import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyData: builder.query({
      query: () => ({
        url: "/users/get-my-data",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}/block`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetMyDataQuery,
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} = userApi;
