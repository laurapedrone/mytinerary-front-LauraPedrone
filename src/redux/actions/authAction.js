import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Services/cityService";
import { LS } from "../../Utils/LS";

const login = createAction("login", (credential) => {
  const reducerData = {
    user: credential.userData,
    token: credential.token,
    status: "online",
  };
  LS.set("token", credential.token);
  return {
    payload: reducerData,
  };
});
const signup = createAction("signup", (credential) => {
  const reducerData = {
    user: credential.userData,
    token: credential.token,
    status: "online",
  };
  return {
    payload: reducerData,
  };
});
const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    const token = LS.getText("token");
    const { data } = await server.get("/auth/token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const reducerData = {
      user: data.userData,
      status: "online",
    };
    return reducerData;
  } catch (err) {
    console.log(err);
  }
});

export { login, signup, authenticate };
