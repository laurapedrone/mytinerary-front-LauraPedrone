import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const login = createAction('login', (credential)=>{
    const reducerData ={
        user: credential.userData,
        token: credential.token,
        status: "online"
    }
    return {
        payload: reducerData,
    }

})
const signup = createAction('signup', (credential)=>{
    return {
        payload: 'algo'
    }

})
const authenticate = createAsyncThunk('authenticate', (credential)=>{
    return {
        payload: 'algo'
    }

})

export { login, signup, authenticate }