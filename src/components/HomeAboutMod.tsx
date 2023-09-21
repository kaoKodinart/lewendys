import { SxProps, Typography, styled } from "@mui/material";
import MyButtonBlack from "./MyButtonBlack";

const HomeAboutModStyle= styled("div")(({theme})=> ({
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
    // width:"28rem",
    // height:"28rem",
    [theme.breakpoints.down('md')]: {
        flexDirection:"column",
        },


}))

const HomeAboutModLeft = styled("div")(({theme})=> ({
    // minHeight:"50vh",
    width:"50%",
    display:"flex",
    // flexDirection:"column",
    // justifyContent:"center",
    // alignItems:"flex-start",
    // backgroundColor:"pink",
    [theme.breakpoints.down('sm')]: {
        display:"none",
        },
    [theme.breakpoints.down('md')]: {
        alignItems:"center",
        // minHeight:"30vh",
        // backgroundColor:"green",
        },
}))
const HomeAboutModRight = styled("div")(({theme})=> ({
    // minHeight:"50vh",
    paddingLeft:"30px",
    width:"calc(50% - 30px)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",
    // position:"relative",
    // backgroundColor:"green",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        minHeight:"50vh",
        // backgroundColor:"brown",
        },
}))

const HomeAboutImg= styled("img")(({theme})=> ({
    width:"100%",
    height:"100%",
    [theme.breakpoints.down('sm')]: {
        // width:"85%",
        // height:"85%",
        // backgroundColor:"brown",
        },

}))

const HomeAboutText = styled(Typography)(({theme}) => ({
    fontSize:"2.5em",
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"white",
    // width:"95%",
    lineHeight:"1.2em",
    [theme.breakpoints.down('lg')]: {
        fontSize:"2.8em",
        width:"90%",
    },
    [theme.breakpoints.down('md')]: {
        fontSize:"2.6em",
        width:"100%",
        textAlign:"center",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize:"2.4em",
        width:"100%",
        textAlign:"center",
    },
}));

const HomeAboutSubText = styled(Typography)(({theme}) => ({
    fontSize:"1.0em",
    fontFamily:"PoppinsLight, sans-serif !important",
    color:"white",
    width:"90%",
    margin:"30px 0px 30px 0px",
    textAlign:"justify",
    // lineHeight:"1.2em",
    [theme.breakpoints.down('lg')]: {
        width:"90%",
    },
    [theme.breakpoints.down('md')]: {
        width:"100%",
        textAlign:"center",
    },
}));

interface Props {
    image: string,
    titre: string,
    text: string,
    buttonText: string,
    sx? : SxProps,

}
function HomeAboutMod({image, titre, text, sx={}, buttonText} :Props) {
    return (
        <HomeAboutModStyle sx={{...sx}}>
            <HomeAboutModLeft>
                <HomeAboutImg src={image}/>
            </HomeAboutModLeft>
            <HomeAboutModRight>
                <HomeAboutText>{titre}</HomeAboutText>
                <HomeAboutSubText>{text}</HomeAboutSubText>
                <MyButtonBlack text={buttonText} sx={{padding:"10px 35px"}}/>
            </HomeAboutModRight>
        </HomeAboutModStyle>
    );
}

export default HomeAboutMod;