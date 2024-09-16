import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([ MainRoutes, AuthRoutes ], {
    basename: "/"
});

export default router;