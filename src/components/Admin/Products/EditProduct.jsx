import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productsEdit } from '../../../redux/productSlice';


function EditProduct({prodId}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data , loadingEdit} = useSelector(state=> state.products);

    const [currentProd , setCurrentProd] = useState({});
    const [previewImg , setPreviewImg] = useState('');

    const [productImg , setproductImg] = useState(null);
    const [title , setTitle] = useState('');
    const [cost , setCost] = useState('');
    const [btnSubimt , setBtnSubmit] = useState(false);

    const [open, setOpen] = useState(false);

    const TransformFile = (file)=>{
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = ()=>{
                setPreviewImg(reader.result);
            };
        }else{
            setPreviewImg('');
        }
    }

    const handelProductImageUpload = (e)=>{
        const file = e.target.files[0];
        setproductImg(file);
        TransformFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnSubmit(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('type', currentProd.type);
        formData.append('cost', Number(cost)); 
        if (productImg) { 
            formData.append('image', productImg); 
            if (currentProd.imageURL && currentProd.imageURL.public_id) {
                formData.append('imageUrlToDestroy', currentProd.imageURL.public_id);
            }
        } else {
            if (currentProd.imageURL) {
                formData.append('imageURL', JSON.stringify(currentProd.imageURL));
            }
        }

        dispatch(productsEdit({
            id: currentProd._id,
            productData: formData, 
        }));

        setTimeout(() => {
            setBtnSubmit(false);
            setOpen(false);
        }, 3000);

        console.log("Data to be dispatched:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
        const selectedProd = data.find((item) => item._id === prodId);
        if (selectedProd) {
            setCurrentProd(selectedProd);
            setPreviewImg(selectedProd.imageURL?.secure_url || ''); 
            setproductImg(null);
            setTitle(selectedProd.title || '');
            setCost(selectedProd.cost || '');
        } 
        else {
            toast.error("Product not found for editing.");
            handleClose();
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <React.Fragment>
        <Button className='blueBtn' onClick={handleClickOpen}>
                    Edit
        </Button>
      <section className='edit-products-form'>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>
                <div className='create_form'>
                    <div className='product_form d-flex justify-content-between align-items-center'>
                        <div className='product_form_data w-50'>
                            <p>Create product</p>
                            <form className='form' onSubmit={handleSubmit}>

                                <input type='file' accept='image/' name='file' className='form-control w-100 mb-3'
                                onChange={handelProductImageUpload}
                                />

                                <input type='text' className='form-control w-100 mb-3' 
                                placeholder='Name'
                                name='title'
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                                required/>  

                                <input type='text' className='form-control w-100 mb-3' 
                                placeholder='Cost'
                                name='cost'
                                value={cost}
                                onChange={(e)=> setCost(e.target.value)}
                                required/>


                                {loadingEdit === true ? 
                                    (
                                        <span  disabled={btnSubimt} className={btnSubimt ? 'btn_submit  active' : 'btn_submit'}
                                        style={
                                            {
                                                display: 'flex', 
                                                justifyContent: 'center', 
                                                alignItems: 'center',
                                                width: '100%',
                                                background: '#ffd700',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease-in-out'

                                            }
                                        }
                                        >
                                            <span className="loader">Loading...</span>
                                        </span>
                                    ) : 
                                    (
                                        <span  disabled={btnSubimt} className={btnSubimt ? 'btn_submit  active' : 'btn_submit'}
                                        style={
                                            {
                                                display: 'flex', 
                                                justifyContent: 'center', 
                                                alignItems: 'center',
                                                width: '100%',
                                                background: '#ffd700',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease-in-out'

                                            }
                                        }
                                        >
                                            <input type='submit' value='submit' 
                                            style={
                                                {
                                                    width: '100%',
                                                    background: '#ffd700',
                                                    color: '#fff',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease-in-out',
                                                }
                                            }/>
                                        </span>
                                    )
                                }
                            </form>
                        </div>
                        <div className='product_form_img d-flex justify-content-center align-items-center rounded w-50'>
                            {previewImg ? 
                                (
                                    <>
                                        <img src={previewImg} alt='product image!' className='img-fluid'/>
                                    </>
                                )
                            :   (
                                    <p>Image preview will appear here!</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
      </section>
    </React.Fragment>
  );
}
export default EditProduct;