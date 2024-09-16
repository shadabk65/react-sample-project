import { lazy } from 'react';

// project imports
import AuthGuard from '../utills/guard/AuthGuard';
import MainLayout from '../layouts/MainLayout';
import Loadable from '../components/loader/Loadable';

// sample page routing
const Home = Loadable(lazy(()=> import('../views/pages/home')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Home />
        },
    ]
};

export default MainRoutes;
