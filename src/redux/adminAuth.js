import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Url } from "./api";
import {jwtDecode} from 'jwt-decode'
import { toast } from "react-toastify";



const loadAdminAuthState = () => {
    const adminToken = localStorage.getItem('adminToken');
    let adminUserName = localStorage.getItem('adminUserName');
    let status = 'idle';

    if (adminToken) {
        try {
            const decodedToken = jwtDecode(adminToken);
            if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUserName');
                adminUserName = null;
                status = 'loggedOut';
            } else {
                status = 'success';
                if (!adminUserName || adminUserName !== decodedToken.name) {
                    adminUserName = decodedToken.name;
                    localStorage.setItem('adminUserName', adminUserName);
                }
            }
        } catch (error) {
            console.error("Error decoding admin token on initial load:", error);
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUserName');
            adminUserName = null;
            status = 'error';
        }
    }

    return {
        adminToken,
        adminUserName, 
        data:[],
        FirstName:'',
        LastName:'',
        name:'',
        email:'',
        password:'',
        _id:'',
        isAdmin:true,
        status: status, 
        loading:false,
        error:false,
    };
};

const initialState = loadAdminAuthState();

/*-----------------------------------------*/
//Authentication Admin User
export const registerAdminUser = createAsyncThunk(
    'adminAuth/registerAdminUser',
    async(user , {rejectWithValue})=>{
        try{
            const response  =  await axios.post(`${Url}/register` , {
                FirstName: user.FirstName,
                LastName: user.LastName,
                name: user.name,
                email: user.email,
                password: user.password,
                isAdmin:true,
            });
            const adminToken = response.data;
            const decodedToken = jwtDecode(adminToken);
            localStorage.setItem('adminToken', adminToken);
            localStorage.setItem('adminUserName', decodedToken.name);
            return decodedToken;
        }
        catch(err){
            console.error("Error during registration:", err.response?.data || err.message);
            return rejectWithValue(err.response.data);
        }
    }
)

export const loginAdminUser = createAsyncThunk(
    'adminAuth/loginAdminUser',
    async(user , {rejectWithValue})=>{
        try{
            const response =  await axios.post(`${Url}/login` , {
                email: user.email,
                password: user.password,
            });
            const adminToken = response.data;
            const decodedToken = jwtDecode(adminToken);

            localStorage.setItem('adminToken', adminToken);
            localStorage.setItem('adminUserName', decodedToken.name);
            return decodedToken;
        }
        catch(err){
            console.error("Error during registration:", err.response?.data || err.message);
            return rejectWithValue(err.response.data);
        }
    }
)
/*-----------------------------------------*/

const adminAuthSlice = createSlice({
    name:'adminAuth',
    initialState,
    reducers:{
        logoutAdminUser(state , action){
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUserName');
            return {
                ...state,
                adminToken: null,
                adminUserName: null,
                data: [],
                FirstName: '',
                LastName: '',
                name: '', 
                email: '',
                password: '',
                _id: '',
                isAdmin: true,
                status: 'loggedOut',
                loading: false,
                error: false,
            };
        }
    },
    extraReducers:(builder)=>{
        /*-----------------------------------------*/
        //Authentication Admin User

        /*-----------------------------------------*/
        //Register
        builder
        .addCase(registerAdminUser.pending , (state)=>{
            return { 
                ...state ,
                status:'pending',
                loading:true,
                error:false,
            }
        }); 
        builder
        .addCase(registerAdminUser.fulfilled , (state , action)=>{
                const adminUser = action.payload;
                return {
                    ...state , 
                    adminToken: localStorage.getItem('adminToken'),
                    FirstName: adminUser.FirstName,
                    LastName: adminUser.LastName,
                    adminUserName: adminUser.name,
                    email: adminUser.email,
                    password: adminUser.password,
                    _id: adminUser._id,
                    isAdmin: true,
                    status:'success',
                    loading:false,
                    error:false,
                    toast: toast.success('Admin user registered successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }),  
                }
           
        }); 
        builder
        .addCase(registerAdminUser.rejected , (state , action)=>{
            return{
                ...state,
                status:'rejected',
                error:action.payload,
                loading:false,
                toast: toast.error(`email or password is not valid`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }),
            }
        }); 
    /*-----------------------------------------*/
        //Login
        builder
        .addCase(loginAdminUser.pending , (state , action)=>{
            return { 
                ...state ,
                status:'pending',
                loading:true,
                error:false,
            }
        }); 
        builder
        .addCase(loginAdminUser.fulfilled , (state , action)=>{
                const adminUser = action.payload;
                return {
                    ...state , 
                    adminToken: localStorage.getItem('adminToken'),
                    FirstName: adminUser.FirstName,
                    LastName: adminUser.LastName,
                    adminUserName: adminUser.name,
                    email: adminUser.email,
                    password: adminUser.password,
                    _id: adminUser._id,
                    isAdmin: true,
                    status:'success',
                    loading:false,
                    error:false,
                    toast: toast.success('Admin user logged in successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }),
                }
        }); 
        builder
        .addCase(loginAdminUser.rejected , (state , action)=>{
            return{
                ...state,
                status:'rejected',
                error:action.payload,
                loading:false,
                toast: toast.error(`email or password is not valid`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }),
            }
        }); 
        /*-----------------------------------------*/
    },
})
export const { clearRegisterStatus  , logoutAdminUser} = adminAuthSlice.actions;
export default adminAuthSlice.reducer 