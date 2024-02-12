import { AppBar, Badge, BadgeProps, Button, Container, Grid, IconButton, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import HeaderAnim from '../../animations/HeaderAnim';
import useResponsive from '../../hooks/useResponsive';
import Menu from './Menu';
// import MyDrawer from '../MyDrawer/MyDrawer';
import { MenuOutlined } from '@mui/icons-material';
import { PROJECT_COLORS } from '../../common/ProjectConfig';
import Logo from './Logo';
import MyButtonBlack from '../MyButtonBlack';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import useOffSetTop from '../../hooks/useOffSetTop';
import { HeaderConfig } from '../../common/HeaderConfig';
import { Link, useNavigate } from 'react-router-dom';
import { USER_PAGES } from '../../routes/path';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { getCurentUser } from '../../redux/slices/Auth';
import ProfilComponent from '../ProfilComponent';

const MenuMobileBtn = styled(IconButton)(() => ({
    alignSelf:"center",
    color: 'white',
    backgroundColor: PROJECT_COLORS.Blue,
    // backgroundColor:"#F3F5FA",
    marginLeft:"8px",
    '&:hover': {
        backgroundColor:PROJECT_COLORS.GreenO,
        color: "black",
    },
}));

const SocialMediaItemStyle = styled (IconButton)(()=>({
    borderRadius:"50px",
    // padding:"0px 0px 0px 0px",
    backgroundColor:"transparent",
    border:"1px solid white",
    color:"white",
    '&:hover':{
        color:"black",
        border:"1px solid black",
        backgroundColor:"white",
    },
}))

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 8,
      backgroundColor:PROJECT_COLORS.Or,
    //   border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Header() {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        // console.log("localStorage",localStorage.getItem("token"));
    }

    const dispatch = useAppDispatch();
    const user = useAppSelector((state:RootState) => state.auth.user);

    // useEffect (() => {
    //     dispatch(getCurentUser()).then((res) => console.log("headerRes",res)).catch(error => {
    //       console.log(error);
          
    //     })
    //    }, [])

    const isMobile = useResponsive("down", "md");
    const isOffset = useOffSetTop(HeaderConfig.HEIGHT);


    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOPenDrawer= () => {
        setOpenDrawer(!openDrawer)
    }

    const panier = useAppSelector((state: RootState) => state.plats.plats);

    return (
        <AppBar>
            <HeaderAnim>
            <Container maxWidth={false} >
                    {/* <Grid container sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "50px", paddingRight: "50px"})}}> */}
                    <Grid container  sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "40px", paddingRight: "40px"})}}>
                        <Grid item lg={1} md={1} sm={1} xs={1} sx={{}}>
                             <Logo/>
                        </Grid>
                        <Grid item lg={8} md={9} sm={0} xs={0}  sx={{ display: "flex", alignItems: "center", justifyContent:"flex-end", }}> 
                            {/* {!isMobile &&  <SocialMediaMenu/>} */}
                            {!isMobile &&  <Menu/>}
                            {/* <MyDrawer opening={openDrawer} closing={handleOPenDrawer}/>                                       */}
                        </Grid>
                        <Grid item lg={1} md={9} sm={0} xs={0}  sx={{ display: "flex", alignItems: "center", justifyContent:"flex-end", }}> 
                            <Link to={USER_PAGES.panier}>
                                <StyledBadge badgeContent={panier.length} sx={{}} color="primary">
                                    <SocialMediaItemStyle sx={{...(isOffset && {border:"1px solid black", color:"black"})}} >
                                            <LocalGroceryStoreIcon />
                                    </SocialMediaItemStyle>
                                </StyledBadge>
                            </Link>
                        </Grid>
                        <Grid item lg={2} md={2} sm={11} xs={11} sx={{display:"flex", justifyContent: isMobile ? "flex-end" : "center", }}>
                            {/* <Link to={USER_PAGES.devis} > */}
                            {
                                userData ? 
                                // <MyButtonBlack cliqFunc={()=> navigate("/dashboard")} text= {"Dashboard"} sx={{    alignSelf:"center",}} />
                                <ProfilComponent/>
                                :
                                <MyButtonBlack cliqFunc={()=> navigate("/login")} text= {"Login"} sx={{    alignSelf:"center",}} />
                            }
                                {/* <Button variant='contained' onClick={()=> {logout()}}>Deconnect</Button> */}
                            {/* </Link> */}
                            {/* <Button>HELLO</Button> */}
                            {/* {isMobile && <MyDrawer opening={openDrawer} closing={handleOPenDrawer}/>} */}
                            {isMobile && <MenuMobileBtn onClick={handleOPenDrawer} children={<MenuOutlined sx={{fontSize: "30px", }}/>}/>}
                        </Grid>
                    </Grid>
                </Container>
            </HeaderAnim>
        </AppBar>
    );
}

export default Header;