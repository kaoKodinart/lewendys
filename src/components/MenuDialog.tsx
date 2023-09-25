import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MenuModel } from '../models/MenuModel';

interface Props {
    menu: MenuModel,
    stateInit: boolean,
    stateClose: ()=>void,

}

function MenuDialog({menu, stateInit, stateClose}: Props) {

    return (
        <Dialog open={stateInit} onClose={stateClose}>
            <DialogTitle>Détails du plat de {menu.nomMenu}</DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>
                <Button onClick={stateClose}>Fermer</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MenuDialog;