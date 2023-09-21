import { Container, Grid, Paper, TextField, styled } from '@mui/material';
import React from 'react';
import MyButtonCoffe from './MyButtonCoffe';
const ContactFormContainer = styled (Paper)(()=>({
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

const TextFieldStyle=styled(TextField)(({theme})=>({
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

function ContactForm() {
    return (
        <ContactFormContainer>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="name"  variant="outlined" label={"Nom et Prénoms"} required={true} type="text" fullWidth sx={{color:"white"}}/>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"row"}}>
                            <TextFieldStyle name="email"  variant="outlined" label={"Email"} type="email" required={true} fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldStyle name="message"  variant="outlined" label={"Sujet"} required={true} type='text' fullWidth  />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldStyle name="message"  variant="outlined" label={"Votre Message"} required={true} type='text' fullWidth  multiline rows={8}/>
                        </Grid>
                    </Grid>
                    {/* <ButtonContaine>
                        <Button variant="contained" sx={{backgroundColor:"#FF8000", width:"200px", height:"50px", marginTop:"50px"}} onClick={submit}>Envoyer</Button>
                    </ButtonContainer> */}
                    <MyButtonCoffe text='Envoyer' sx={{padding:"15px 40px", mt:3}}/>
                </Container>
        </ContactFormContainer>
    );
}

export default ContactForm;