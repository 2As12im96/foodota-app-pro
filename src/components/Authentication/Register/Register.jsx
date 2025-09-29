import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import useRegisterLogic from './Register.logic';
import googleLogic from '../googleSign';

function Register() {
    const { user , eye , auth , navigate , handleInputChange , onSubmit , toggleEye } = useRegisterLogic();
    // Sign in with Google account
    const { googlesignIn } = googleLogic();
    useEffect(() => {
        if (auth.status === 'succeeded') {
            toast.success('Sign up successful!', { position: 'bottom-left' });
            navigate('/', { replace: true });
        } else if (auth.status === 'failed') {
            toast.error(auth.error, {
                position: 'bottom-left',
            });
        }
    }, [auth.status, navigate, auth.error]);
    return (
        <section className='register'>
            <div className="container-auth">
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <h2 className='d-flex justify-content-center align-items-center'>Signup</h2>
                        <span className='d-flex justify-content-between align-items-center w-100'>
                            <input
                                type="text"
                                placeholder="First name"
                                className='form-control w-50 lst'
                                name="FirstName"
                                value={user.FirstName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className='form-control w-50 ms-1 lst'
                                name="LastName"
                                value={user.LastName}
                                onChange={handleInputChange}
                                required
                            />
                        </span>
                        <input
                            type="text"
                            placeholder="name"
                            className='form-control lst'
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className='form-control lst'
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            required
                        />
                        <span className='d-flex justify-content-between align-items-center w-100 position-relative'>
                            <input
                                type={eye ? "text" : "password"}
                                placeholder="password"
                                className='form-control'
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                required
                            />
                            <span className='eye position-absolute' onClick={()=> toggleEye()}>{eye ? (<><FontAwesomeIcon icon={faEyeSlash} /></>) : (<><FontAwesomeIcon icon={faEye} /></>)}</span>
                        </span>
                        <button type="submit">Create account</button>
                    </form>
                    <p className="social-text text-center">or signin with</p>
                    <div className="social-icons d-flex justify-content-center align-items-center">
                        <span className='d-flex justify-content-center align-items-center rounded-circle' title='signup with google' onClick={()=> googlesignIn()}>
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </span>
                    </div>
                    <span className='justify-content-center align-items-center w-100 p-3 res-link'>
                        You have account? <Link to='/login'>Signin.</Link>
                    </span>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel text-center">
                            <img src="/image/logo.svg" alt="fodoota" className='' />
                            <h3>Welcome back!</h3>
                            <p>welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.</p>
                            <span>
                               You have account? <Link to='/login'>Signin.</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
