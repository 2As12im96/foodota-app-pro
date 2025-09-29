import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../utils/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { googleLoginFailure, googleLoginSuccess } from '../../redux/authSlice';
import { Url } from '../../redux/api';


function googleLogic() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const googlesignIn = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            const data = res.user;
            console.log(res.user); 
            const users = {
                id: data.uid,
                name: data.displayName,
                email: data.email,
                photoURL: data.photoURL,
                phone: data.phoneNumber,
                isAdmin: false, 
            };

            const apiResponse = await fetch(`${Url}/auth/google/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(users)
            });

            if (!apiResponse.ok) {
                const errorData = await apiResponse.json();
                throw new Error(errorData.message || 'Failed to login with Google.');
            }

            const responseData = await apiResponse.json();
            localStorage.setItem('user', JSON.stringify(responseData.user));
            localStorage.setItem('token', responseData.token);

            dispatch(googleLoginSuccess(responseData.user));
            navigate('/'); 
        } catch (err) {
            console.error("Error during Google sign-in:", err.message);
            dispatch(googleLoginFailure(err.message));
        }
    };
    return {
        googlesignIn
    }
}

export default googleLogic;