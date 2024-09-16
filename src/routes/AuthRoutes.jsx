import { lazy } from 'react';

// project imports
import GuestGuard from '../utills/guard/GuestGuard';
import MinimalLayout from '../layouts/MinimalLayout';
import Loadable from '../components/loader/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('../views/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/pages/auth/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: (
        <GuestGuard>
            <MinimalLayout />
        </GuestGuard>
    ),
    children: [
        
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
    ]
};

export default AuthRoutes;
