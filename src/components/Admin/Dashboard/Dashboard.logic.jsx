import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setHeaders, Url } from '../../../redux/api';
import { productsFetch } from '../../../redux/productSlice';

function useDashboardLogic() {
    const dispatch = useDispatch();
    const items  = useSelector(state=> state.products);
    const [users , setUsers] = useState(0);
    const [orders , setOrders] = useState(0);
    const [earn , setEarn] = useState(0);

    //Users State
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${Url}/users/find/all-stats`, setHeaders());
                const usersData = response.data;
                if (!usersData || !Array.isArray(usersData) || usersData.length === 0) {
                    console.error("Invalid API response:", usersData);
                    return; 
                }
                const total = usersData.reduce((acc, user) => acc + user.total, 0);
                setUsers(total);
            } catch (error) {
                console.error("Error fetching users stats:", error);
            }
        }

        fetchData();
    }, []);

    //Orders State
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${Url}/order/all-stats`, setHeaders());
                const ordersData = response.data;
                if (ordersData && Array.isArray(ordersData)) {
                    const total = ordersData.reduce((acc, order) => acc + order.total, 0);
                    setOrders(total);
                } else {
                    console.error("Invalid API response:", ordersData);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
        fetchData();
    }, []);

    //Earnings State
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${Url}/order/all-earn/stats`, setHeaders());
                const earningData = response.data;
                if (earningData && Array.isArray(earningData)) {
                    const total = earningData.reduce((acc, order) => acc + order.total, 0);
                    setEarn(total);
                } else {
                    console.error("Invalid API response:", earningData);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }
        fetchData();
    }, []);

    //products State
    useEffect(()=>{
        dispatch(productsFetch());
    },[dispatch]);
    return {
        items,
        users,
        orders,
        earn
    }
}

export default useDashboardLogic
