import { Typography, styled } from '@mui/material';
import { PROJECT_COLORS } from '../../common/ProjectConfig';
import SectionStyle from '../../Styles/SectionStyle';
import Fade from '../../animations/Fade';
import FadeVariants from '../../variants/FadeVariants';
import { Link } from 'react-router-dom';
import { USER_PAGES } from '../../routes/path';
import MyButtonBlack from '../../components/MyButtonBlack';

const AboutSectionContainer = styled(SectionStyle)(({theme})=> ({
    padding:"75px 12vw 0px 12vw",    
    // minHeight:"20vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"row-reverse",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 8vw)",
        padding:"75px 4vw 0px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 0px 2vw",    
    },
}))

const ContaintLeft = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",
    // backgroundColor:"grey",
    // height:"50vh",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        // height:"35vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        // alignItems:"center",
    },

}));
const ContaintRight = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"blue",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        paddingTop:"25px",
    },
}));

const AboutSectionLittleTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    color: PROJECT_COLORS.Red,
    fontWeight: 700,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));
const AboutSectionBigTitle = styled(Typography)(({theme}) => ({
    // margin: "0px 0px 50px 0px",
    fontSize:"1.8em",
    fontFamily:"Cambria, sans-serif !important",
    fontWeight: 700,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const AboutSectionDescription = styled(Typography)(({theme}) => ({
    fontSize:"1.0em",
    fontFamily:"PoppinsLight, sans-serif !important",
    margin:"30px 0px 35px 0px",
    textAlign:"justify",
    width:"95%",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const RightImgContaint = styled("div")(({theme}) => ({
    scale:"0.9",
    width:"100%",
    padding:"12px",
    boxShadow:"0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.04)",
    borderRadius:"0px 100px 100px 0px",
    // display:"grid",
    // placeItems:"center",
    backgroundColor:"white",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
        scale:"1",
        borderRadius:"20px",
    },
}));

const RightImg = styled("img")(({theme}) => ({
    // height:"100%",
    width:"100%",
    // scale:"0.9",
    borderRadius:"0px 100px 100px 0px",
    objectFit:"cover",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
        width:"100%",
        borderRadius:"20px",
    },
}));

function AboutDetailsSection() {
    return (
        <AboutSectionContainer>
            <ContaintLeft>
                <AboutSectionLittleTitle>A propos de nous</AboutSectionLittleTitle>
                <AboutSectionBigTitle>Qui Sommes Nous ?</AboutSectionBigTitle>
                <AboutSectionDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</AboutSectionDescription>
                <Link to={USER_PAGES.contact}>
                    <MyButtonBlack text='Reserver' sx={{padding:"12px 30px"}}/>
                </Link>
            </ContaintLeft>
            <ContaintRight>
                <RightImgContaint>
                <Fade variants={FadeVariants({durationIn: 5}).in}>
                    <RightImg src='/src/assets/images/about_page_detail.jpg'/>
                </Fade>
                </RightImgContaint>
            </ContaintRight>
        </AboutSectionContainer>
    );
}

export default AboutDetailsSection;