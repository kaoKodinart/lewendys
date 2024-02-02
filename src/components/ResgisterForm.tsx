import { Box, Grid,  TextField, Typography, styled } from "@mui/material";
import MyButtonBlack from "./MyButtonBlack";
import TextButton from "./TextButton";
import { USER_PAGES } from "../routes/path";
import { PROJECT_COLORS } from "../common/ProjectConfig";

const ResgisterFormContainer = styled (Box)(({theme})=>({
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
function ResgisterForm() {
    return (
        <ResgisterFormContainer>
            <Grid container spacing={4}>
                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Nom d'utilisateur"} required={true} type="text" fullWidth/>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Email"} required={true} type="text" fullWidth/>
                </Grid>

                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Mot de Passe"} required={true} type="text" fullWidth/>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                    <TextFieldStyle name="name"  variant="outlined" label={"Confirmer le Mot de Passe"} required={true} type="text" fullWidth/>
                </Grid>
            </Grid>
            <MyButtonBlack text='Valider' sx={{padding:"15px 40px", mt:3}}/>
            <LoginFoot>
                <TextButton title={"Vous avez déjà un compte?"} path={USER_PAGES.login} sx={{ fontSize:"12px", color:PROJECT_COLORS.CofeeDark}}/>
            </LoginFoot>
        </ResgisterFormContainer>
    );
}

export default ResgisterForm;