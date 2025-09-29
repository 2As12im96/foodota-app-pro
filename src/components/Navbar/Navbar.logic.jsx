import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Url } from '../../redux/api';
import { logoutUser } from '../../redux/authSlice';

function useNavLogic() {
    const [navScroll , setnavScroll] = useState(false);
    const [activeNavigate , setActiveNavigate] = useState(false);
    const [activeAnimation , setActiveAnimation] = useState(false);
    const [menu , setMenu] = useState(false);
    const [shoppingCardMenu , setShoppingCardMenu] = useState(false);
    let body = document.body;
    /*---------------------------------------*/
    //Add move when window scroll
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 250 ? setActiveAnimation(true) : setActiveAnimation(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    /*---------------------------------------*/

    const handleClickMenu = ()=>{
        body.classList.toggle('active');
        setMenu(true);
    }
    const handleClickHiddenMenu = ()=>{
        body.classList.remove('active');
        setMenu(false);
    }
    const handleShoppingCard = ()=>{
        body.classList.toggle('active');
        setShoppingCardMenu(true);
    }
    const hiidenShoppingCardMenu = ()=>{
        body.classList.remove('active');
        setShoppingCardMenu(false);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const socialLogin = JSON.parse(localStorage.getItem('user'));
    const handleLogoutWithBackend = async () => {
        try {
            const response = await axios.post(`${Url}/auth/logout`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            dispatch(logoutUser()); 
            console.log('Logged out successfully.');
            localStorage.removeItem('tokenClient');
            localStorage.removeItem('userClient');
            localStorage.removeItem('cartItems');
            localStorage.removeItem('favoriteItems');
            localStorage.removeItem('justOneProduct');
        
            navigate('/');

        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    //Checkout
    const carts = useSelector(state => state.cart);
    const user = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const checkout = () => {
        setIsLoading(true);
        let currentUserId = user ? user._id : null;
        if (!currentUserId) {
            try {
                const userFromLocalStorage = localStorage.getItem('user')
                if (userFromLocalStorage) {
                    const parsedUser = JSON.parse(userFromLocalStorage);
                    currentUserId = parsedUser._id; 
                }
            } catch (e) {
                console.error("Error parsing user from localStorage:", e);
            }
        }

        if (!currentUserId) {
            console.error("User ID is not available. Please log in.");
            setIsLoading(false);
            return;
        }

        axios.post(`${Url}/stripe/create-checkout-session`, {
            carts: carts.cartItems,
            userId: currentUserId
        })
        .then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        })
        .catch((err) => {
            console.error("Error creating checkout session:", err.message);
            setIsLoading(false);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    return {
        navScroll,
        activeNavigate,
        activeAnimation,
        menu,
        shoppingCardMenu,
        socialLogin,
        handleClickMenu,
        handleClickHiddenMenu,
        handleShoppingCard,
        hiidenShoppingCardMenu,
        handleLogoutWithBackend,
        isLoading,
        checkout
    }
}

export default useNavLogic
