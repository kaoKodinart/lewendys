import { Container, Grid, styled } from '@mui/material';
import { Email, LocalActivity, LocationOn, PhoneAndroid } from '@mui/icons-material';
import InfoCard from '../../components/InfoCard';

const MapInfoStyle = styled("section")(()=> ({
    minHeight:"25vh",
    // backgroundColor: "#EDF2F7",
    // overflow: "hidden",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
}))
const MapInfoStyleContent = styled("div")(({theme})=> ({
    // minHeight:"45vh",
    // backgroundColor: "blue",
    width:"80%",
    // overflow: "hidden",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"10vh 0vh 10vh 0vh ",
    // margin:"15px 0px 15px 0px",
    [theme.breakpoints.down('md')]: {
        // width:"100%",
        // minHeight:"30vh",
        // display:"flex",
        width:"90%",
        // backgroundColor:"green",
        flexDirection:"column",
        },
}))
const MapInfoStyleLeft = styled("div")(({theme})=> ({
    minHeight:"60vh",
    // backgroundColor: "blue",
    width:"50%",
    // overflow: "hidden",
    display:"flex",
    flexDirection:"row",
    justifyContent:"end",
    alignItems:"center",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        },
}))
const MapInfoStyleRight = styled("div")(({theme})=> ({
    minHeight:"60vh",
    // backgroundColor: "blue",
    width:"50%",
    overflow: "hidden",
    display:"flex",
    gap:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",    
    [theme.breakpoints.down('md')]: {
        width:"100%",
        },
}))

const Map = styled("iframe")(({theme}) => ({
    width: "80%",
    height: "50vh",
    color:"black",
    borderRadius:"20px",
    // marginTop: "10px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    }
}));

function MapInfo() {
    return (
        <MapInfoStyle>
            <MapInfoStyleContent>
                    <Container>
                        <Grid container spacing={2.5}>
                            <Grid item xs sx={{display:"grid", placeItems:"center"}}>
                                <InfoCard icon={<PhoneAndroid sx={{ color: "black", }} fontSize='large' />} elementTitle={'Telephone'} elementLink={'+228 22 60 12 00'} path={'tel:+22822601200'}/>
                            </Grid>
                            <Grid item xs sx={{display:"grid", placeItems:"center"}}>
                                <InfoCard icon={<Email sx={{ color: "black", }} fontSize='large' />} elementTitle={'Email'} elementLink={'contact@kodinart.com'} path={'mailto:contact@kodinart.com'}/>
                            </Grid>
                            <Grid item xs sx={{display:"grid", placeItems:"center"}}>
                                {/* <InfoCard icon={<LocationOn sx={{ color: "black", }} fontSize='large' />} elementTitle={'Adresse'} elementLink={'Attiégougan, 10 BP:10172 Lomé-TOGO'} path={'https://goo.gl/maps/jfrj92W4jwq2Hbnp9'}/> */}
                                <InfoCard icon={<LocationOn sx={{ color: "black", }} fontSize='large' />} elementTitle={'Adresse'} elementLink={'Attiégougan, 10 BP:10172 Lomé-TOGO'} path={'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.113947670443!2d1.2661557!3d6.1937796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e32bb520a9e7%3A0x1bef0b099c245a68!2sKodinart!5e0!3m2!1sfr!2stg!4v1689257794657!5m2!1sfr!2stg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'}/>
                            </Grid>
                        </Grid>
                    </Container>
            </MapInfoStyleContent>
        </MapInfoStyle>
    );
}

export default MapInfo;