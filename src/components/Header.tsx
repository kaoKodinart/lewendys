import { AppBar, Button, Container, Grid, IconButton, MenuList, styled } from '@mui/material';
import React, { useState } from 'react';
import HeaderAnim from '../../animations/HeaderAnim';
import useResponsive from '../../hooks/useResponsive';
import { Link, useNavigate } from 'react-router-dom';
import { USER_PAGES } from '../../routes/path';
import { MenuOutlined } from '@mui/icons-material';
import MyButtonCoffe from '../MyButtonCoffe';
import Menu from './Menu';
import Logo from '../Logo';
import MyDrawer from '../MyDrawer/MyDrawer';
import LangSwitcher from '../LangSwitcher';

const MenuMobileBtn = styled(IconButton)(() => ({
    // color: PROJECT_COLORS.primarySwatch,
    backgroundColor:"#F3F5FA",
    marginLeft:"8px",
    '&:hover': {
        color: "black",
    },
}));

function Header() {
    const isMobile = useResponsive("down", "md");
    const navigate = useNavigate();

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOPenDrawer= () => {
        setOpenDrawer(!openDrawer)
    }

    const [currentLanguage, setCurrentLanguage] = useState('fr'); // Langue par défaut
    const languages = ['FR', 'EN']; // Liste des langues disponibles
  
    const handleChangeLanguage = (newLanguage: string) => {
      setCurrentLanguage(newLanguage)}

    return (
        <AppBar>
            <HeaderAnim>
            <Container maxWidth={false} >
                    {/* <Grid container sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "50px", paddingRight: "50px"})}}> */}
                    <Grid container  sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "40px", paddingRight: "40px"})}}>
                        <Grid item lg={1} md={1} sm={1} xs={2} sx={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
                             {/* <Logo sx={{marginLeft: "30px"}} logoImg="images/logoblancnoirrongné.png"/> */}
                             <Logo/>
                        </Grid>
                        <Grid item lg={9} md={10} sm={0} xs={0}  sx={{ display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"center"}}> 
                            {/* {!isMobile &&  <SocialMediaMenu/>} */}
                            {!isMobile &&  <Menu/>}
                        </Grid>
                        <Grid item lg={1} md={1} sm={11} xs={10} sx={{display:"flex", justifyContent: isMobile ? "flex-end" : "flex-start"}}>
                        <LangSwitcher
                                languages={languages}
                                currentLanguage={currentLanguage}
                                onChangeLanguage={handleChangeLanguage}
                            />
                            {/* <Link to={USER_PAGES.devis}> */}
                            {/* </Link> */}
                            {isMobile && <MyDrawer opening={openDrawer} closing={handleOPenDrawer}/>}
                            {isMobile && <MenuMobileBtn onClick={handleOPenDrawer} children={<MenuOutlined sx={{fontSize: "35px"}}/>}/>}

                        </Grid >
                        {/* <Grid item lg={1} md={1} sm={11} xs={10} sx={{display:"flex", justifyContent:"flex-end", backgroundColor:"cyan"}}>

                        </Grid> */}
                    </Grid>
                </Container>
            </HeaderAnim>
        </AppBar>
    );
}

export default Header;