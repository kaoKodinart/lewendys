import { styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { homeAboutDetails } from "../../common/Data";
import HomeAboutMod from "../../components/HomeAboutMod";

const HomeAboutContainer = styled(SectionStyle)(({theme})=> ({
    backgroundColor: "black",
    // padding:"175px 12vw 75px 12vw",
    // minHeight:"55vh",
    // display:"flex",
    // flexDirection:"row",
    // position:"relative",
    // zIndex:1,
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 8vw)",
        padding:"150px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"150px 2vw 75px 2vw",    
    },
}))

function HomeAbout() {
    return (
        <HomeAboutContainer>
            {
                homeAboutDetails.map((one, index) => <HomeAboutMod key={index} image={one.image} titre={one.title} text={one.text} sx={{flexDirection: index % 2 === 0 ?  "row" : "row-reverse" }}/>)
            }
        </HomeAboutContainer>
    );
}

export default HomeAbout;