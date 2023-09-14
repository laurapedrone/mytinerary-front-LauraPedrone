import { createReducer } from "@reduxjs/toolkit";
import { login , signup, authenticate} from "../actions/authAction";

const initialState = {
  user: {},
  token: null,
  status: "offline",
};

const authReducer = createReducer(initialState, (builder) =>
  builder
  .addCase(login, (state, action) =>{
    const newState = {...state, ...action.payload}
    return newState
  })
  .addCase(signup,(state, action)=>{
    const newState = {...state}
  })
  .addCase(authenticate.fulfilled, (state, action)=>{
    const newState = {...state}
  })
);

export default authReducer;
