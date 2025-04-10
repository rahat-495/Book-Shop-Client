
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id : "" ,
  name : "" ,
  email : "" ,
  role : "" ,
  isActivate : true ,
  createdAt : "" ,
  updatedAt : "" ,
  __v : 0 ,
}

const userSlice = createSlice({
    name : "auth" ,
    initialState ,
    reducers : {
      addUser : (state , action) => {
          state._id = action.payload?._id ;
          state.name = action.payload?.name ;
          state.email = action.payload?.email ;
          state.role = action.payload?.role ; 
          state.isActivate = action.payload?.isActivate ; 
          state.createdAt = action.payload?.createdAt ; 
          state.updatedAt = action.payload?.updatedAt ; 
          state.__v = action.payload?.__v ; 
      },
    }
})

export default userSlice.reducer ;
export const { addUser } = userSlice.actions ;
