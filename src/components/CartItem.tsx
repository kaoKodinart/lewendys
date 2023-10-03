import { Paper, styled } from "@mui/material";
import { MenuModel } from "../models/MenuModel";


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
    itemModel: MenuModel
}
function CartItem({itemModel}: Props) {
    return (
        <CartItemStyle>
            <CartItemStyle>
                {itemModel.nomMenu}
                {itemModel.prix}
                <ul>
                    {itemModel.variations.map((e, index) => (
                        <li>
                            <div>{e.nomVariation}</div>
                            <ul>
                                {e.options.map((e, index) => (
                                    <li>{e.nomOption}-{e.prix}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </CartItemStyle>
        </CartItemStyle>
    );
}

export default CartItem;