import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
// import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
    // const { isLoggedIn } = true
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('login', { replace: true });
    //     }
    // }, [isLoggedIn, navigate]);

    return children;
};

export default AuthGuard;
