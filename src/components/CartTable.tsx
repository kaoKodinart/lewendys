import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { RootState, useAppSelector } from '../redux/store';
import CartItem from './CartItem';

function CartTable() {
    const panier = useAppSelector((state: RootState) => state.plats.plats);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Plat
                        </TableCell>
                        <TableCell>
                            Title
                        </TableCell>
                        <TableCell>
                            Quantité
                        </TableCell>
                        <TableCell>
                            Prix en detail
                        </TableCell>
                        <TableCell>
                            Prix Total
                        </TableCell>
                        <TableCell>
                            Supprimer
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            {panier.map((e, index) => (
                <CartItem itemModel={e}/>
            ))}
        </TableContainer >
    );
}

export default CartTable;