import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/authSlice";

function useLoginLogic() {
    const [user, setUser] = useState({
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
        dispatch(loginUser(user));
    };
    const toggleEye = () => {
        setEye(!eye);
    }
    return {
        user,
        eye,
        navigate,
        auth,
        handleInputChange,
        onSubmit,
        toggleEye
    }
}

export default useLoginLogic
