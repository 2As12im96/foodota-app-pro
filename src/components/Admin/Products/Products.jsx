import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../../../redux/productSlice';
import NavAdmin from '../NavAdmin/NavAdmin';
import AsideBar from '../AsideBar/AsideBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

function Products() {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const products= useSelector(state=> state.products);
    const { data: productsData, loading } = products;
     useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);
    const handleRender = () => {
        window.location.reload();
    } 
    return (
        <>  
            <NavAdmin active={active} setActive={setActive}/>            
            <section className='products-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AsideBar active={active} setActive={setActive}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="create-page d-flex justify-content-between align-items-center mt-3 mb-5">
                                <h2>New product</h2>
                                <button onClick={()=> handleRender()}>
                                    <Link to='/admin-create-product' className='d-block'>Create product</Link>
                                </button>
                            </div>
                            {loading === true ? 
                                (<>
                                    <div className="loader-screen d-flex justify-content-center align-items-center">
                                        <div className="spinner-border" role="status">
                                            <span className="loader"></span>
                                        </div>
                                    </div>
                                </>) : 
                                (<>
                                    <p style={{color: 'rgb(28,28,28)'}}>All products</p>
                                    <ProductsList products={productsData}/>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
