import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';
import {logoutUser} from './authSlice';


export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems: localStorage.getItem('cartItems') ? 
                  JSON.parse(localStorage.getItem('cartItems')) : [] ,
        cartTotalQuantity:0,
        cartTotalAmount:0 ,
        cartTotalAmountAfterShipping: 0,
        favoriteItems: localStorage.getItem("favoriteItems") ?
                       JSON.parse(localStorage.getItem("favoriteItems")) : [] ,
        favoriteTotalQuantity:localStorage.getItem("favoriteItems") ?
                              JSON.parse(localStorage.getItem("favoriteItems")).length: 0,
        justOneProduct:localStorage.getItem('justOneProduct') ? 
                       JSON.parse(localStorage.getItem('justOneProduct')) : [] ,
    },
    reducers:{
		addToCart(state , action){
            const itemIndex = state.cartItems.findIndex(
                (item)=> item._id === action.payload._id
            );
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(` increased ${state.cartItems[itemIndex].title} product quantity ` , {
                    position: 'bottom-left',
                });
            }
            else{
                const tempProduct = { ...action.payload , cartQuantity:1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart ` , {
                    position: 'bottom-left',
                });
            }
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems))
        },
        removeFromCart(state , action){
            const nextCartItems = state.cartItems.filter(
                (cartItem)=> cartItem._id !== action.payload._id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
            toast.error(`${action.payload.title} remove from cart ` , {
                position: 'bottom-left',
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseCart: (state, action) => {
            const itemToDecrease = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === itemToDecrease._id
            );
            if (existingItemIndex !== -1) {
                if (state.cartItems[existingItemIndex].cartQuantity > 1) {
                    state.cartItems[existingItemIndex].cartQuantity -= 1;
                    toast.info(` decreased ${state.cartItems[existingItemIndex].title} product quantity `, {
                        position: 'bottom-left',
                    });
                }
                else if (state.cartItems[existingItemIndex].cartQuantity === 1) {
                    state.cartItems = state.cartItems.filter(
                        (item) => item._id !== itemToDecrease._id
                    );
                    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                    toast.error(`${itemToDecrease.title} removed from cart`, {
                        position: 'bottom-left',
                    });
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart(state , action){
            state.cartItems = [];
            toast.error(`Cart cleared` , {
                position: 'bottom-left',
            });
            localStorage.setItem('cartItems' , JSON.stringify(state.cartItems));
        },
        getTotals(state , action){
            let {total , quantity} = state.cartItems.reduce(
                (cartTotal , cartItem)=> {
                    const { cost , cartQuantity } = cartItem;
                    const itemTotal = cost * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal
                },
                {
                    total:0,
                    quantity:0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
            state.cartTotalAmountAfterShipping = (state.cartTotalAmount + 20);
        },
        addToFavorite(state, action) {
            const itemIndex = state.favoriteItems.findIndex(
              (item) => item._id === action.payload._id
            );
      
            if (itemIndex >= 0) {
              toast.info(`${action.payload.title} already exists in favorites`, {
                position: "bottom-left",
              });
            } 
            else {
              state.favoriteItems.push(action.payload);
              toast.success(`${action.payload.title} added to favorites`, {
                position: "bottom-left",
              });
              localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
              state.favoriteTotalQuantity++;
            }
        },
        removeFromFavorite(state, action) {
            const nextFavorites = state.favoriteItems.filter(
              (favoriteItem) => favoriteItem._id !== action.payload._id
            );
            state.favoriteItems = nextFavorites;
            localStorage.setItem("favoriteItems", JSON.stringify(nextFavorites));
            toast.warning(`${action.payload.title} removed from favorites`, {
              position: "bottom-left",
            });
            state.favoriteTotalQuantity--;
        },
        justOneProduct(state , action){
            state.justOneProduct = [action.payload];
            localStorage.setItem('justOneProduct' , JSON.stringify(state.justOneProduct))
        },
        removeData(state){
            state.cartItems = [];
            state.favoriteItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalPrice = 0;
            state.favoriteTotalQuantity = 0;
        }
	},
     extraReducers: (builder) => {
        builder.addCase(logoutUser, (state) => {
            state.cartItems = [];
            state.favoriteItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalPrice = 0;
            state.favoriteTotalQuantity = 0;
        });
        
    },
}); 
export const {addToCart , removeFromCart , decreaseCart , clearCart , getTotals , addToFavorite , removeFromFavorite , justOneProduct , removeData}  = cartSlice.actions
export default cartSlice.reducer