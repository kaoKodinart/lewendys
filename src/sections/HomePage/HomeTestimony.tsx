import { styled } from "@mui/material";
import TestimonySwipElement from "../../components/TestimonySwipElement";


const HomeTestimonyContainerBanner=styled("section")(({})=>({
    width:"100%",
    zIndex:1,
    position:"relative",
    backgroundImage:"url(/src/assets/images/testimony_banner.jpg)",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
}));

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
    opacity:0.5,
    [theme.breakpoints.down('sm')]: {
       fontSize:"0.9em",
       },



}))

function HomeTestimony() {
    return (
        <HomeTestimonyContainerBanner>
            <BlackMask/>
            <TestimonySwipElement/>
        </HomeTestimonyContainerBanner>
    );
}

export default HomeTestimony;