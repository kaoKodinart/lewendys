import { Box, Button, FormControlLabel, Grid, IconButton, MenuItem, Radio, RadioGroup, Snackbar, Table, TableCell, TableRow, TextField, Typography, styled } from "@mui/material";
import SectionStyle from "../../Styles/SectionStyle";
import { useEffect, useState } from "react";
import MyButtonCoffe from "../../components/MyButtonCoffe";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import React from "react";
import { CommandeModel } from "../../models/CommandeModel";
import { sendCommandeData } from "../../services/http/commandeHttp";
import { useNavigate } from "react-router-dom";
import { getUserCommandeData } from "../../redux/slices/Commandes";
import { clearPanier } from "../../redux/slices/Plats";
import { CloseOutlined } from "@mui/icons-material";

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
    const [commandeData, setCommandeData] = React.useState<CommandeModel>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);
    const commandes = useAppSelector((state:RootState) => state.userCommande.commandes);

    useEffect (() => {
        dispatch(getUserCommandeData(userData?.id)).then((res) => console.log(res)).catch(error => {
          console.log(error);
          
        })
       }, [])

    const validate = () => {
        // console.log(commandes);
        const prixPanier = panier.map((item) => item.prixFinal).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        console.log(prixPanier);
        const prixPanierString: string = prixPanier.toString();
        console.log(prixPanierString+"Dollars");

        const formData = new FormData();
        formData.append('panier', JSON.stringify(panier));
        formData.append('panierPrice', prixPanierString);
        formData.append('nomClient', commandeData?.nomClient!);
        formData.append('adresse', commandeData?.adresse!);
        formData.append('dateRetrait', commandeData?.dateRetrait!);
        formData.append('detailsComment', commandeData?.detailsComment!);
        formData.append('emailClient', commandeData?.emailClient!);
        formData.append('heureRetrait', commandeData?.heureRetrait!);
        formData.append('modePaiement', payementType);
        formData.append('numTable', commandeData?.numTable!);
        formData.append('telephoneClient', commandeData?.telephoneClient!);
        formData.append('ville', commandeData?.ville!);
        formData.append('user_id', userData.id);
        
        if (formData) {
            sendCommandeData(formData, {'Content-Type': 'multipart/form-data',}).then((res)=>{
                handleOpenBar();
                dispatch(clearPanier());
                navigate("/")
            })
         //    console.log(photo);      
            console.log(formData);
            // console.log(commandeData);
            // console.log(JSON.stringify(commandeData?.panier));

     }           
 }

const handleChangeCommandeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommandeData((prev) => ({...prev, [e.target.name]: e.target.value} as CommandeModel));
    console.log(commandeData);
   };
    const panier = useAppSelector((state: RootState) => state.plats.plats);
    const [payementType, setpayementType] = useState('');
    const [payementMode, setPayementMode] = useState('');

    const handleSetpayementMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayementMode(()=> (e.target.value))
        console.log(payementMode);
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommandeData((prev) => ({...prev, [e.target.name]: e.target.value} as CommandeModel));
        console.log(commandeData);
      };

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
        <CheckoutContentStyle>
            <div className="carouse"></div>
            <TextFieldStyle defaultValue={""} name='modePaiement' select value={payementType} onChange={(e) => setpayementType(e.target.value)} label="Selectioner le mode de Payement" fullWidth>
                <MenuItem value={"Consommer Sur Place"}>Consommer Sur Place</MenuItem>
                <MenuItem value={"A emporter"}>A emporter</MenuItem>
                <MenuItem value={"Livraison a domicile"}>Livraison a domicile</MenuItem>
            </TextFieldStyle>
            <Box sx={{mt:3}} component={"form"}>
            {
                payementType == "Consommer Sur Place" && (
                    <Box>
                        <Typography>Description de la methode de livraison</Typography>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="nomClient"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth onChange={handleChange} sx={{color:"white"}} value={commandeData?.nomClient ?? ""}/>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="telephoneClient"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth onChange={handleChange} value={commandeData?.telephoneClient ?? ""}/>
                            </Grid>
                            <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="numTable"  variant="outlined" label={"Numéro de Table"} type="text" required={true} fullWidth onChange={handleChange} value={commandeData?.numTable ?? ""}/>
                            </Grid>
                            <Grid item lg={12} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                                <TextFieldStyle name="detailsComment"  variant="outlined" label={"Quelques Détailles"} type="text" required={true} fullWidth onChange={handleChange} multiline rows={5} value={commandeData?.detailsComment ?? ""}/>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
            {
               payementType == "A emporter" && (
                <Box >
                    <Typography>Description de la methode de livraison</Typography>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth onChange={handleChange} sx={{color:"white"}} value={commandeData?.nomClient ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="telephoneClient"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth onChange={handleChange} value={commandeData?.telephoneClient ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="dateRetrait"  variant="outlined" label={"Date de retrait"} required={true} type="date" fullWidth onChange={handleChange} sx={{color:"white"}} value={commandeData?.dateRetrait ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="heureRetrait"  variant="outlined" label={"Heure de Retrait"} type="time" required={true} fullWidth onChange={handleChange} value={commandeData?.heureRetrait ?? ""}/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="detailsComment"  variant="outlined" label={"Quelques Détailles"} type="text" required={true} fullWidth onChange={handleChange} multiline rows={5} value={commandeData?.detailsComment ?? ""}/>
                        </Grid>
                    </Grid>
                </Box>
               ) 
            }
            {
               payementType == "Livraison a domicile" && (
                <Box >
                    <Typography>Description de la methode de livraison</Typography>
                    <Grid container spacing={3}>
                    <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth onChange={handleChange} sx={{color:"white"}} value={commandeData?.nomClient ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="telephoneClient"  variant="outlined" label={"Téléphone"} type="tel" required={true} fullWidth onChange={handleChange} value={commandeData?.telephoneClient ?? ""}/>
                        </Grid>
                        <Grid item lg={4} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="emailClient"  variant="outlined" label={"Email"} type="text" required={true} fullWidth onChange={handleChange} value={commandeData?.emailClient ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="ville"  variant="outlined" label={"Ville"} type="text" required={true} fullWidth onChange={handleChange} value={commandeData?.ville ?? ""}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="adresse"  variant="outlined" label={"Adresse"} required={true} type="text" fullWidth onChange={handleChange} value={commandeData?.adresse ?? ""} sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={12} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="detailsComment"  variant="outlined" label={"Quelques Détailles"} type="text" required={true} fullWidth onChange={handleChange} multiline rows={5} value={commandeData?.detailsComment ?? ""}/>
                        </Grid>
                    </Grid>
                </Box>
               ) 
            }
            <RadioGroup row name="Carnet_de_Vaccination" value={payementMode} onChange={handleSetpayementMode}>
                <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                <FormControlLabel value="Stripe" control={<Radio />} label="Stripe" />
            </RadioGroup>
            {payementMode === "Stripe" && (
                <Grid container spacing={3} sx={{mt:0, mb:2}}>
                        <Grid item lg={3} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Numero de la carte"} required={true} type="text" fullWidth onChange={handleChange}  sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={3} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"CVC"} type="text" required={true} fullWidth onChange={handleChange} />
                        </Grid>
                        <Grid item lg={3} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Mois"} required={true} type="text" fullWidth onChange={handleChange}  sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={3} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Année"} type="text" required={true} fullWidth onChange={handleChange} />
                        </Grid>
                </Grid>
            ) }
            <MyButtonCoffe text={"Valider"} cliqFunc={()=>{validate()}}/>
            </Box>

            <Snackbar open={openBar} autoHideDuration={5000} onClose={handleCloseBar} message="Votre Message a été envoyé avec succès." action={action} />     

        </CheckoutContentStyle>
    );
}

export default CheckoutContent;