import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { number, string } from "yup";
import { API } from "../../utils/axiosConfig";

export const getChat = createAsyncThunk(
    'chat/getChat',
    async({id}, { rejectWithValue }) => {
        try {
            const res = await API.get('chat-room', {params: {pk: id}});
            console.log(res.data);
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
export const getChatById = createAsyncThunk(
    'chat/getChatById',
    async(id, { rejectWithValue }) => {
        try {
            const res = await API.get('chat-room/'+id);
            console.log(res.data);
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
export const CreateChat = createAsyncThunk(
    'chat/createChatById',
    async({myId, userId}, { rejectWithValue }) => {
        try {
            const res = await API.post('chat/');
            console.log(res.data);
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

const initialState = {
    status: 'Active',
    error: null,
    chatList: [],
    createdChat:[],
    isChatCreated:""


};

const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, {payload}) => {
            const index = state.chatList.findIndex(i => +i.id === +payload.id);
            
            if (index < 0) return;
            if (!state.chatList[index].message) state.chatList[index].message = []
            console.log(index, "asdafsd")
            console.log([...state.chatList[index].message, payload.message]);
            state.chatList[index].message = [...state.chatList[index].message, payload.message];
            console.log({ chatList: current(state.chatList), index, payload })
        }
    },
    extraReducers: {
        [getChat.pending]: (state) => {state.status = 'Loading chat list'},
        [getChat.fulfilled]: (state, {payload}) => {
            state.chatList = payload;
            state.status = 'Active';
        },
        [getChat.rejected]: (state, {payload}) => {
            state.status = 'Rejected get chat list';
            state.error = payload;
        },
        [getChatById.pending]: (state) => {state.status = 'Loading chat'},
        [getChatById.fulfilled]: (state, {payload}) => {
          state.chatList = [...state.chatList.filter(item => item.id !== payload.id), payload];
          state.status = 'Active';
        },
        [getChatById.rejected]: (state, {payload}) => {
            state.error = payload;
            state.status = 'Rejected get chat by id';
        },
         [CreateChat.fulfilled]: (state, {payload}) => {
            state.isChatCreated = 'Chat created';
            state. createdChat = payload;
        },
        [CreateChat.pending]: (state) => {
            state.isChatCreated = 'Chat is loading';
            
        },
        [CreateChat.rejected]: (state, {payload}) => {
            state.isChatCreated= "Chat is not created"
        },
       
  }
});
const { reducer, actions } = ChatSlice;
export const  { addMessage } = actions;
export default reducer;