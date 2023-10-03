import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

function CartTable() {
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
        </TableContainer >
    );
}

export default CartTable;