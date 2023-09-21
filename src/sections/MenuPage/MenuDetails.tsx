import { Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { PROJECT_COLORS } from "../../common/ProjectConfig";
import MenuFilter from "../../components/MenuFilter";

const MenuDetailsContainer = styled(SectionStyle)(({theme})=> ({
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

const MenuDetailsLittleTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    fontWeight: 700,
    color: PROJECT_COLORS.Red,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

const MenuDetailsTitle = styled(Typography)(({theme}) => ({
    margin: "0px 0px 50px 0px",
    fontSize:"0.9em",
    fontFamily:"PoppinsLight, sans-serif !important",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));

function MenuDetails() {
    return (
        <MenuDetailsContainer>
            <MenuDetailsLittleTitle>DELICIEUX</MenuDetailsLittleTitle>
            <MenuDetailsTitle>Menus du jour</MenuDetailsTitle>
            <MenuFilter/>
        </MenuDetailsContainer>
    );
}

export default MenuDetails;