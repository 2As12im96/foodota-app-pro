import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/authSlice';

function useRegisterLogic() {
    const [user, setUser] = useState({
        FirstName: "",
        LastName: "",
        name: "",
        email: "",
        password: "",
    });
    const [eye, setEye] = useState(false);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name , value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user));
    };
    const toggleEye = () => {
        setEye(!eye);
    }
    return {
        user,
        eye,
        auth,
        navigate,
        handleInputChange,
        onSubmit,
        toggleEye
    }
}

export default useRegisterLogic
