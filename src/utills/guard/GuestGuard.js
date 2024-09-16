import { useNavigate } from 'react-router-dom';

// project imports
// import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }) => {
    // const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate(DASHBOARD_PATH, { replace: true });
    //     }
    // }, [isLoggedIn, navigate]);

    return children;
};

export default GuestGuard;
