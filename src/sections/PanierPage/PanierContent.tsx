import { Grid, styled } from '@mui/material';
import SectionStyle from '../../Styles/SectionStyle';
import { useState } from 'react';
import { RootState, useAppSelector } from '../../redux/store';
import MenuPageItem from '../../components/MenuPageItem';
import CartTable from '../../components/CartTable';

const PanierContentStyle = styled(SectionStyle)(({theme})=> ({
    minHeight:"50vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 8vw)",
        padding:"75px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",    
    },
}))

function PanierContent() {
    const panier = useAppSelector((state: RootState) => state.plats.plats);


    return (
        <PanierContentStyle>
            <CartTable/>
            <Grid container>
                {
                    panier.map((item, index) => (
                        <Grid item xs>
                            <MenuPageItem image={item.image} id={item.uid} nom={item.nomMenu} description={item.description} prix={item.prix} />
                        </Grid>
                    )
                )}
            </Grid>
        </PanierContentStyle>
    );
}

export default PanierContent;