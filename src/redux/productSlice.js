import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, Url } from "./api";
import { toast } from "react-toastify";



export const productsFetch = createAsyncThunk(
    "products/productsFetch" , 
    async ()=>{
      try{
        const response =  await axios.get(`${Url}/product`);
        return response?.data
      }catch(error){
        console.error(error);
      }
    } 
);

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('type', values.type);
      formData.append('cost', values.cost);
      formData.append('discription', values.discription);
      formData.append('imageURL', values.imageURL);

      const response = await axios.post(`${Url}/product`, formData, {
        ...setHeaders(),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to create product');
      return rejectWithValue(error.response?.data);
    }
  }
);

export const productsEdit = createAsyncThunk(
    "products/productsEdit",
    async ({ id, productData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${Url}/product/find/${id}`, productData); 
            return response.data;
        } catch (error) {
            console.error("Error in productsEdit thunk:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data || "Failed to edit product.");
        }
    }
);


export const productsDelete = createAsyncThunk(
  "products/productsDelete" , 
  async (id)=>{
    try{
      const response =  await axios.delete(`${Url}/product/${id}` , setHeaders());
      return response.data;
    }catch(error){
      console.error(error);
      toast.error(error.response?.data);
    }
  } 
);

export const productSlice = createSlice({
    name:'products',
    initialState:{
       data: [],
       status:null,
       loading:false,
       loadingEdit:false,
       error:false
    },
    reducers:{
		
	  },
    extraReducers: (builder) => {
        /*---------------------------------------*/
        //Fetch data from server
        builder
          .addCase(productsFetch.pending, (state) => {
            state.status = 'pending';
            state.loading = true
          });
          builder
          .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
            state.loading = false;
          });
          builder
          .addCase(productsFetch.rejected, (state) => {
            state.status = 'rejected';
            state.loading = false;
            state.error = 'We could not find the resource you requested. Please refer to the documentation for the list of resources.';
          });
          /*---------------------------------------*/

          /*---------------------------------------*/
          //create product on Admin Dashbord
          builder
          .addCase(productsCreate.pending, (state) => {
            state.status = 'pending';
            state.loading = true;
            state.error = false;
          });
          builder
          .addCase(productsCreate.fulfilled, (state, action) => {
            state.status = 'success';
            state.data.push(action.payload);
            toast.success('Product Created');
            state.loading = false;
            state.error = false;
          });
          builder
          .addCase(productsCreate.rejected, (state) => {
            state.status = 'rejected';
            toast.error('Create Product is failed. please try again');
            state.loading = false;
            state.error = 'Create Product is failed. please try again';
          });
          /*---------------------------------------*/

          /*---------------------------------------*/
          //delete product on Admin Dashbord
          builder
          .addCase(productsDelete.pending, (state) => {
            state.status = 'pending';
          });
          builder
          .addCase(productsDelete.fulfilled, (state, action) => {
            const newList = state.data.filter((item)=> item._id !== action.payload._id);
            state.data = newList;
            state.status = 'success';
            toast.warning('Product Delete');
          });
          builder
          .addCase(productsDelete.rejected, (state) => {
            state.status = 'rejected';
          });
          /*---------------------------------------*/

          /*---------------------------------------*/
          //Edit product on Admin Dashbord
          builder
          .addCase(productsEdit.pending, (state) => {
            state.status = 'pending';
            state.loadingEdit = true;
            state.error = false;
          });
          builder
          .addCase(productsEdit.fulfilled, (state, action) => {
            const updatedProducts = state.data.map((product) => product._id === action.payload._id ? action.payload : product);
            state.data = updatedProducts;
            state.status = 'success';
            state.loadingEdit = false;
            toast.info('Product Edited');
          });
          builder
          .addCase(productsEdit.rejected, (state , action) => {
            state.status = 'rejected';
            state.loadingEdit = false;
            state.error = action.payload || 'Edit product is failed';
            toast.error(action.payload || 'Edit product is failed');
          });
          /*---------------------------------------*/
      },
}); 

export default productSlice.reducer