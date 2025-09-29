import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setHeaders, Url } from "../../../redux/api";
import NavAdmin from "../NavAdmin/NavAdmin";
import AsideBar from "../AsideBar/AsideBar";


function OrderDetails(){
    const params = useParams();
    const [order , setOrder] = useState({});
    const [loading , setLoading] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(()=>{
        const fetchOrder = async()=>{
            try{
                setLoading(true);
                const response = await axios.get(`${Url}/order/find/${params.id}` , setHeaders());
                setOrder(response.data);
                setLoading(false);
            }catch(err){
                console.error("Error fetching order details:", err);
                setLoading(false);
            }
        };
        fetchOrder();
    } ,[params.id])

    return(
        <>
            <NavAdmin active={active} setActive={setActive}/>
            <section className='orders-parent'>
                <section className='orders_details'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <AsideBar active={active} setActive={setActive}/>
                            </div>
                            <div className='col-lg-9'>
                                {loading ? 
                                    (
                                        <div className="loader-screen d-flex justify-content-center align-items-center">
                                            <div className="spinner-border" role="status">
                                                <span className="loader"></span>
                                            </div>
                                        </div>
                                    ):
                                    (
                                        <div className='just_order create_form mt-3'>
                                            <h2>Order Details</h2>
                                            
                                            <span className="span_status">Delivery Status: {' '}</span>
                                            {order.delivery_status === 'pending' ? 
                                                (<span className='pending'>Pending</span>) : 
                                                order.delivery_status === 'dispatched' ? 
                                                (<span className='dispatched'>Dispatched</span>) : 
                                                order.delivery_status === 'delivered' ? 
                                                (<span className='delivered'>Delivered</span>) : 
                                                (<p>Unknown Status</p>)
                                            }

                                            <div className="order_products">
                                                <h3>Ordered Products</h3>
                                                <table className="table table-bordered text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Product Name</th><th>Image</th><th>Quantity</th><th>Price</th><th>Total Product Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.products && order.products.map((product)=>{
                                                            return(
                                                                <tr key={product._id || product.id}>
                                                                    <td><span className="d-block">{product.name}</span></td>

                                                                    <td className='img_td'><img className='img-fluid' src={product.image} alt={product.name || 'Product Image'} style={{maxWidth: '80px', maxHeight: '80px'}}/></td>

                                                                    <td><span className='d-block'>{product.cartQuantity}</span></td>

                                                                    <td><span className="d-block">${product.price?.toFixed(2)}</span></td>

                                                                    <td><span className="d-block">${(product.price * product.cartQuantity)?.toFixed(2)}</span></td>

                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                            <div>
                                                <h3>Total Order Price</h3>
                                                <p className="total-amount">${order.total?.toFixed(2)}</p>
                                            </div>

                                            <div className="shipping_details">
                                                <h3>Shipping Details</h3>
                                                <p>Customer Name: <span>{order.shipping?.name || 'N/A'}</span></p>
                                                <p>City: <span>{order.shipping?.address?.city || 'N/A'}</span></p>
                                                <p>Email: <span>{order.shipping?.email || 'N/A'}</span></p>
                                                <p>Phone: <span>{order.shipping?.phone || 'N/A'}</span></p>
                                            </div>
                                        </div>
                                    ) 
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default OrderDetails;