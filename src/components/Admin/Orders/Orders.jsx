import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/orderSlice";
import NavAdmin from "../NavAdmin/NavAdmin";
import AsideBar from "../AsideBar/AsideBar";
import OrdersList from "./OrderList";

function Orders() {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const { orders, loading, error } = useSelector(state => state.orders); 

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]); 
    return (
        <>
            <NavAdmin active={active} setActive={setActive} />
            <section className='orders-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AsideBar active={active} setActive={setActive} />
                        </div>
                        <div className="col-lg-9">
                            <div className='component_products just_order create_form mt-3'>
                                <h2>ALL ORDERS</h2>
                                {loading ? (
                                    <div className="loader-screen d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                                        <div className="spinner-border" role="status">
                                            <span className="loader"></span>
                                        </div>
                                    </div>
                                ) : error ? (
                                    <p className="text-danger">Error fetching orders: {error}</p>
                                ) : (
                                    <OrdersList orders={orders}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Orders;