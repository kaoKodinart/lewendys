import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import Fade from '../animations/Fade';
import FadeVariants from '../variants/FadeVariants';
import MenuDialog from './MenuDialog';
import { MenuModel } from '../models/MenuModel';

const MenuItemStyle = styled(Card)(()=>({
    width:"calc(350px - 20px)",
    // width:"calc(95% - 20px)",
    // width:"350px",
    // maxWidth:"95%",
    // height:"315px",
    padding:"10px",
    borderRadius:"10px",
    display:"flex",
    // backgroundColor:"red",
}));
const MenuItemName = styled(Typography)(()=>({
    fontFamily:"PoppinsExtraBold, sans-serif !important",
    fontSize:"1.2em"
}));
const MenuItemDesc = styled(Typography)(()=>({
    fontFamily:"PoppinsLight, sans-serif !important",
    fontSize:"0.9em",
    margin:"5px 0px 10px 0px",
    // width:"85%"

}));
const MenuItemPrice = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"#CC1B1B",
    fontSize:"0.95em",
    // margin:"5px 0px 20px 0px"

}));

interface Props { 
    image: string,
    id: number,
    nom: string,
    description: string,
    prix: number,
    cliqFunc?: Function,
    // menu: MenuModel,
    // stateInit: boolean,
    // stateClose: ()=>void,
    // cliqFunc?: Function
}

function MenuPageItem({image, id, nom, description, prix, cliqFunc}:Props) {
    return (
        <>
        <Fade variants={FadeVariants({durationIn: 1}).in}>
            <MenuItemStyle key={id} onClick={()=> {if (cliqFunc !== null ){cliqFunc!()}}}>
                <CardMedia
                sx={{borderRadius:"10px",  width:155, objectFit:"cover"}}
                component="img"
                // height="75"
                image={image}
                alt="green iguana"
                />
                <Box>
                    <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                        <MenuItemName>{nom}</MenuItemName>
                        <MenuItemDesc>{description}</MenuItemDesc>
                        <MenuItemPrice>{prix}$</MenuItemPrice>
                        {/* <MyButtonBlack text='Voir Details'/> */}
                    </CardContent>
                </Box>
            </MenuItemStyle>
        </Fade>
        {/* <MenuDialog menu={item} stateInit={open} stateClose={() => setOpen(false)} /> */}

        </>
    );
}

export default MenuPageItem;