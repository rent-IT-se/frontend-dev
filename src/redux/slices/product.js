import { setMessage } from "./message";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductServices from "../../Services/ProductServices";
export const GetAllSubCategories = createAsyncThunk(
    "product/subCategories",
    async function (thunkAPI) {
        try {
            const data = await ProductServices.getAllSubCategories();
            console.log("My sub categories", data);
            return data;
        } catch (error) {
            console.log(error);
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
  );

  export const GetAllCategories = createAsyncThunk(
    "get/categories",
    async (thunkAPI) => {
      try {
        const data = await ProductServices.getAllCategories();
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
  export const PostProduct = createAsyncThunk(
    "post/product",
    async (formData,thunkAPI) => {
        
      try {
        const data = await ProductServices.postProduct(formData);
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
  export const GetProducts = createAsyncThunk(
    "get/products",
    async ({sub,page,per_page},thunkAPI) => {
      try {
        const data = await ProductServices.getProducts( sub, page, per_page);
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
  export const GetPopularProducts = createAsyncThunk(
    "get/popular/products",
    async (thunkAPI) => {
      try {
        const data = await ProductServices.getPopularProducts();
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
  export const GetNewProducts = createAsyncThunk(
    "get/new/products",
    async (thunkAPI) => {
      try {
        const data = await ProductServices.getNewProducts();
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
  export const GetProductById = createAsyncThunk(
    "get/productsByid",
    async (id,thunkAPI) => {
      console.log(id)
      try {
        const data = await ProductServices.getProductById(id);
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
  const initialState = {
    AllSubCategories:[],
    AllCategories:[],
    PostedProduct:[],
    isProductPosted:"",
    Products:[],
    isProductsGetted:"bfdz",
    ProductById:[],
    PopularProducts:[],
    NewProducts:[],
  }
  const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [GetAllSubCategories.fulfilled]: (state, action) => {
            state.AllSubCategories= action.payload;
          },
          [GetAllSubCategories.rejected]: (state, action) => {
            
            state.AllSubCategories = [];
          },
    
          [GetAllSubCategories.pending]: (state, action) => {
            state.AllSubCategories = [];
          },
          [GetAllCategories.fulfilled]: (state, action) => {
          
            state.AllCategories= action.payload;  
            
          },
          [GetAllCategories.rejected]: (state, action) => {
            
            state.AllCategories = [];
          },
    
          [GetAllCategories.pending]: (state, action) => {
           
            state.AllCategories = [];
          },
          [PostProduct.fulfilled]: (state, action) => {
          
            state.PostedProduct= action.payload;
            state.isProductPosted = true;
          },
          [PostProduct.rejected]: (state, action) => {
            
            state.PostedProduct = [];
            state.isProductPosted = false;
          },
    
          [PostProduct.pending]: (state, action) => {
           
            state.isProductPosted = "loading";
          },
          [GetProducts.fulfilled]: (state, action) => {
          
            state.Products= action.payload;
            state.isProductsGetted = true;
          },
          [GetProducts.rejected]: (state, action) => {
            
            state.Products = [];
            state.isProductsGetted = false;
          },
    
          [GetProducts.pending]: (state, action) => {
            state.Products = [];
            state.isProductsGetted = "loading";
          },
          [GetProductById.fulfilled]: (state, action) => {
          
            state.ProductById= action.payload;
            state.isProductsGetted = true;
          },
          [GetProducts.rejected]: (state, action) => {
            
            state.ProductById = [];
            state.isProductsGetted = false;
          },
    
        
          
          [GetPopularProducts.fulfilled]: (state, action) => {
          
            state.PopularProducts= action.payload;
            state.isProductsGetted = true;
          },
          [GetPopularProducts.rejected]: (state, action) => {
            
            state.PopularProducts = [];
            state.isProductsGetted = false;
          },
    
          [GetPopularProducts.pending]: (state, action) => {
            state.PopularProducts = [];
            state.isProductsGetted = "loading";
          },
          [GetNewProducts.fulfilled]: (state, action) => {
          
            state.NewProducts= action.payload;
            state.isProductsGetted = true;
          },
          [GetNewProducts.rejected]: (state, action) => {
            
            
            state.isProductsGetted = false;
          },
    
          [GetNewProducts.pending]: (state, action) => {
          
            state.isProductsGetted = "loading";
          },
      },
    });
    const { reducer } = productSlice;
    
    export default reducer;