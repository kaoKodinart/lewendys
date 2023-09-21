import { Stack, Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { PROJECT_COLORS } from "../../common/ProjectConfig";

const LittleContactBannerStyle = styled(SectionStyle)(({theme})=> ({
    backgroundColor: PROJECT_COLORS.Or,
    padding:"0px 12vw 0px 12vw",
    // position:"relative",
    height:"150px",
    display:"flex",
    alignItems:"end",

    [theme.breakpoints.down("lg")]: {
        // width:"calc(100% - 8vw)",
        // padding:"150px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        // flexDirection:"column",
        // width:"calc(100% - 4vw)",
        // padding:"150px 2vw 75px 2vw",    
    },
}))

const LittleContactBannerImg = styled("img")(({theme})=>({

    [theme.breakpoints.down('lg')]: {
        
        },
    [theme.breakpoints.down('md')]: {
        
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));
const LittleContactBannerText = styled(Typography)(({theme})=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"white",
    fontSize:"1.2em",
    height:"100%",
    display:'flex',
    alignItems:"center",
    [theme.breakpoints.down('lg')]: {
        
        },
    [theme.breakpoints.down('md')]: {
        
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));
const LittleContactBannerSubText = styled(Typography)(({theme})=>({
    fontFamily:"PoppinsLight, sans-serif !important",
    color:"white",
    fontSize:"1.0em",
    // height:"100%",
    // display:'flex',
    // alignItems:"center",
    [theme.breakpoints.down('lg')]: {
        
        },
    [theme.breakpoints.down('md')]: {
        
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));

const NumberIconContainer = styled("div")(({theme})=>({
    height:"100%",
    display:'flex',
    alignItems:"center",
    justifyContent:"flex-end",
    width:"30%",
    [theme.breakpoints.down('lg')]: {
        
        },
    [theme.breakpoints.down('md')]: {
        
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));
const NumberIconImg = styled("img")(({theme})=>({
   
    [theme.breakpoints.down('lg')]: {
        
        },
    [theme.breakpoints.down('md')]: {
        
        },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        marginRight:'0px',
        },
}));
function LittleContactBanner() {
    return (
        <LittleContactBannerStyle>
            <LittleContactBannerImg src="/src/assets/images/contact_banner_img.png"/>
            <LittleContactBannerText>Vous pouvez  également nous téléphoner directement sur:</LittleContactBannerText>
            <NumberIconContainer>
                <NumberIconImg src="/src/assets/images/contact_banner_phone.png"/>
                <Stack direction={"column"} spacing={2}>
                    <LittleContactBannerText>CONTACT</LittleContactBannerText>
                    <LittleContactBannerSubText>+123 456 7890</LittleContactBannerSubText>
                </Stack>
            </NumberIconContainer>
        </LittleContactBannerStyle>
    );
}

export default LittleContactBanner;