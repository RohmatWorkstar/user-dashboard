import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// API Requests
const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => (await api.get("/users")).data);
export const addUser = createAsyncThunk("users/addUser", async (newUser) => (await api.post("/users", newUser)).data);
export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser) => (await api.put(`/users/${updatedUser.id}`, updatedUser)).data);

const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], searchTerm: "" },
    reducers: {
        setSearchTerm: (state, action) => { state.searchTerm = action.payload; },
        deleteUser: (state, action) => { state.users = state.users.filter(user => user.id !== action.payload); },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => { state.users = action.payload; })
            .addCase(addUser.fulfilled, (state, action) => { state.users.push(action.payload); })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) state.users[index] = { ...state.users[index], ...action.payload };
            });
    },
});

export const { setSearchTerm, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
