import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerDB } from "../../../db/controllers/auth/auth";

export const register = createAsyncThunk("auth/signup", async (credentials, thunkAPI) => {
  try {
    const { data } = await registerDB(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
