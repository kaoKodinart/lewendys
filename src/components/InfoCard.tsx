import { Card,  Typography, styled } from '@mui/material';
import { ReactNode } from 'react';

const InfoCardStyle = styled(Card)(({theme})=>({
    width:"300px",
    height:"175px",
    borderRadius:"6px",
    backgroundColor:"white",
    boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.20)",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    // border:"1px solid #003789",
    // padding:"10px",
    // display:"grid",
    // placeItems:"center",
    // transition: '0.5s ease',
    // transition:"border all ease-in-out 0.3s",
    transition: 'border 0.3s ease-in-out',
    '&:hover': {
        // border:"1px solid #2A2A2A",
        // border:"1px solid black",
        // transform:"translate(-1px, -1px)",
    },
    [theme.breakpoints.down('sm')]: {
        // width:"95%",
    },
}));


const ContactElementIconContainer = styled("div")(({theme})=>({
    // width:"75px",
    // height:"75px",
    // borderRadius:"50%",
    // backgroundColor:"#EDF2F7",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}))
const ContactElementTitle = styled(Typography)(({theme})=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:'black',
    fontSize:"1.3em"
}))
const ContactElementLink = styled("a")(({theme})=>({
    fontFamily:"PoppinsRegular, sans-serif !important", 
    color:'black', 
    // textAlign:"end",
    textDecoration:"none"
}))


interface Props {
    icon:ReactNode,
    elementTitle:string,
    elementLink:string,
    path:string
}
function InfoCard({icon, elementTitle, elementLink,path}: Props) {
    return (
        // <Fade in={true} timeout={1000} >
            <InfoCardStyle>
                <ContactElementIconContainer>                   
                        {icon}
                </ContactElementIconContainer>
                <ContactElementTitle>
                    {elementTitle}
                </ContactElementTitle>
                <ContactElementLink target='blank' href={path}>{elementLink}</ContactElementLink>
                {/* <TextButton title={elementLink} path={path} sx={{}}/> */}
        </InfoCardStyle>
        // </Fade>
    );
}

export default InfoCard;