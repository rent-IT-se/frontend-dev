import AuthService from "../../Services/AuthService";
import { setMessage } from "./message";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));
export const login = createAsyncThunk(
    "user/login",
    async (obj, thunkAPI) => {
      try {
        const data = await AuthService.login(obj);
        console.log(data);
        return { user: data };
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
export const loginGoogle =createAsyncThunk (
  "user/google",
  async (obj, thunkAPI) => {
    try {
      const data = await AuthService.loginGoogle(obj);
      console.log(data);
      return { user: data } ;
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
  export const register = createAsyncThunk(
    "user/register",
    async (obj, thunkAPI) => {
      try {
        const data = await AuthService.register(obj);
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
  export const sendEmail = createAsyncThunk(
    "user/forgot",
    async (obj, thunkAPI) => {
      try {
        const data = await AuthService.sendEmail(obj);
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


const IsLogin=()=> user ? {isLoggedIn: true, user} : {isLoggedIn: false, user: ""}
const initialState = {
  ...IsLogin(),
  EmailSended:false,
  IsRegistered:"",
  currentEmail:null,
  CodeSended:false,
  PasswordChanged:false,
  userInfo:""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.user="";
      }
    },
    extraReducers: {
      
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },

      [login.pending]: (state, action) => {
        state.isLoggedIn = "loading";
        state.user = null;
      },
      [loginGoogle.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        
      },
      [loginGoogle.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      
      [loginGoogle.pending]: (state, action) => {
        state.isLoggedIn = "loading";
        state.user = null;
      },
      [register.fulfilled]: (state, action) => {
        state.IsRegistered = true;
        
      },
      [register.rejected]: (state, action) => {
        state.IsRegistered = false;
        
      },
      [register.pending]: (state, action) => {
        state.IsRegistered = "loading";
      },
      
    //   [sendEmail.rejected]:(state ,action)=>{
    //     state.EmailSended=false;
    //   },
    //   [sendEmail.fulfilled]:(state ,action)=>{
    //     state.EmailSended=true;
    //     state.currentEmail = action.payload;
    //   },
    //   [sendEmail.rejected]:(state ,action)=>{
    //     state.CodeSended=false;
    //   },
    //   [sendCode.fulfilled]: (state, action) => {
    //     console.log("HERE");
    //     state['user']['id'] = action.payload.id;
    //     console.log(action.payload);
    //     console.log("THERE");
    //   },
    //   [onChangePassword.rejected]:(state,action)=>{
    //     state.PasswordChanged=false
    //   },
    //   [onChangePassword.fulfilled]:(state,action)=>{
    //     state.PasswordChanged=true
    //   }
  
  
    },
  });
  const { reducer } = authSlice;
  export const {
    logout
  } = authSlice.actions;
  export default reducer;