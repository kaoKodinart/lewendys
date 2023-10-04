import { Grid, Typography, styled } from '@mui/material';
import { RootState, useAppSelector } from '../redux/store';
import CartItem from './CartItem';

const CartItemPrice = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"#CC1B1B",
    fontSize:"1.3em",
}));
const CartItemPricedf = styled("div")(()=>({
    width:"100%",
    display:"grid", 
    placeItems:"center"
}));

function CartTable() {
    const panier = useAppSelector((state: RootState) => state.plats.plats);

    return (
        <Grid container rowSpacing={3}>
            {panier.length === 0 ? (
                <CartItemPricedf>
                    <CartItemPrice>Panier vide</CartItemPrice>
                </CartItemPricedf>
            ) : (
                panier.map((e, index) => (
                    <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                        <CartItem itemModel={e} />
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default CartTable;