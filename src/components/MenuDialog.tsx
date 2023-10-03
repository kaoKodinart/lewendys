import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup, Typography, styled } from '@mui/material';
import { MenuModel } from '../models/MenuModel';
import { useState } from 'react';
import { VariationModel } from '../models/VariationsModel';
import { OptionModel } from '../models/OptionModel';

interface Props {
    menu: MenuModel,
    stateInit: boolean,
    stateClose: ()=>void,

}

const VariationName = styled (Typography)(()=>({
 
 }))
const VariationPrice = styled (Typography)(()=>({
 
 }))

function MenuDialog({menu, stateInit, stateClose}: Props) {

    const [menuPrixFinal, setMenuPrixFinal] = useState(menu.prix);
    const [selectedOptions, setSelectedOptions] = useState<OptionModel[]>([]);

    const handleOptionChange = (option: OptionModel) => {
        // Vérifier si l'option est déjà sélectionnée
        // const isSelected = selectedOptions.includes(option);
        const isSelected = selectedOptions.map(one => one.parent).includes(option.parent);
        
    
        if (!isSelected) {
          setSelectedOptions((prevSelected) => [...prevSelected, option]);
        }else {
          const optionList = [option, ...(selectedOptions.filter(one => one.parent != option.parent))];
          setSelectedOptions(optionList);
        }
      };
    const handleChanges = (optionPrix: number) => {
        setMenuPrixFinal(menu.prix + optionPrix)
      };

      const calculateTotalPrice = () => {
        let totalPrice = menu.prix;
    
        // Ajouter le prix des options sélectionnées
        selectedOptions.forEach((option) => {
          totalPrice += option.prix;
        });
    
        return totalPrice;
      };
      

    return (
        <Dialog open={stateInit} onClose={stateClose}>
            <DialogTitle>Détails du plat de {menu.nomMenu}-{menuPrixFinal}$</DialogTitle>
            <DialogContent>
                {menu.variations.map((e, index) => (
                    <div>
                        <VariationName>
                            {e.nomVariation}
                        <RadioGroup>
                            {e.options.map((o, index) => (
                                <div style={{display:"flex", justifyContent:"start", alignItems:"center"}}>
                                    <FormControlLabel value={o.nomOption} control={<Radio />} label={o.nomOption}  onChange={() => handleOptionChange(o)}/>
                                    {/* <FormControlLabel value={o.nomOption} control={<Radio />} label={o.nomOption}  onChange={() => handleChanges(o.prix)}/> */}
                                    <VariationPrice>{o.prix}$</VariationPrice>
                                </div>
                            ))}
                        </RadioGroup>
                        </VariationName>
                    </div>
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={stateClose}>Fermer</Button>
                <Typography>Prix Total: {calculateTotalPrice()}$</Typography>

            </DialogActions>
        </Dialog>
    );
}

export default MenuDialog;