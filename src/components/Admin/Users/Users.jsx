import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasicsUsers } from '../../../redux/authSlice';
import NavAdmin from '../NavAdmin/NavAdmin';
import AsideBar from '../AsideBar/AsideBar';
import UsersList from './UsersList';



function Users() {
    const [active, setActive] = useState(false);
    const auth = useSelector(state=> state.auth);

    const { data: usersData, loading } = auth;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBasicsUsers());
    }, [])
    return (
        <>
            <NavAdmin active={active} setActive={setActive}/>            
            <section className='users-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AsideBar active={active} setActive={setActive}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="create_page mt-3 mb-5">
                                <h2>Users</h2>
                                {loading === true ? 
                                    (<>
                                        <div className="loader-screen d-flex justify-content-center align-items-center">
                                            <div className="spinner-border" role="status">
                                                <span className="loader"></span>
                                            </div>
                                        </div>
                                    </>) : 
                                    (<>
                                        <div className="users">
                                            <UsersList/>
                                        </div>
                                    </>)
                                }  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Users
