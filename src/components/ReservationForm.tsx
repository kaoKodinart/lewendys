import { Button, Container, Grid, IconButton, Paper, Snackbar, TextField, Typography, styled } from "@mui/material";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import MyButtonBlack from "./MyButtonBlack";
import React, { useState } from "react";
import { ReservationModel } from "../models/ReservationModel";
import { sendReservationData } from "../services/http/reservationHttp";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { CloseOutlined } from "@mui/icons-material";

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
        color: PROJECT_COLORS.Black,
        backgroundColor:"#D9D9D9",

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
    const [reservationData, setReservationData] = React.useState<ReservationModel>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReservationData((prev) => ({...prev, [e.target.name]: e.target.value} as ReservationModel));
        console.log(reservationData);
      };
      
      const navigate = useNavigate();
      const dispatch = useAppDispatch();

      const validate = () => {
        const formData = new FormData();

        formData.append('nom', reservationData?.nom!);
        formData.append('email', reservationData?.email!);
        formData.append('nombre_personnes', reservationData?.nombre_personnes!);
        formData.append('telephone', reservationData?.telephone!);
        formData.append('date', reservationData?.date!);
        formData.append('heure', reservationData?.heure!);

        if (formData) {
            console.log(reservationData);
            sendReservationData(formData, {'Content-Type': 'multipart/form-data',}).then((res)=>{
                handleOpenBar();
                // navigate("/")
            })
         //    console.log(photo);      
            // console.log(formData.values);
            // console.log(commandeData);
            // console.log(JSON.stringify(commandeData?.panier));

     }     

      }

      const [openBar, setOpenBar] = useState(false);

      const handleOpenBar = () => {
          setOpenBar(true);
        };
  
        const handleCloseBar = (event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpenBar(false);
        };

      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleCloseBar}>
            OK
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseBar}
          >
            <CloseOutlined fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    return (
        <ReservationFormContainer>
            <ReservationFormTitle>RESERVER UNE TABLE</ReservationFormTitle>
            <ReservationFormSubTitle>Reservation rapide</ReservationFormSubTitle>
            <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="nom"  variant="outlined" label={"Nom et Prénoms"} onChange={handleChange} value={reservationData?.nom ?? ""} required={true} type="text" fullWidth sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Adresse Email"} type="email" onChange={handleChange} value={reservationData?.email ?? ""} required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="nombre_personnes"  variant="outlined" label={"Nombre de personnes"} type="text" onChange={handleChange} value={reservationData?.nombre_personnes ?? ""} required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="telephone"  variant="outlined" label={"Téléphone"} type="tel" onChange={handleChange} value={reservationData?.telephone ?? ""} required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="date"  variant="outlined" label={"Date"} type="date" onChange={handleChange} value={reservationData?.date ?? ""} required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="heure"  variant="outlined" label={"Heure"} type="time" onChange={handleChange} value={reservationData?.heure ?? ""} required={true} fullWidth/>
                        </Grid>
                    </Grid>
                    {/* <ButtonContaine>
                        <Button variant="contained" sx={{backgroundColor:"#FF8000", width:"200px", height:"50px", marginTop:"50px"}} onClick={submit}>Envoyer</Button>
                    </ButtonContainer> */}
                    <MyButtonBlack cliqFunc={()=>{validate()}} text='RESERVER' sx={{padding:"15px 40px", mt:3}}/>
                </Container>
                <Snackbar open={openBar} autoHideDuration={5000} onClose={handleCloseBar} message="Votre reservation a bien été enregistré" action={action} />     
        </ReservationFormContainer>
    );
}

export default ReservationForm;