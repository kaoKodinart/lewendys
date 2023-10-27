import { Box, Grid, MenuItem, TextField, Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { useState } from "react";

const CheckoutContentStyle = styled(SectionStyle)(({theme}) => ({
    
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

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
        color: 'black',
        backgroundColor:"#D9D9D9",

    }
   
}));
function CheckoutContent() {
    const [payementType, setpayementType] = useState('');

    return (
        <CheckoutContentStyle>
            <TextFieldStyle defaultValue={""} name='typeDevis' select value={payementType} onChange={(e) => setpayementType(e.target.value)} label="Selectioner le mode de Payement" fullWidth>
                <MenuItem value={"Consommer Sur Place"}>Consommer Sur Place</MenuItem>
                <MenuItem value={"A emporter"}>A emporter</MenuItem>
                <MenuItem value={"Livraison a domicile"}>Livraison a domicile</MenuItem>
            </TextFieldStyle>
            {
                payementType == "Consommer Sur Place" && (
                    <Box sx={{mt:3}}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth sx={{color:"white"}}/>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="email"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth/>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="email"  variant="outlined" label={"Numéro de Table"} type="text" required={true} fullWidth/>
                            </Grid>
                            <Grid item lg={12} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="email"  variant="outlined" label={"Quelques Détailles"} type="text" required={true} fullWidth multiline rows={5}/>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
            {
               payementType == "A emporter" && (
                <Box sx={{mt:3}}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Date de retrait"} required={true} type="date" fullWidth sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Heure de Retrait"} type="time" required={true} fullWidth/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Quelques Détailles"} type="text" required={true} fullWidth multiline rows={5}/>
                        </Grid>
                    </Grid>
                </Box>
               ) 
            }
            {
               payementType == "Livraison a domicile" && (
                    <Box>
                        Livraison a domicile
                    </Box>
               ) 
            }
        </CheckoutContentStyle>
    );
}

export default CheckoutContent;