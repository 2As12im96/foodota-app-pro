import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, Url } from "./api";


const initialState = {
    currentOrder: null,
    orders: [],
    loading:false,
    status: 'idle',
    error: null,
};

//Fetch orders Data
export const fetchOrders = createAsyncThunk(
    "order/fetchOrders",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Url}/order`);
            return response.data;
        } catch (err) {
            console.error("Error fetching orders:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

//Updated orders status
export const ordersEdit = createAsyncThunk(
    'order/ordersEdit',
    async (values, { getState, rejectWithValue }) => { 
        const state = getState();
        const orderToUpdate = state.orders.orders.find((order) => order._id === values.id);
        if (!orderToUpdate) {
            console.error("Order not found in state:", values.id);
            return rejectWithValue("Order not found in application state for editing.");
        }
        const updatePayload = {
            delivery_status: values.delivery_status,
        };
        try {
            const response = await axios.put(`${Url}/order/${values.id}`, updatePayload, setHeaders());
            return response.data;
        } catch (err) {
            console.error("Error updating order:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
)
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrderState: (state) => {
            state.status = 'idle';
            state.error = null;
            state.orders = [];
            state.currentOrder = null;
            state.loading = false;
        },
        setLastCreatedOrder: (state, action) => {
            state.currentOrder = action.payload;
        }
    },
    extraReducers: (builder) => {
        /*---------------------------------------------*/
        //fetch orders data
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'success';
                state.orders = action.payload; 
                state.loading = false
                state.error = null;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
                state.loading = false;
            });
        /*---------------------------------------------*/
        //Edit and Update state orders
        builder
            .addCase(ordersEdit.pending, (state) => {
                state.loading = true;
                state.status = 'pending';
                state.error = null;
            })
            .addCase(ordersEdit.fulfilled, (state, action) => {
                state.loading = false;
                state.status = 'success';
                const index = state.orders.findIndex(order => order._id === action.payload._id);
                if (index !== -1) {
                    state.orders[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(ordersEdit.rejected, (state, action) => {
                state.loading = false;
                state.status = 'rejected';
                state.error = action.payload;
            });
        /*---------------------------------------------*/
    },
});

export const { clearOrderState, setLastCreatedOrder } = orderSlice.actions;
export default orderSlice.reducer;