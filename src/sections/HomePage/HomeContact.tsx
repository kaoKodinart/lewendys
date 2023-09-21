import { Typography, styled } from '@mui/material';
import SectionStyle from '../../Styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/ProjectConfig';
import ContactForm from '../../components/ContactForm';

const HomeContactContainer = styled(SectionStyle)(({theme})=> ({
    minHeight:"50vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 8vw)",
        padding:"75px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",    
    },
}))

const ContaintLeft = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },

}));
const ContaintRight = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    // minHeight:"50vh",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"blue",
    [theme.breakpoints.down('md')]: {
        width:"100%",
    //    display:"none"
    },
}));

const HomeContactTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    fontWeight: 700,
    color: PROJECT_COLORS.Red,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

const HomeContactSubTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.7em",
    margin:"10px 0px 20px 0px",
    fontWeight:"bold",
    // width:"30%",
    textAlign:"start",
    // lineHeight:"1.2em",
    [theme.breakpoints.down('sm')]: {
        fontSize:"1.2em",
    },
}));

const HomeContactImg = styled("img")(({theme}) => ({
    width:"100%",
    [theme.breakpoints.down('md')]: {
    },
}));

function HomeContact() {
    return (
        <HomeContactContainer>
            <ContaintLeft>
                <HomeContactTitle>CONTACT</HomeContactTitle>
                <HomeContactSubTitle>Prenez contact avec nous !</HomeContactSubTitle>
                <HomeContactImg src='/src/assets/images/home_contact_image.png'/>
            </ContaintLeft>
            <ContaintRight>
                <ContactForm/>
            </ContaintRight>
        </HomeContactContainer>
    );
}

export default HomeContact;