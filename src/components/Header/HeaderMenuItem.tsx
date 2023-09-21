import { Container, styled, SxProps, Typography } from "@mui/material";
import { Link, PathMatch, useMatch, useResolvedPath } from "react-router-dom";
import { MenuItemModel } from "../../models/MenuItemModel";
import { PROJECT_COLORS } from "../../common/ProjectConfig";

const HeaderMenuItemContainer = styled("div")(() => ({
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",
    "&:hover > #subMenu":{
        display:"block"
    }
}));
const HeaderMenuItemIndicator = styled("div")(() => ({
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    backgroundColor: "#F27405"
}));
const HeaderMenuItemLink = styled(Link)(() => ({
    textDecoration: "none",
}));
const SubMenuItemContainer = styled("div")(() => ({
    position:"absolute",
    // backgroundColor:"pink",
    minWidth:"210px",
    minHeight:"95px",
    boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
    // border:"1px solid black",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    backgroundColor:"white",
    marginRight:"15px",
    marginTop:"125px",
    borderRadius:"6px",

}));
const OneSubMenuItem = styled(Container)(() => ({
    position:"absolute",
    width:"200px",
    height:"100px",
    // backgroundColor:"red",
    marginRight:"15px",
    

}));


interface Pops {
    title: string,
    path: string,
    subMenu?: Array<MenuItemModel>,
    sx?: SxProps,
}

function HeaderMenuItem({title, path, subMenu, sx={}}: Pops) {
    let resolved = useResolvedPath(path);
    let match:PathMatch<string> | boolean | null = useMatch({ path: resolved.pathname, end: true });
    match = path.length === 0 ? false : match;


    return (
        <HeaderMenuItemContainer sx={{...sx}}>
            <Typography component={path.length === 0 ? "div" : HeaderMenuItemLink} to={path} variant="body1" style={{color: match ? PROJECT_COLORS.Or : "black"}} sx={{fontWeight:"bold", fontFamily:"PoppinsLight, sans-serif !important",}}>{title}</Typography>
            {/* <HeaderMenuItemIndicator style={{backgroundColor: match ? "#003789" : "rgba(0,0,0,0)"}}/> */}
        </HeaderMenuItemContainer>
    );
}

export default HeaderMenuItem;