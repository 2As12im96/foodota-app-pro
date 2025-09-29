import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { productsDelete } from '../../../redux/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditProduct from './EditProduct';
import { useState } from 'react';

function ProductsList({ products }) {
    const dispatch = useDispatch();
    const  navigate = useNavigate();
    const [popup , setPopup] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
     

    const popupDelete = (id)=>{
            setDeleteId(id);
            setPopup(true);
    }

    const deleteProduct = (id)=>{
        dispatch(productsDelete(id));
        setTimeout(()=>{
            setPopup(false)
            window.location.reload();
        } , 2000)  
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 220 },
        { field: 'imageURL', headerName: 'Image', width: 80 , 
            renderCell:(params)=>
                {
                    return(
                        <>
                            <div className='table_img w-100'>
                                <img src={params.row.imageURL} className='img-fluid' alt=''/>
                            </div>
                        </>
                    )
                } 
        },
        { field: 'title', headerName: 'Name', width:80 },
        {
            field: 'cost',
            headerName: 'Price',
            type: 'number',
            width: 80,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 250,
            renderCell:(params)=>
            {
                return(
                    <>
                        <span className='table_actions d-flex justify-content-between align-items-center mt-2'>
                            <>
                                <span className='btn btn-danger' onClick={()=> popupDelete(params.row.id)}>Delete</span>
                                <span className='btn btn-primary'>
                                    <EditProduct prodId={params.row.id}/>
                                </span>
                                {/* <span className='btn btn-success' onClick={()=> navigate(`/AdminViewProduct/${params.row.id}`)}>View</span> */}
                            </>
                        </span>
                    </>
                )
            } ,
        },
    ];
    const rows = products.map((product) =>{
        return {
            id: product._id,
            imageURL: product.imageURL.url,
            title:product.title,
            discount:product.discount,
            cost:product.cost,
        }
    }) || [];
    
    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            </Box>
            {popup ? 
                (   <>
                        <div className='popup d-flex justify-content-center align-items-center'>
                            <div className='popup_parent rounded'>
                                <div className='popup_parent_header mt-2 mb-3'>
                                    <h4>
                                        Are you sure you want to delete this product?
                                    </h4>
                                </div>
                                <div className='popup_parent_body mt-2 mb-1'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className='btn btn-danger w-25' onClick={()=> deleteProduct(deleteId)}>Delete</span>
                                        <span className='btn btn-success ms-3 w-25' onClick={()=> setPopup(false)}>cancel</span>
                                    </div>
                                </div>
                            </div>
                        </div>                
                    </>
                ) : 
                (null)
            }
        </>
    );
}
export default ProductsList;