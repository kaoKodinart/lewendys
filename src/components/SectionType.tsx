import { Stack, Typography, styled } from '@mui/material';
import TextButton from './TextButton';
import { USER_PAGES } from '../routes/path';
import { PROJECT_COLORS } from '../common/ProjectConfig';
import SectionStyle from '../Styles/SectionStyle';

const SectionTypeStyle = styled(SectionStyle)(()=>({
    width:"calc(100% - 24vw)",
    height:"20vh",
    backgroundImage:"url(/src/assets/images/common_hero.jpg)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    position:"relative",
    display:"flex",
    flexDirection:"row",
    // justifyContent:"center",
    // alignItems:"center",
    padding:"150px 12vw 75px 12vw",

    // backgroundColor: PROJECT_COLORS.Beige,
    // transition: '1s ease-out'
}))

const HeroTextOne = styled(Typography)(({theme})=>({
    color:"#003789", 
    // marginLeft:"150px",
    // letterSpacing:"5px",
    marginTop:"2vh",
    fontSize:"4.2em",
    fontWeight:800,
    transition: '1s ease-out',
    fontFamily:"PoppinsExtraBold, sans-serif !important",
    textAlign:"center",
    // fontFamily:"NunitoExtraBold, sans-serif !important",
    [theme.breakpoints.down('md')]: {
        fontSize:"3.8em",
        },
    [theme.breakpoints.down('sm')]: {
        fontSize:"3.0em",
        },
}))
const HomeButton = styled(Typography)(()=>({
    color:"white", 
    marginLeft:"150px",
    letterSpacing:"5px",
    marginBottom:"5vh",
    fontSize:"2.0em",
    transition: '1s ease-out',
    fontFamily:"PoppinsBold, sans-serif !important",
}))
const CurrentPage = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important", 
    color: 'white',
    fontSize:"1.5em"
}))
const CurrentPageDesc = styled(Typography)(()=>({
    fontFamily:"PoppinsLight, sans-serif !important", 
    fontSize:"1.1em" ,
    marginTop:"20px",
    color:"white",
    width:"85%",
}))
const Circle = styled(Typography)(()=>({
    fontFamily:"PoppinsExtraBold, sans-serif !important", 
    color:'black'
}))
const ContentLeft = styled("div")(()=>({
    position:"relative",
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",
}))
const ContentRight = styled("div")(()=>({
    position:"relative",
    width:"50%",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",

}))

const BlackMask = styled("div")(({theme})=> ({
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    backgroundColor:"#111111",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    opacity:0.8,
    [theme.breakpoints.down('sm')]: {
       fontSize:"0.9em",
       },
}))

interface Props {
    pageTitle:string,
    pageDescription: string,

}

function SectionType({pageTitle, pageDescription}: Props) {
    return (
        <SectionTypeStyle>
            <BlackMask/>
            <ContentLeft>
                <CurrentPage>{pageTitle}</CurrentPage>
                <CurrentPageDesc>{pageDescription}</CurrentPageDesc>
            </ContentLeft>
            <ContentRight>
                <Stack direction={"row"} sx={{position:"relative",}} spacing={1}>
                    <TextButton title={"ACCUEIL/"} path={USER_PAGES.home} sx={{    fontFamily:"PoppinsBold, sans-serif !important", color: 'white', fontSize:"1.5em", '&:hover':{textDecoration:"underline"}}}/>
                    <Typography   sx={{fontFamily:"PoppinsLight, sans-serif !important", fontSize:"1.5em" , color:'white', }}>{pageTitle}</Typography>
                </Stack>
            </ContentRight>
        </SectionTypeStyle>
    );
}

export default SectionType;