import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function UserLayout() {
    return (
        <Fragment>
            {/* <Header/> */}
            <Outlet/>
            {/* <Footer/> */}
        </Fragment>
    );
}

export default UserLayout;