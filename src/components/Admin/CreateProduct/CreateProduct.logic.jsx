import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsCreate } from "../../../redux/productSlice";


function useCreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products);
  const [productImg, setProductImg] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState(0);
  const [discription, setDiscription] = useState('');
  const [btnSubimt, setBtnSubmit] = useState(false);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      TransformFile(file);
    }
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnSubmit(true);
    dispatch(
      productsCreate({
        title,
        type,
        cost,
        discription,
        imageURL: productImg,
      })
    );
  };

  useEffect(() => {
    if (product.status === 'success') {
      setTimeout(() => {
        // navigate('/dashboard', { replace: true });
        location.reload();
      }, 6000);
    }
  }, [product.status, navigate]);

  return {
    product,
    productImg,
    title,
    type,
    cost,
    discription,
    btnSubimt,
    handleProductImageUpload,
    TransformFile,
    handleSubmit,
    setTitle,
    setType,
    setCost,
    setDiscription,
  };
}

export default useCreateProduct;