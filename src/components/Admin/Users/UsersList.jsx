import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment/moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDelete } from "../../../redux/authSlice";

const paginationModel = { page: 0, pageSize: 5 };

export default function UsersList() {
    const [popup , setPopup] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state=> state.auth.data);
    const rows = auth && auth.map((item) =>{
        return {
            id: item._id,
            FirstName: item.name,
            email:item.email,
            isAdmin: item.isAdmin,
            data:moment(item.createdAt).fromNow(),
        }
    });

    const popupDelete = (id)=>{
        setDeleteId(id);
        setPopup(true);
    }

    // const userName = localStorage.getItem('userName');
    // const token = localStorage.getItem('token');

    const deleteUser = (id) => {
        dispatch(userDelete(id));
        setPopup(false);
    }

    // const adminUserName = localStorage.getItem('adminUserName');
    // const handleNavigateed = ()=>{
    //     navigate('/Admin-Auth-login' , {replace:true});
    // }
    const columns = [
        { field: 'id', headerName: 'ID', width: 160 },
        { field: 'FirstName', headerName: 'Name', width:140 },
        { field: 'email', headerName: 'Email', width:220 },
        {
          field: 'isAdmin',
          headerName: 'Status',
          renderCell:(params)=>{
                return(
                    <>
                        <span className={params.row.isAdmin ? 'admin_user' : 'customer_user'}>
                            {params.row.isAdmin ? 'Admin' : 'Cusomer'}
                        </span>
                    </>
                )
          },
          width: 80,
        },
        {
            field: 'data',
            headerName: 'Date',
            width: 120,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          sortable: false,
          width: 180,
          renderCell:(params)=>
            {
                return(
                    <>
                        <span className='table_actions d-flex justify-content-between align-items-center'>
                            <>
                                <span className='btn btn-danger' onClick={()=> popupDelete(params.row.id)}>Delete</span>
                                <span className='btn btn-success' onClick={()=> navigate(`/Admin-user/${params.row.id}`)}>View</span>
                            </>
                        </span>
                    </>
                )
            } ,
        },
    ];
    return (
        <>
            <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                disableRowSelectionOnClick
            />
            </Paper>
            {popup ? 
                (   <>
                        <div className='popup d-flex justify-content-center align-items-center'>
                            <div className='popup_parent rounded'>
                                <div className='popup_parent_header'>
                                    <h4>
                                        Are you sure you want to delete User Account?
                                    </h4>
                                </div>
                                <div className='popup_parent_body p-3'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className='btn btn-danger' onClick={()=> deleteUser(deleteId)}>Delete</span>
                                        <span className='btn btn-success ms-3' onClick={()=> setPopup(false)}>cancel</span>
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