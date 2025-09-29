import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setHeaders, Url } from "../../../redux/api";
import AsideBar from "../AsideBar/AsideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import NavAdmin from "../NavAdmin/NavAdmin";

function UserDetails() {
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState(false);
    const params = useParams();
    const [user , setUser] = useState({
        FirstName: '',
        LastName: '',
        name: '',
        email: '',
        password: '',
    });
    const [loading , setLoading] = useState(false);
    const [updating , setUpdating] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(()=>{
        setLoading(true);
        async function fetchData(){
            try {
                const res = await axios.get(`${Url}/users/${params.id}` , setHeaders())
                setUser(res.data);
                console.log(res.data);
            } catch (err) {
                console.error("Error fetching user data:", err);
                toast.error(err.response.data.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[params.id])

    //Upadate User Profile
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setUpdating(true);
        try{
            const res = await axios.put(`${Url}/users/${params.id}` ,{...user}, setHeaders());
            setUser({...res.data , password:''});
            toast.success('Profile Updated...');
            if(user.isAdmin == true){
                localStorage.setItem('adminUserName', res.data.name);
                adminUserName = res.data.name;
            }
            else if(user.isAdmin === false){
                localStorage.setItem('userClient', res.data.name);
                userName = res.data.name;
            }
        }
        catch(err){
            console.log(err)
        }
        finally {
            setTimeout(() => {
                setUpdating(false);
            },3000);
        }
    }
    //Hidden and Visibile Password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
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
                                {loading ? 
                                (<>
                                    <div className="loader-screen d-flex justify-content-center align-items-center">
                                        <div className="spinner-border" role="status">
                                            <span className="loader"></span>
                                        </div>
                                    </div>
                                </>) :
                                (   <>
                                        <h2>User Profile</h2>
                                        {user.isAdmin ? 
                                            (<span className="admin_user">Admin</span>):
                                            (<span className='customer_user'>Customer</span>)
                                        }
                                        <form onSubmit={handleSubmit}>
                                            <span className="d-block mb-3">
                                                <label htmlFor="FirstName">FirstName:</label>
                                                <input type="text" name='FirstName' id='FirstName' className="form-control" value={user.FirstName}
                                                onChange={(e) => setUser({...user , FirstName:e.target.value})}/>
                                            </span>
            
                                            <span className="d-block mb-3">
                                                <label htmlFor="FirstName">LastName:</label>
                                                <input type="text" name='LastName' id='LastName' className="form-control" value={user.LastName}
                                                onChange={(e) => setUser({...user , LastName:e.target.value})}/>
                                            </span>
            
                                            <span className="d-block mb-3">
                                                <label htmlFor="name">UserName:</label>
                                                <input type="text" name='name' id='name' className="form-control" value={user.name}
                                                onChange={(e) => setUser({...user , name:e.target.value})}/>
                                            </span>
            
                                            <span className="d-block mb-3">
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" name='email' id='email' className="form-control" value={user.email}
                                                onChange={(e) => setUser({...user , email:e.target.value})}/>
                                            </span>
            
                                            <span className='d-block'>
                                                <label htmlFor="password">Password:</label>
                                                <span className="pass_bx d-flex justify-content-between align-items-center">
                                                    <input type={passwordVisible ? 'text' : 'password'} name='password' id='password' className="form-control" value={user.password}
                                                    onChange={(e) => setUser({...user , password:e.target.value})}/>
                                                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                                                        {icon ? <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setIcon(false)}/> : <FontAwesomeIcon icon={faEye} onClick={() => setIcon(true)} />}
                                                    </span>
                                                </span>
                                            </span>
                                            <>
                                                <button type="submit" 
                                                className={updating ? 'd-flex justify-content-center align-items-center rounded btn_submit mt-3 mb-3 opacity-50': 'd-flex justify-content-center align-items-center rounded btn_submit mt-3 mb-3'} 
                                                disabled={updating}>
                                                    {updating ? <><span className="loader"></span></> : 'Updated Profile'}
                                                </button>
                                            </>
                                        </form>
                                    </>
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
}

export default UserDetails
