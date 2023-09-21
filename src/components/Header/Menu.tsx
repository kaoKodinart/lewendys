import { Container, styled } from '@mui/material';
import { UserMenuItems } from '../../common/MenuConfigs';
import HeaderMenuItem from './HeaderMenuItem';

const HeaderContainer = styled(Container)(() => ({
    // backgroundColor:"blueviolet",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"green",
    width:"100%",
// backgroundImage: "url('assets/images/logo.png')",
}));

function Menu() {
    return (
        <HeaderContainer>
            {UserMenuItems.map((menu , index ) => {
                return <HeaderMenuItem key={index} title={menu.title} path={menu.path}/>
            })}
        </HeaderContainer>
    );
}

export default Menu;