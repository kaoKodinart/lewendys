import { Container, Grid, Paper, TextField, Typography, styled } from "@mui/material";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import MyButtonBlack from "./MyButtonBlack";

const ReservationFormContainer = styled (Paper)(()=>({
    minWidth:"300px",
    minHeight:"20vh",
    display:"flex",
    flexDirection:"column",
    padding:"30px 0px 30px 0px",
    // backgroundColor:"#F3F5FA",
    background:"transparent",
    // border:"1px solid #DDDFE3",
    // justifyContent:"space-evenly",
    borderRadius:"5px",
    boxShadow:"none",
    alignItems:"center",
}))

const TextFieldStyle=styled(TextField)(()=>({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
        //   borderColor: 'red', // couleur personnalisée
        border:"none",
        backgroundColor:"#D9D9D9",
        borderRadius:"5px",
        },
        '&:hover fieldset': {
            borderColor: 'grey', // couleur au survol
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white', //  couleur au clic/focus
          },
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color:"black", //  couleur personnalisée après le clic/focus
        // color: PROJECT_COLORS.Blue, //  couleur personnalisée après le clic/focus
      },
      '& .MuiInputLabel-root': {
        fontFamily:"PoppinsRegular, sans-serif !important",
        color: 'grey', // Couleur du texte
      },
      "& .MuiInputBase-root": {
        color: 'white'
    }
   
}));

const ReservationFormTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    fontWeight: 700,
    color: PROJECT_COLORS.Red,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

const ReservationFormSubTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.7em",
    margin:"10px 0px 20px 0px",
    fontWeight:"bold",
    // width:"30%",
    textAlign:"start",
    // lineHeight:"1.2em",
    [theme.breakpoints.down('sm')]: {
        fontSize:"1.2em",
    },
}));

function ReservationForm() {
    return (
        <ReservationFormContainer>
            <ReservationFormTitle>RESERVER UNE TABLE</ReservationFormTitle>
            <ReservationFormSubTitle>Reservation rapide</ReservationFormSubTitle>
            <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Adresse Email"} type="email" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Nombre de personnes"} type="text" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Date"} type="date" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Heure"} type="time" required={true} fullWidth/>
                        </Grid>
                    </Grid>
                    {/* <ButtonContaine>
                        <Button variant="contained" sx={{backgroundColor:"#FF8000", width:"200px", height:"50px", marginTop:"50px"}} onClick={submit}>Envoyer</Button>
                    </ButtonContainer> */}
                    <MyButtonBlack text='RESERVER' sx={{padding:"15px 40px", mt:3}}/>
                </Container>
        </ReservationFormContainer>
    );
}

export default ReservationForm;