import { Avatar, Box, Card, IconButton, List, ListItem, Paper, Typography, styled } from "@mui/material";
import { MenuModel } from "../models/MenuModel";
import { PanierItemModel } from "../models/PanierItemModel";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import { PROJECT_COLORS } from "../common/ProjectConfig";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { useAppDispatch } from "../redux/store";
import { deletePanierItem } from "../redux/slices/Plats";


const CartItemStyle = styled (Card)(({theme})=>({
    width:"calc(95% - 40px)",
    display:"flex",
    padding:"20px",
    position:"relative",
    // minHeight:"300px",
    [theme.breakpoints.down('md')]: {
        flexDirection:"column",
        width:"calc(98% - 40px)",
       },
    [theme.breakpoints.down('sm')]: {
        width:"calc(100% - 40px)",
       },
//     width:"90%",
//     minHeight:"200px",
//     display:"flex",
//     flexDirection:"row",
//     alignItems:"center",
//     justifyContent:"flex-start",
// // padding:"30px 0px 30px 0px",
//     backgroundColor:"#F3F5FA",
//     // border:"1px solid #DDDFE3",
//     // justifyContent:"space-evenly",
//     borderRadius:"5px",

}))

const MenuItemImg = styled("img")(({theme})=> ({
    width: 175,
    height:175,
    borderRadius:"10px",
    objectFit:"cover",
    // backgroundColor:"green",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"200px",
        // borderRadius:"50px",
       },
}))

const ContentBox = styled(Box)(({theme})=> ({
    margin:"0px 0px 0px 10px",
    [theme.breakpoints.down('md')]: {
        margin:"10px 0px 0px 0px",
       },
}))

const CircularPhotoContainer = styled (Box)(()=>({
    // width:"200px",
    minHeight:"200px",
    marginBottom:"10px",
    // backgroundColor:"#eee",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // borderRadius:"50%",
    // border:"1px dashed blue"
 
 }))

 const CartItemName = styled(Typography)(()=>({
    fontFamily:"PoppinsExtraBold, sans-serif !important",
    fontSize:"1.2em",
}));
const CartItemDesc = styled(Typography)(()=>({
    fontFamily:"PoppinsLight, sans-serif !important",
    fontSize:"1em",
    // margin:"5px 0px 10px 0px",

}));
const CartItemPrice = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"#CC1B1B",
    fontSize:"1.3em",
    position:"absolute",
    right:10,
    bottom:10,

}));
const DeleteButton = styled(IconButton)(()=>({
    position:"absolute",
    right:10,
    top: 10,
    color: PROJECT_COLORS.CofeeDark
}));

const InfoPart = styled("div")(()=>({
    marginLeft:"10px"
}));

interface Props {
    itemModel: PanierItemModel
}
function CartItem({itemModel}: Props) {
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(1);

    const deleteItem = (plat: PanierItemModel) => {
        dispatch(deletePanierItem(plat))
      };

    return (
        <CartItemStyle>
            {/* <MenuItemImg src={itemModel.selectedMenu.image}/> */}
            <MenuItemImg src={`http://localhost:8000/api/images/${itemModel.selectedMenu.image}`}/>
            {/* <CircularPhotoContainer>
                <Avatar sx={{ width: 175, height: 175 }}  src={itemModel.selectedMenu.image} variant="rounded"/>
            </CircularPhotoContainer> */}
            <ContentBox>
                <CartItemName>{itemModel.selectedMenu.nomMenu}- {itemModel.selectedMenu.prix}$</CartItemName>
                    
                    {/* {itemModel.selectedMenu.prix!} */}
                    <List disablePadding>
                        {itemModel.variation.map((e, index) => (
                            <ListItem >
                                <div><CartItemDesc>{e.parent}({e.nomOption})-{e.prix}$</CartItemDesc></div>
                            </ListItem>
                        ))}
                    </List>
                    <QuantitySelector initialQuantity={quantity} minQuantity={0} maxQuantity={10} onChang={(quantity: number) => setQuantity(quantity)}/>
                    <CartItemPrice>
                        {itemModel.prixFinal}$
                    </CartItemPrice>
                    <DeleteButton onClick={() => deleteItem(itemModel)}>
                        <DeleteForeverOutlined/>
                    </DeleteButton>
            </ContentBox>
        </CartItemStyle>
    );
}

export default CartItem;

