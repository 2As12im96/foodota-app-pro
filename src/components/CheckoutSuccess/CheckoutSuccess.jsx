import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeData } from "../../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function CheckoutSuccess() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = localStorage.getItem('cartItems');

    const handleClick = () => {
        dispatch(removeData());
        navigate('/', { replace: true });
        if (cartItems) {
            localStorage.removeItem('cartItems');
            localStorage.removeItem('orderToken');
        }
    };

    return (
        <section className="checkout-success-container">
            <div className="container">
                <span className="d-flex justify-content-center align-items-center">
                    <span className="success-icon d-flex justify-content-center align-items-center rounded-circle">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </span>
                <p className="title-success d-flex justify-content-center align-items-center text-center">Payment Successful</p>
                <span className='message-text d-block text-center'>Thank you! Your payment is complete</span>
                <span className="btn-click d-flex justify-content-center align-items-center">
                    <button className='btn-success d-flex justify-content-center align-items-center rounded' onClick={handleClick}>
                        Done
                    </button>
                </span>
            </div>
        </section>
    );
}

export default CheckoutSuccess;