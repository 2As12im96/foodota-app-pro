import { faBars , faUser, faXmark} from "@fortawesome/free-solid-svg-icons"
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import useNavLogic from "./Navbar.logic";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function Navbar() {
    const { navScroll, activeNavigate , activeAnimation, menu , shoppingCardMenu , socialLogin , handleClickMenu , handleClickHiddenMenu , handleShoppingCard , hiidenShoppingCardMenu , handleLogoutWithBackend , isLoading , checkout } = useNavLogic();
    const activeCLassName = `${navScroll ? 'active' : ''} ${activeNavigate ? 'activeNavigate' : ''} ${activeAnimation ? 'activeAnimation' : ''}`;
    const { cartItems, cartTotalQuantity, cartTotalAmount} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (item)=>{
        dispatch(removeFromCart(item));
    }
    return (
        <>
            <header className={activeCLassName}>
                <div className="container-fluid">
                    <div className="header d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Link to='/'>
                                <img src="/image/logo.svg"  className='' alt="foodota" />
                            </Link>
                        </div>
                        <nav className="d-flex align-items-center">
                            <ul className={menu ? "active d-flex align-items-center" : "d-flex align-items-center"}>
                                <div className="logo-header d-flex justify-content-between align-items-center">
                                    <div className="logo-img">
                                        <img src="/image/logo.svg" alt="foodota"  className="img-fluid"/>
                                    </div>
                                    <span onClick={()=> handleClickHiddenMenu()}><FontAwesomeIcon icon={faXmark}/></span>
                                </div>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li>
                                    <p>Pages</p>
                                    <ul className="sub-menu p-0 m-0 list-unstyled">
                                        <li><Link to='/about'>About us</Link></li>
                                        <li><Link to='/contact'>Contact us</Link></li>
                                    </ul>
                                </li>
                                {socialLogin ? 
                                    (<>
                                        <li className='d-flex align-items-center user_icon'>
                                            {socialLogin.photoURL ? 
                                                <img 
                                                    src={socialLogin.photoURL} 
                                                    alt={socialLogin.name}   
                                                    title={socialLogin.name} 
                                                    className='rounded-circle'
                                                />
                                                :
                                                <img 
                                                    src='/image/user.png' 
                                                    alt={socialLogin.name}  
                                                    title={socialLogin.name}
                                                    className='rounded-circle'
                                                />
                                            }
                                            <span className='logout' title='logout' onClick={handleLogoutWithBackend}>Logout</span>
                                        </li>  
                                    </>):
                                    (<>
                                        <li><Link to="/register"><FontAwesomeIcon icon={faUser} /></Link></li> 
                                    </>)
                                }

                                <li><Link to="/meals" >All meals</Link></li>
                            </ul>
                            <span onClick={()=> handleClickMenu()}><FontAwesomeIcon icon={faBars} /></span>
                        </nav>
                    </div>
                </div>
            </header>
            <div className={shoppingCardMenu ? 'shoppingIcon active' : 'shoppingIcon'} onClick={()=> handleShoppingCard()}>
                <FontAwesomeIcon icon={faBasketShopping} />
                <span className="d-flex justify-content-center align-items-center rounded-circle">
                    <span>{cartTotalQuantity}</span>
                </span>
            </div>
            <div className={shoppingCardMenu ? 'bg-opactiy active' : 'bg-opactiy'} onClick={()=> hiidenShoppingCardMenu()}></div>
            <div className={shoppingCardMenu ? 'shoppingCard active' : 'shoppingCard'}>
                <div className="">
                    <div className="shopingCard-header d-flex justify-content-between align-items-center">
                        <h3>Your Order</h3>
                        <span className="d-block me-3" onClick={()=> hiidenShoppingCardMenu()}><FontAwesomeIcon icon={faXmark}/></span>
                    </div>
                    {cartItems && cartItems.length > 0 ?
                        (<>
                            <div className="parentItems">
                                <div className="cartItems">
                                    {cartItems.map((item)=> {
                                        return(
                                            <div key={item._id} className="cartItem d-flex justify-content-between align-items-center">
                                                <div className="cart-img w-25" title={item.type}>
                                                    <img src={item.imageURL.url} alt={item.type} className="img-fluid rounded"/>
                                                </div>
                                                <div className="cart-info w-50">
                                                    <span className="type d-block">{item.type}</span>
                                                    <strong>{item.title}</strong>
                                                    <p className="cost">£{item.cost}.00</p>
                                                    <span className="quantity">quantity: {item.cartQuantity}</span>
                                                </div>
                                                <span className="d-block me-3" title="remove" onClick={()=> handleRemoveFromCart(item)}><FontAwesomeIcon icon={faXmark}/></span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="cartEnd position-absolute w-100">
                                    <div className="subtotal d-flex justify-content-between align-items-center w-100">
                                        <strong>Subtotal</strong>
                                        <p>£{cartTotalAmount}.00</p>                                
                                    </div>
                                    <div className="cartButtons d-flex justify-content-between align-items-center">
                                        {isLoading ? 
                                            (<>
                                                <button className="btn btn-danger w-100" title="check out" onClick={()=> checkout()} disabled={isLoading}>
                                                    <span className='loader'></span>
                                                </button>
                                            </>)
                                            :
                                            (<>
                                                <button className="btn btn-danger w-100" title="check out" onClick={()=> checkout()}>check out</button>
                                            </>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </>):
                        (<>
                            <div className="notFoundItems text-center">
                                <p>No products in the cart.</p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
