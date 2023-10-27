import { Avatar, Box, Card, IconButton, List, ListItem, Paper, Typography, styled } from "@mui/material";
import { MenuModel } from "../models/MenuModel";
import { PanierItemModel } from "../models/PanierItemModel";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { useAppDispatch } from "../redux/store";
import { deletePanierItem } from "../redux/slices/Plats";

const MenuItemStyle = styled(Card)(({theme})=> ({
    // minWidth:"300px",
    width:"calc(100% - 40px)",
    display:"flex",
    padding:"20px",
    // minHeight:"300px",
    [theme.breakpoints.down('md')]: {
        flexDirection:"column",
        width:"calc(98% - 40px)",
       },
    [theme.breakpoints.down('sm')]: {
        width:"calc(100% - 40px)",
       },
}))

const MenuItemImg = styled("img")(({theme})=> ({
    width: 175,
    height:225,
    borderRadius:"10px",
    objectFit:"cover",
    // backgroundColor:"green",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        // borderRadius:"50px",
        height:"200px",
       },
}))
const MenuItemTitle = styled(Typography)(({theme})=> ({
    fontFamily:"HelveticaBold, sans-serif !important",
    fontSize:"2.2em",
    lineHeight:"0.8em",
    [theme.breakpoints.down('sm')]: {
       },
}))
const MenuItemPrice = styled(Typography)(({theme})=> ({
    color: PROJECT_COLORS.Yellow,
    fontSize:"2.1em",
    // lineHeight:"1em",
    fontFamily:"HelveticaBold, sans-serif !important",
    [theme.breakpoints.down('sm')]: {
       },
}))
const MenuItemListItem = styled(Typography)(({theme})=> ({
    fontFamily:"RalewayMedium, sans-serif !important",
    fontSize:"1.0em",
    [theme.breakpoints.down('sm')]: {
       },
}))
const ContentBox = styled(Box)(({theme})=> ({
    margin:"0px 0px 0px 10px",
    [theme.breakpoints.down('md')]: {
        margin:"10px 0px 0px 0px",
       },
}))

const CartItemDesc = styled(Typography)(()=>({
    fontFamily:"PoppinsLight, sans-serif !important",
    fontSize:"1em",
    // margin:"5px 0px 10px 0px",

}));

interface Props {
    itemModel: PanierItemModel
}

function PanierItem({itemModel}: Props) {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const deleteItem = (plat: PanierItemModel) => {
        dispatch(deletePanierItem(plat))
      };
    return (
        <MenuItemStyle>
                <MenuItemImg src={itemModel.selectedMenu.image}/>
                <Box>
                    <ContentBox>
                        <MenuItemTitle>{itemModel.selectedMenu.nomMenu}- {itemModel.selectedMenu.prix}</MenuItemTitle>
                        {/* <MenuItemPrice>27,50£</MenuItemPrice> */}
                        <List>
                        {itemModel.variation.map((e, index) => (
                            <ListItem >
                                <div><CartItemDesc>{e.parent}({e.nomOption})-{e.prix}$</CartItemDesc></div>
                            </ListItem>
                        ))}
                        </List>
                    </ContentBox>
                </Box>
        </MenuItemStyle>
    );
}

export default PanierItem;