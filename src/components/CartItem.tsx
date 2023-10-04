import { Paper, styled } from "@mui/material";
import { MenuModel } from "../models/MenuModel";
import { PanierItemModel } from "../models/PanierItemModel";


const CartItemStyle = styled ("div")(()=>({
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

interface Props {
    itemModel: PanierItemModel
}
function CartItem({itemModel}: Props) {
    return (
        <CartItemStyle>
            <CartItemStyle>
                {itemModel.selectedMenu.nomMenu}
                {itemModel.selectedMenu.prix!}
                <ul>
                    {itemModel.variation.map((e, index) => (
                        <li>
                            <div>{e.parent}</div>
                            <ul>
                                {e.nomOption}
                            </ul>
                        </li>
                    ))}
                </ul>
                {itemModel.prixFinal}
            </CartItemStyle>
        </CartItemStyle>
    );
}

export default CartItem;