import { useDispatch, useSelector } from "react-redux";
import { ordersEdit } from "../../../redux/orderSlice";
import moment from "moment/moment";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 5 };

export default function OrdersList({ orders }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status: editStatus, error: editError } = useSelector(state => state.orders);

    const rows = orders ? orders.map((order) => {
        return {
            id: order._id,
            FirstName: order.shipping?.name,
            amount: (order.total),
            dStatus: order.delivery_status,
            data: moment(order.createdAt).fromNow(),
        }
    }) : []; 

    const handleOrderDispatch = (id) => {
        dispatch(ordersEdit({
            id,
            delivery_status: 'dispatched',
        }));
    }

    const handleOrderDeliver = (id) => {
        dispatch(ordersEdit({
            id,
            delivery_status: 'delivered',
        }));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 180 },
        { field: 'FirstName', headerName: 'Name', width: 120 },
        {
            field: 'amount',
            headerName: 'Amount($)',
            width: 100,
        },
        {
            field: 'dStatus',
            headerName: 'Status',
            width: 100,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.dStatus === 'pending' ?
                            (<span className='pending'>Pending</span>) :
                            params.row.dStatus === 'dispatched' ?
                                (<span className='dispatched'>Dispatched</span>) :
                                params.row.dStatus === 'delivered' ?
                                    (<span className='delivered'>Delivered</span>) :
                                    ('error')
                        }
                    </div>
                );
            }
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
            width: 270,
            renderCell: (params) => {
                return (
                    <span className='table_actions d-flex justify-content-between align-items-center'>
                        <span className='btn dispatched span' onClick={() => handleOrderDispatch(params.row.id)}>Dispatch</span>
                        <span className='btn delivered span' onClick={() => handleOrderDeliver(params.row.id)}>Deliver</span>
                        <span className='btn view span' onClick={() => navigate(`/Admin-order-details/${params.row.id}`)}>View</span>
                    </span>
                );
            },
        },
    ];
    
    return (
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
             {editStatus === 'rejected' && <p className="text-danger">Error updating order: {editError}</p>}
             {editStatus === 'success' && <p className="text-success">Order updated successfully!</p>}
        </Paper>
    );
}