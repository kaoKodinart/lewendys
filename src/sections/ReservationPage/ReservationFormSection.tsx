import {  styled } from '@mui/material';
import SectionStyle from '../../Styles/SectionStyle';
import ReservationForm from '../../components/ReservationForm';

const ReservationFormSectionContainer = styled(SectionStyle)(({theme})=> ({
    minHeight:"50vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
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
    alignItems:"flex-start",
    // backgroundColor:"grey",
    // height:"50vh",
    [theme.breakpoints.down('md')]: {
        paddingBottom:"25px",
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
    alignItems:"center",
    // backgroundColor:"blue",
    [theme.breakpoints.down('md')]: {
        width:"100%",
    //    display:"none"
    },
}));



const ReservationFormImg = styled("img")(({theme}) => ({
    width:"100%",
    [theme.breakpoints.down('md')]: {
    },
}));

function ReservationFormSection() {
    return (
        <ReservationFormSectionContainer>
            <ContaintLeft>
                <ReservationFormImg src='/src/assets/images/reservation_img.png'/>
            </ContaintLeft>
            <ContaintRight>
                <ReservationForm/>
            </ContaintRight>
        </ReservationFormSectionContainer>
    );
}

export default ReservationFormSection;