import AdminServices from "../../Services/AdminServices";
import { setMessage } from "./message";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getSupports = createAsyncThunk(
    "supports/",
    async (obj, thunkAPI) => {
      try {
        const data = await AdminServices.getSupports();
        console.log(data);
        return data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  const initialState = {
    supports:"",
  }
  const adminSlice = createSlice({
      name: "admin",
      initialState,
      
      extraReducers: {
        
        [getSupports.fulfilled]: (state, action) => {
          
          state.supports = action.payload;
          
        },
        [getSupports.rejected]: (state, action) => {
          
          state.supports = null;
        },
  
        [getSupports.pending]: (state, action) => {
         
          state.supports = null;
        },
    
    
      },
    });
    const { reducer } = adminSlice;
    
    export default reducer;