import { styled } from '@mui/material';

const MapSectionContainer = styled("section")(()=> ({
    // backgroundColor:"black",
    minHeight:"40vh",
    // display:"grid",
    placeItems:"center",
    // padding:"2vh 0vh 10vh 0vh ",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
 
 }))

 const Map = styled("iframe")(({theme}) => ({
    width: "100%",
    height: "40vh",
    border:"none",
    // color:"black",
    // borderRadius:"3px",
    // marginTop: "10px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }
}));

function MapSection() {
    return (
        <MapSectionContainer>
            <Map src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.113947670443!2d1.2661557!3d6.1937796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e32bb520a9e7%3A0x1bef0b099c245a68!2sKodinart!5e0!3m2!1sfr!2stg!4v1689257794657!5m2!1sfr!2stg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'/>
        </MapSectionContainer>
    );
}

export default MapSection;