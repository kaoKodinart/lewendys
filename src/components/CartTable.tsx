import { Box, Grid, Typography, styled } from '@mui/material';
import { RootState, useAppSelector } from '../redux/store';
import CartItem from './CartItem';
import { PanierItemModel } from '../models/PanierItemModel';
import MyButtonCoffe from './MyButtonCoffe';
import { Link, useNavigate } from 'react-router-dom';
import { USER_PAGES } from '../routes/path';

const CartTableContent = styled(Box)(()=>({
    width:"100%",
    // backgroundColor:"cyan",
}));
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

const Entete = styled(Box)(()=>({
    width:"100%",
    display:"flex", 
    justifyContent:"space-between",
    borderBottom:"3px solid #B75D0B",
}));

const CartTablePrice = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    color:"#CC1B1B",
    fontSize:"1.3em",
}));
const CartTablePanier = styled(Typography)(()=>({
    fontFamily:"PoppinsBold, sans-serif !important",
    // color:"#CC1B1B",
    fontSize:"1.3em",
}));
const CartFoot = styled("div")(()=>({
    width:"100%",
    display:"flex",
    justifyContent:"flex-end",
}));

function CartTable() {
    const panier = useAppSelector((state: RootState) => state.plats.plats);
    const navigate = useNavigate();

    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);

    const validateCommand = ()=> {
        // console.log(userData);
        navigate(userData ? "/checkout" : "/login")
    }

    function calculateTotalPrice(panier: PanierItemModel[]) {
        let totalPrice = 0;
      
        // Parcourez le panier et ajoutez les prix finaux de chaque élément à totalPrice
        for (const item of panier) {
          totalPrice += item.prixFinal; // Assurez-vous que le nom de la propriété est correct
        }
      
        return totalPrice;
      }

    return (
        <CartTableContent>
                
            {/* <Grid container rowSpacing={3}> */}
                {panier.length === 0 ? (
                    <CartItemPricedf>
                        <CartItemPrice>Panier vide</CartItemPrice>
                    </CartItemPricedf>
                ) : (
                    <div style={{width:"100%"}}>
                        <Entete>
                            <CartTablePanier>Panier</CartTablePanier>
                            <CartTablePrice>{calculateTotalPrice(panier)}$</CartTablePrice>
                        </Entete>
                        <Grid container spacing={2}>
                        {
                            panier.map((e, index) => (
                                // <div style={{width:"100%"}}>
                                <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                                    <CartItem itemModel={e} />
                                </Grid>
                                // </div>
                            ))
                        }
                        </Grid>
                        <CartFoot>
                            {/* <Link to={USER_PAGES.checkout}> */}
                                <MyButtonCoffe text='Commander' cliqFunc={validateCommand}/>
                            {/* </Link> */}
                        </CartFoot>
                    </div>
                )
                }
            {/* </Grid> */}
        </CartTableContent>
    );
}

export default CartTable;