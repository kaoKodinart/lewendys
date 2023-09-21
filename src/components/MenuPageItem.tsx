import { Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import React from 'react';
import Fade from '../animations/Fade';
import FadeVariants from '../variants/FadeVariants';

const MenuItemStyle = styled(Card)(()=>({
    // width:"95%",
    // width:"275px",
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
    fontSize:"1em",
    margin:"5px 0px 10px 0px",

}));
const MenuItemPrice = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"#CC1B1B",
    fontSize:"0.95em"

}));

interface Props { 
    image: string,
    id: number,
    nom: string,
    description: string,
    prix: string,
}

function MenuPageItem({image, id, nom, description, prix}:Props) {
    return (
        <Fade variants={FadeVariants({durationIn: 1}).in}>
            <MenuItemStyle key={id}>
                <CardMedia
                sx={{borderRadius:"10px", height:"200px", width:"50%", objectFit:"cover"}}
                component="img"
                // height="75"
                image={image}
                alt="green iguana"
                />
                <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <MenuItemName>{nom}</MenuItemName>
                    <MenuItemDesc>{description}</MenuItemDesc>
                    <MenuItemPrice>{prix}</MenuItemPrice>
                </CardContent>
            </MenuItemStyle>
        </Fade>
    );
}

export default MenuPageItem;