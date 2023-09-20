import { Grid, Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import MyButtonBlack from "../../components/MyButtonBlack";
import HeroQualitieElement from "../../components/HeroQualitieElement";

const HomeHeroContainer = styled(SectionStyle)(({theme})=> ({
    // backgroundColor: "cyan",
    padding:"175px 12vw 75px 12vw",
    minHeight:"55vh",
    display:"flex",
    flexDirection:"row",
    position:"relative",
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

const RightImg = styled("img")(({theme}) => ({
    position:"absolute",
    maxHeight: "100%",
    right:0,
    top: 0,
    // height: "auto",
    [theme.breakpoints.down('md')]: {
    },

}));

const ContaintLeft = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",

    // height:"50vh",
    [theme.breakpoints.down('md')]: {
        paddingBottom:"100px",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // height:"40vh",

    },
    [theme.breakpoints.down('sm')]: {
    paddingBottom:"50px"
    },

}));

const ContaintRight = styled("div")(({theme}) => ({
    width:"50%",
    display:"flex",
    // height:"50vh",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    // zIndex: 1,
    // backgroundColor:"red",
    [theme.breakpoints.down('md')]: {
        width:"100%",
    },

}));

const HeroBigText = styled(Typography)(({theme}) => ({
    fontSize:"3.2em",
    fontFamily:"PoppinsExtraBold, sans-serif !important",
    color:"black",
    width:"95%",
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

const HeroBigSubText = styled(Typography)(({theme}) => ({
    fontSize:"1.2em",
    fontFamily:"PoppinsRegular, sans-serif !important",
    color:"black",
    width:"75%",
    margin:"30px 0px 30px 0px",
    // lineHeight:"1.2em",
    [theme.breakpoints.down('lg')]: {
        width:"90%",
    },
    [theme.breakpoints.down('md')]: {
        width:"100%",
        textAlign:"center",
    },
}));

const HeroImg = styled("img")(({theme}) => ({
    width:"100%",
    height:"100%",
    borderRadius:"10px",
    objectFit:"cover",
    // position:"relative",
    // zIndex: 1,
    [theme.breakpoints.down('md')]: {
    },
}));

function HomeHero() {
    return (
        <HomeHeroContainer>
            <RightImg src="/src/assets/images/home_hero_shape.png"/>
            <ContaintLeft>
                <HeroBigText>Les Délices de chez Le Wendy’s</HeroBigText>
                <HeroBigSubText>Lorem ipsum dolor sit amet consectetur. Sed rhoncus scelerisque volutpat sapien mauris quam.</HeroBigSubText>
                <MyButtonBlack text='Reservation' sx={{padding:"15px 30px", }}/>
                <Grid container columnSpacing={2} rowSpacing={2} sx={{marginTop:"15px", }}>
                    {/* <Grid item  xs sx={{display:"grid", placeItems:"center"}}>     */}
                    <Grid item  xs sx={{}}>    
                        <HeroQualitieElement icone="/src/assets/images/specialiste.png" text="Un menu préparé par les spécialistes.."/>
                    </Grid>
                    <Grid item  xs sx={{display:"grid", placeItems:"center"}}>    
                        <HeroQualitieElement icone="/src/assets/images/livraison.png" text="Livraison rapide"/>
                    </Grid>
                </Grid>
            </ContaintLeft>
            <ContaintRight>
                <HeroImg src="/src/assets/images/home_hero_img.png"/>
            </ContaintRight>
        </HomeHeroContainer>
    );
}

export default HomeHero;