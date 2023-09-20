import { useEffect } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { USER_PAGES } from './path';
import OthersLayout from '../layout/OthersLayout';
import UserLayout from '../layout/UserLayout';
import HomePage from '../pages/HomePage';



export default function Router() {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
      }, [pathname]);
      
    return useRoutes([
        {
            path: "*",
            element: <OthersLayout />,
            children: [
            ],
        },

        {
            path: USER_PAGES.home,
            element: <UserLayout/>,
            children: [
                {element: <HomePage/>, index:true},
                // {path: USER_PAGES.about, element: <AboutPage/>},
            ]
        },

        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

