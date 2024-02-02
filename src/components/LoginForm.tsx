import { Box, Grid,  TextField, Typography, styled } from "@mui/material";
import MyButtonBlack from "./MyButtonBlack";
import TextButton from "./TextButton";
import { USER_PAGES } from "../routes/path";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import React from "react";
import { UserModel } from "../models/UserModel";

const LoginFormContainer = styled (Box)(({theme})=>({
    width:"60%",
    display:"flex",
    flexDirection:"column",
    padding:"30px",
    // backgroundColor:"red",
    alignItems:"center",
    [theme.breakpoints.down('lg')]: {
        maxWidth:"80%",
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth:"90%",
    },

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

export const CheckText = styled(Typography)(({theme})=> ({
    fontFamily:"InterLight, sans-serif !important",
    lineHeight:"1.0em",
    fontSize:"0.8em",
    color:"#D4D4D4",
    '& .conditionButton': {
        color:"green",
        [theme.breakpoints.down('lg')]: {
            lineHeight:1.2,
            },
      },    
}))
export const LoginFoot = styled("div")(()=> ({
    marginTop:"50px",
    width:"100%",
    display:"flex",
    justifyContent:"space-between",  
}))
function LoginForm() {

    const [commandeData, setCommandeData] = React.useState<UserModel>();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommandeData((prev) => ({...prev, [e.target.name]: e.target.value} as UserModel));
        console.log(commandeData);
      };
    return (
        <LoginFormContainer>
            <Grid container spacing={4}>
                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Email"} required={true} type="text" fullWidth/>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Mot de Passe"} required={true} type="text" fullWidth/>
                </Grid>
            </Grid>
            <MyButtonBlack text='Valider' sx={{padding:"15px 40px", mt:3}}/>
            <LoginFoot>
                <TextButton title={"Vous n'avez pas de compte?"} path={USER_PAGES.register} sx={{ fontSize:"12px", color:PROJECT_COLORS.CofeeDark}}/>
                <TextButton title={"Mot de passe oublié?"} path={USER_PAGES.about} sx={{ fontSize:"12px", color:PROJECT_COLORS.CofeeDark}}/>
            </LoginFoot>
        </LoginFormContainer>
    );
}

export default LoginForm;