import { Grid, Typography, styled } from '@mui/material';
import SectionStyle from '../../Styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/ProjectConfig';
import ChoosUsItem from '../../components/ChoosUsItem';

const ChooseUsSectionContainer = styled(SectionStyle)(({theme})=> ({
    padding:"0px 12vw 0px 12vw",
    // width:"calc(100% - 24vw)",

    // minHeight:"20vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"row-reverse",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"green",
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
    alignItems:"center",
    // backgroundColor:"pink",
    // backgroundColor:"grey",
    // height:"50vh",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        // height:"35vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        // alignItems:"center",
    },

}));
const ContaintRight = styled("div")(({theme}) => ({
    width:"50%",
    // padding:"0px 5vw 0px 5vw",
    // width:"calc(60% - 10vw)",
    display:"flex",
    // minHeight:"50vh",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start",
    // backgroundColor:"blue",
    [theme.breakpoints.down('md')]: {
        width:"100%",
    //    display:"none"
    },
}));

const ChooseUsSectionLittleTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    color: PROJECT_COLORS.Red,
    fontWeight: 700,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));
const ChooseUsSectionBigTitle = styled(Typography)(({theme}) => ({
    // margin: "0px 0px 50px 0px",
    fontSize:"1.8em",
    fontFamily:"Cambria, sans-serif !important",
    fontWeight: 700,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
        fontSize:"1.5em",

    },
}));

const ChooseUsSectionImg = styled("img")(({theme}) => ({
    width:"100%",
    scale:"0.8",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
        scale:"0.9",
    },
}));

function ChooseUsSection() {
    return (
        <ChooseUsSectionContainer>
            <ContaintLeft>
                <ChooseUsSectionImg src='/src/assets/images/choose_us_img.png'/>
            </ContaintLeft>
            <ContaintRight>
                <ChooseUsSectionLittleTitle>Pourquoi Nous Choisir?</ChooseUsSectionLittleTitle>
                <ChooseUsSectionBigTitle>Aussi rapide que vous l'espérez</ChooseUsSectionBigTitle>
                <Grid container spacing={2} sx={{mt:3}} rowGap={5}>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <ChoosUsItem/>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <ChoosUsItem/>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <ChoosUsItem/>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6}>
                        <ChoosUsItem/>
                    </Grid>
                </Grid>
            </ContaintRight>
        </ChooseUsSectionContainer>
    );
}

export default ChooseUsSection;