import { Typography, styled } from '@mui/material';

const HeroQualitieElementStyle = styled("div")(({theme}) => ({
    // width:"calc(100% - 12px)",
    minWidth:"200px",
    // height:"calc(50px - 12px)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    // padding:"6px",
    // gap:10,
    // backgroundColor:"red",
    borderRadius:"50px",
    // objectFit:"cover",
    [theme.breakpoints.down('sm')]: {
        // width:"calc(100% - 12px)",
    },
}));
const HeroQualitieElementImg = styled("img")(({theme}) => ({
    width:"100%",
    height:"100%",
    // borderRadius:"10px",
    objectFit:"contain",
    [theme.breakpoints.down('md')]: {
    },
}));
const HeroQualitieElementImgContainer = styled("div")(({theme}) => ({
    // backgroundColor: PROJECT_COLORS.CofeeSoft,
    width:"75px",
    height:"75px",
    borderRadius:"50%",
    objectFit:"cover",
    display:"grid",
    placeItems:"center",
    [theme.breakpoints.down('lg')]: {
        width:"40px",
        height:"40px",
    },
}));
const HeroQualitieElementText = styled(Typography)(({theme}) => ({
    fontFamily:"PoppinsRegular, sans-serif !important",
    fontSize:"1.0em",
    marginLeft:"0.8em",
    [theme.breakpoints.down('md')]: {
    },
}));

interface Props {
    icone: string,
    text: string,
}

function HeroQualitieElement({icone, text}: Props) {
    return (
        <HeroQualitieElementStyle>
            <HeroQualitieElementImgContainer>
                <HeroQualitieElementImg src= {icone}/>
            </HeroQualitieElementImgContainer>
                <HeroQualitieElementText>{text}</HeroQualitieElementText>
        </HeroQualitieElementStyle>
    );
}

export default HeroQualitieElement;