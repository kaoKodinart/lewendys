import { Grid, Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { PROJECT_COLORS } from "../../common/ProjectConfig";
import { menuItems } from "../../common/Data";
import MenuItem from "../../components/MenuItem";
import MyButtonBlack from "../../components/MyButtonBlack";

const HomeMenuContainer = styled(SectionStyle)(({theme})=> ({
    // padding:"0Xpx 12vw 75px 12vw",
    minHeight:"20vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

    [theme.breakpoints.down("lg")]: {
        padding:"75px 4vw 75px 4vw",
        width:"calc(100% - 8vw)",
        // padding:"150px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        // flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",    
    },
}))

const HomeMenuLittleTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsRegular, sans-serif !important",
    fontWeight: 700,
    color: PROJECT_COLORS.Red,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

const HomeMenuSubText = styled(Typography)(({theme}) => ({
    fontSize:"1.0em",
    fontFamily:"PoppinsLight, sans-serif !important",
    width:"75%",
    margin:"30px 0px 30px 0px",
    textAlign:"center",
    // textAlign:"justify",
    // lineHeight:"1.2em",
    [theme.breakpoints.down('lg')]: {
        width:"90%",
    },
    [theme.breakpoints.down('md')]: {
        width:"100%",
        textAlign:"center",
    },
}));

function HomeMenu() {
    return (
        <HomeMenuContainer>
            <HomeMenuLittleTitle>NOTRE MENU</HomeMenuLittleTitle>
            <HomeMenuSubText>Lorem ipsum dolor sit amet consectetur. In tellus integer pretium potenti ut odio a lectus eu. Sapien velit non cursus leo consectetur. At at donec in nec.</HomeMenuSubText>
            <Grid container spacing={3}>
            {menuItems.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} sx={{display:"grid", placeItems:"center"}}>
                    <MenuItem image={item.image} id={item.id} nom={item.name} description={item.desc} prix={item.price} />
                </Grid>
            ))}
            </Grid>
            <MyButtonBlack text="Voir Plus" sx={{padding:"10px 30px", mt:5}}/>
        </HomeMenuContainer>
    );
}

export default HomeMenu;