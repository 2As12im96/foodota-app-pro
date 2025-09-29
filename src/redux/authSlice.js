import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, Url } from "./api";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

/*-----------------------------------------*/
//Authentication Client User
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${Url}/register`, {
                FirstName: user.FirstName,
                LastName: user.LastName,
                name: user.name,
                email: user.email,
                password: user.password,
                isAdmin: false,
            });
            localStorage.setItem('token', response.data); 
            const decodedUser = jwtDecode(response.data);
            const userToStore = {
                id: decodedUser._id,
                name: decodedUser.name,
                email: decodedUser.email,
                FirstName: decodedUser.FirstName, 
                LastName: decodedUser.LastName,
                isAdmin: decodedUser.isAdmin,
            };
            localStorage.setItem('user', JSON.stringify(userToStore));
            return { token: response.data, user: userToStore };
        }
        catch (err) {
            console.error("Error during registration:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data || "An error occurred during registration.");
        }
    }
);


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${Url}/login`, { 
                email: user.email,
                password: user.password,
            });
            localStorage.setItem('token', response.data); 
            const decodedUser = jwtDecode(response.data);
            const userToStore = {
                id: decodedUser._id,
                name: decodedUser.name,
                email: decodedUser.email,
                FirstName: decodedUser.FirstName,
                LastName: decodedUser.LastName,
                isAdmin: decodedUser.isAdmin,
            };
            localStorage.setItem('user', JSON.stringify(userToStore));
            return { token: response.data, user: userToStore }; 
        }
        catch (err) {
            console.error("Error during login:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data || "An error occurred during login.");
        }
    }
);
/*-----------------------------------------*/

/*-----------------------------------------*/
// GET User Data
export const fetchBasicsUsers = createAsyncThunk(
    'auth/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Url}/users`);
            return response.data;
        }
        catch (err) {
            console.error("Error fetching users:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data || "Failed to fetch users.");
        }
    }
)
/*-----------------------------------------*/

/*-----------------------------------------*/
//Delete User
export const userDelete = createAsyncThunk(
    'auth/userDelete',
    async (id, { rejectWithValue }) => { 
        try {
            
            const response = await axios.delete(`${Url}/users/${id}`, setHeaders());
            toast.error('User Deleted Successfully', { position: 'bottom-left' }); 
            return response.data;
        }
        catch (err) {
            console.log(err.response?.data);
            toast.error(err.response?.data || 'Failed to delete user', { position: 'bottom-left' });
            return rejectWithValue(err.response?.data || 'Failed to delete user');
        }
    }
)
/*-----------------------------------------*/

// Helper function to load user from localStorage at app start
const loadUserFromLocalStorage = () => {
    try {
        const token = localStorage.getItem('token'); 
        const userJson = localStorage.getItem('user'); 

        if (token && userJson) {
            const user = JSON.parse(userJson);
            return { token, user };
        }
        return { token: null, user: null };
    } catch (e) {
        console.error("Failed to load user from local storage", e);
        return { token: null, user: null };
    }
};

const { token: initialToken, user: initialUser } = loadUserFromLocalStorage();

const initialState = {
    user: initialUser,
    token: initialToken, 
    status: 'idle', 
    data: [], 
    loading: false,
    error: null, 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        googleLoginSuccess: (state, action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.user = action.payload; 
            state.token = localStorage.getItem('token');
            state.error = null;
        },
        
        googleLoginFailure: (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload;
            state.user = null;
            state.token = null;
        },

        logoutUser(state) {
            localStorage.removeItem('token'); 
            localStorage.removeItem('user'); 
            localStorage.removeItem('tokenClient'); 
            localStorage.removeItem('userClient');
            
           
            state.token = null;
            state.user = null;
            state.status = 'idle';
            state.error = null;
            state.loading = false;
        },
        
        clearAuthError: (state) => {
            state.error = null;
        },
        
        clearRegisterStatus: (state) => {
             state.status = 'idle';
             state.error = null;
        }
    },
    extraReducers: (builder) => {

        /*-----------------------------------------*/
        //Register Client User
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
                state.error = null; 
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loading = false;
                state.token = action.payload.token; 
                state.user = action.payload.user;  
                state.error = null;
                
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.loading = false;
                state.error = action.payload; 
                state.token = null;
                state.user = null;
            });
        /*-----------------------------------------*/


        /*-----------------------------------------*/
        //Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
                state.loading = true; 
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;  
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.loading = false;
                state.error = action.payload; 
                state.token = null; 
                state.user = null; 
            });
        /*-----------------------------------------*/


        /*-----------------------------------------*/
        //Fetch Users (No major changes needed here for auth state, only minor cleanup)
        builder
            .addCase(fetchBasicsUsers.pending, (state) => {
                state.loading = true;
                state.error = null; 
            });
        builder
            .addCase(fetchBasicsUsers.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.status = 'succeeded'; 
                state.error = null;
            });
        builder
            .addCase(fetchBasicsUsers.rejected, (state, action) => {
                state.loading = false;
                state.status = 'failed'; 
                state.error = action.payload; 
            });
        /*-----------------------------------------*/


        /*-----------------------------------------*/
        //Delete User (No major changes needed here for auth state, only minor cleanup)
        builder
            .addCase(userDelete.pending, (state) => {
                state.status = 'pending';
                state.loading = true;
                state.error = null; 
            });
        builder
            .addCase(userDelete.fulfilled, (state, action) => {
                const newList = state.data.filter((user) => user._id !== action.payload._id);
                state.data = newList;
                state.status = 'succeeded'; 
                state.loading = false;
                state.error = null; 
            });
        builder
            .addCase(userDelete.rejected, (state, action) => {
                state.status = 'failed';
                state.loading = false;
                state.error = action.payload; 
            });
        /*-----------------------------------------*/
    }
})

/*-----------------------------------------*/

export const { logoutUser, googleLoginSuccess, googleLoginFailure, clearAuthError, clearRegisterStatus } = authSlice.actions;
export default authSlice.reducer;