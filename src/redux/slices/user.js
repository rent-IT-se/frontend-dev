import UserServices from "../../Services/UserServices";
import { setMessage } from "./message";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const GetUserById = createAsyncThunk(
    "user/id",
    async ({ id }, thunkAPI) => {
      try {
        const data = await UserServices.getUserData(id);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error)
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
  export const PutUserById = createAsyncThunk(
    "Putuser/id",
    async ({id,formData},thunkAPI) => {
      try {
        const data = await UserServices.putUserData(id,formData);
        return data;
      } catch (error) {
        console.log(error)
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
  export const GetMyProducts = createAsyncThunk(
    "getmyproducts",
    async (thunkAPI) => {
      try {
        const data = await UserServices.getMyProducts();
        return data;
      } catch (error) {
        console.log(error)
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
    UserData:"",
    UserPut:"",
    MyProducts:[],

  }
  const userSlice = createSlice({
      name: "user",
      initialState,
      
      extraReducers: {
        
        [GetUserById.fulfilled]: (state, action) => {
          
          state.UserData= action.payload;
          
        },
        [GetUserById.rejected]: (state, action) => {
          
          state.UserData = null;
        },
  
        [GetUserById.pending]: (state, action) => {
         
          state.UserData = "loading";
        },
        [PutUserById.fulfilled]: (state, action) => {
          
            state.UserPut= action.payload;
            
          },
          [PutUserById.rejected]: (state, action) => {
            
            state.UserPut = null;
          },
    
          [PutUserById.pending]: (state, action) => {
           
            state.UserPut = "loading";
          },
          [GetMyProducts.fulfilled]: (state, action) => {
          
            state.MyProducts= action.payload;
            
          },
          [GetMyProducts.rejected]: (state, action) => {
            
            state.MyProducts = null;
          },
    
          [GetMyProducts.pending]: (state, action) => {
           
            state.MyProducts = [];
          },
    
    
      },
    });
    const { reducer } = userSlice;
    
    export default reducer;