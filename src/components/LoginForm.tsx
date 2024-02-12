import { Box, Button, Container, Grid,  TextField, Typography, styled } from "@mui/material";
import MyButtonBlack from "./MyButtonBlack";
import TextButton from "./TextButton";
import { USER_PAGES } from "../routes/path";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import React, { useEffect } from "react";
import { UserModel } from "../models/UserModel";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { getCurentUser, signInWithEmailAndPassword } from "../redux/slices/Auth";
import { useNavigate } from "react-router-dom";

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
        fontFamily:"PoppinsRegular, sans-serif !important",
        color: PROJECT_COLORS.CofeeDark,
        backgroundColor:"#D9D9D9",
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

const ButtonContainer = styled ("div")(()=>({
    width:"100%",
    display:"flex",
    justifyContent:"center",
}))
function LoginForm() {
    const panier = useAppSelector((state: RootState) => state.plats.plats);
    const navigate = useNavigate();
    const user = useAppSelector((state:RootState) => state.auth.user);

    useEffect (() => {
        dispatch(getCurentUser()).then((res) => console.log(res)).catch(error => {
          console.log(error);
        })
       }, [])

    const [userData, setUserData] = React.useState<UserModel>();
    const dispatch = useAppDispatch();

    const validate = () => {
        const formData = new FormData();
        formData.append('email', userData!.email);
        formData.append('password', userData!.password);
        console.log(userData);
        if (formData) {
            dispatch(signInWithEmailAndPassword({formdata: formData})).unwrap().then((currentUser)=> {
                console.log("localStorage",localStorage.getItem("token"));
                navigate(panier.length ?  "/checkout" : "/dashboard")
                // console.log("form", currentUser);
                // alert(user?.email)
                // alert(currentUser.email)
            }).catch((error) => {
                console.error("Erreur de connexion :", error);
              });
            console.log(formData);
     }        
    }
    const locStore = () => {
        console.log("localStorage",localStorage.getItem("token"));
    }
    const logout = () => {
        localStorage.removeItem("token");
        // console.log("localStorage",localStorage.getItem("token"));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => ({...prev, [e.target.name]: e.target.value} as UserModel));
        console.log(userData);
      };

    return (
        <LoginFormContainer>
            {/* <Container component={"form"}> */}
                <Grid container spacing={4}>
                    <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                        <TextFieldStyle value={userData?.email ?? ""} name="email" onChange={handleChange}  variant="outlined" label={"Email"} required={true} type="text" fullWidth/>
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12} md={12} sx={{display:"flex", flexDirection:"row"}}>
                        <TextFieldStyle value={userData?.password ?? ""} name="password" onChange={handleChange} variant="outlined" label={"Mot de Passe"} required={true} type="text" fullWidth/>
                    </Grid>
                </Grid>
                <ButtonContainer>
                    <MyButtonBlack cliqFunc={()=> validate()}  text='Valider' sx={{padding:"15px 40px", mt:3}} />
                    {/* <Button onClick={()=> } type="submit">Valider</Button> */}
                    {/* <Button onClick={()=> locStore()} type="submit">Test</Button> */}
                    {/* <Button onClick={()=> logout()} type="submit">deconnect</Button> */}
                </ButtonContainer>
            {/* </Container> */}
            <LoginFoot>
                <TextButton title={"Vous n'avez pas de compte?"} path={USER_PAGES.register} sx={{ fontSize:"12px", color:PROJECT_COLORS.CofeeDark}}/>
                <TextButton title={"Mot de passe oublié?"} path={USER_PAGES.about} sx={{ fontSize:"12px", color:PROJECT_COLORS.CofeeDark}}/>
            </LoginFoot>
        </LoginFormContainer>
    );
}

export default LoginForm;