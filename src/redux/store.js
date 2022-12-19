import { configureStore } from '@reduxjs/toolkit'
import authReduces from "./slices/auth"
import messageReducer from "./slices/message"
import adminReducer from "./slices/admin"
import userReducer from "./slices/user"
import productReducer from "./slices/product"
import chatReducer from "./slices/chat"
const reducer = {
    auth: authReduces,
    message: messageReducer,
    admin:adminReducer,
    userData:userReducer,
    product:productReducer,
    chat:chatReducer,
}
const store = configureStore({
    reducer: reducer,
    devTools: true,
    
  })
export default store;