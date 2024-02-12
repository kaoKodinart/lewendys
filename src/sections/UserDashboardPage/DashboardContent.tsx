import { Box, Grid, Tab, Table, TableCell, TableRow, Tabs, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import SectionStyle from '../../Styles/SectionStyle';
import { PROJECT_COLORS } from '../../common/ProjectConfig';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { getUserCommandeData } from '../../redux/slices/Commandes';
import { List, Person, Person2, Person3, Task } from '@mui/icons-material';
import MyButtonCoffe from '../../components/MyButtonCoffe';


const DashboardContentStyle = styled(SectionStyle)(({theme})=> ({
    minHeight:"50vh",
    // display:"flex",
    // flexDirection:"row",
    // justifyContent:"center",
    // alignItems:"center",
    [theme.breakpoints.down("md")]: {   
    },
}))

const DashboardContentLittleTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    fontWeight: 700,
    color: PROJECT_COLORS.Red,
    textAlign:"center",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

const DashboardContentTitle = styled(Typography)(({theme}) => ({
    margin: "0px 0px 50px 0px",
    fontSize:"0.9em",
    fontFamily:"PoppinsLight, sans-serif !important",
    textAlign:"center",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const ProfilTitle = styled(Typography)(({theme}) => ({
    margin: "0px 0px 30px 0px",
    fontSize:"1.1em",
    fontFamily:"PoppinsRegular, sans-serif !important",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const ProfilTitleVal = styled(Typography)(({theme}) => ({
    margin: "0px 0px 30px 0px",
    fontSize:"1.1em",
    fontFamily:"PoppinsBold, sans-serif !important",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const TableTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.2em",
    fontFamily:"PoppinsSemiBold, sans-serif !important",
    color: PROJECT_COLORS.Or,
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const TableTitleVal = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsLight, sans-serif !important",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));
const BoxStyle = styled(Box)(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"yellow",
    // width:"100%",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <BoxStyle sx={{  p :3}}>
            <Typography>{children}</Typography>
          </BoxStyle>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function DashboardContent() {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);
    const [value, setValue] = React.useState(0);
    const commandes = useAppSelector((state:RootState) => state.userCommande.commandes);
    const dispatch = useAppDispatch();


    useEffect (() => {
        dispatch(getUserCommandeData(userData?.id)).then((res) => console.log(res)).catch(error => {
          console.log(error);
          
        })
       }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
        <DashboardContentStyle >
        <Box sx={{ borderBottom: 0, borderColor: 'none' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab sx={{borderColor:PROJECT_COLORS.CofeeDark}}  icon={<Person sx={{color:PROJECT_COLORS.CofeeDark, width: 38, height: 38}}/>}  {...a11yProps(0)} />
            <Tab icon={<List sx={{color:PROJECT_COLORS.CofeeDark, width: 38, height: 38}}/>}{...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <DashboardContentLittleTitle>Profil</DashboardContentLittleTitle>
            <DashboardContentTitle>Consultez vos informations personelles</DashboardContentTitle>
            <Grid container>
                <Grid item lg={6} ><ProfilTitle>Nom et Prenoms</ProfilTitle></Grid><Grid item lg={6} ><ProfilTitleVal>{userData.name}</ProfilTitleVal></Grid>
                <Grid item lg={6} ><ProfilTitle>Email</ProfilTitle></Grid><Grid item lg={6} ><ProfilTitleVal>{userData.email}</ProfilTitleVal></Grid>
                <Grid item lg={6} ><ProfilTitle>Telephone</ProfilTitle></Grid><Grid item lg={6} ><ProfilTitleVal></ProfilTitleVal></Grid>
            </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <DashboardContentLittleTitle>Commandes</DashboardContentLittleTitle>
            <DashboardContentTitle>Consultez l'historique de vos commandes</DashboardContentTitle>
            <Table sx={{width:"100%"}}>
                <TableRow >
                    <TableCell><TableTitle>Numero</TableTitle></TableCell>
                    <TableCell><TableTitle>Identité</TableTitle></TableCell>
                    <TableCell><TableTitle>Mode de Livraison</TableTitle></TableCell>
                    <TableCell><TableTitle>Date de la commande</TableTitle></TableCell>
                    <TableCell><TableTitle>Actions</TableTitle></TableCell>
                </TableRow>
            {
    Array.isArray(commandes) && commandes.map((item, index) => 
        <TableRow key={index}>
            <TableCell><TableTitleVal>{index + 1}</TableTitleVal></TableCell>
            <TableCell><TableTitleVal>{item.nomClient}</TableTitleVal></TableCell>
            <TableCell><TableTitleVal>{item.modePaiement}</TableTitleVal></TableCell>
            <TableCell><TableTitleVal>12/02/2024</TableTitleVal></TableCell>
            <TableCell><TableTitleVal><MyButtonCoffe cliqFunc={()=>{}} text='Détails'/></TableTitleVal></TableCell>
        </TableRow>
    )
}
                </Table>
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
      </DashboardContentStyle>
    );
}

export default DashboardContent;

