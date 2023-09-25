import { useEffect } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { USER_PAGES } from './path';
import OthersLayout from '../layout/OthersLayout';
import UserLayout from '../layout/UserLayout';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ReservationPage from '../pages/ReservationPage';
import PanierPage from '../pages/PanierPage';



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
                {path: USER_PAGES.menu, element: <MenuPage/>},
                {path: USER_PAGES.about, element: <AboutPage/>},
                {path: USER_PAGES.contact, element: <ContactPage/>},
                {path: USER_PAGES.reservation, element: <ReservationPage/>},
                {path: USER_PAGES.panier, element: <PanierPage/>},
            ]
        },

        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

