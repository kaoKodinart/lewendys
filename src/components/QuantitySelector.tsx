import { Add, AddCircle, Minimize, Remove, RemoveCircle } from '@mui/icons-material';
import { Box, Button, IconButton, Input } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { PROJECT_COLORS } from '../common/ProjectConfig';

interface Props {
    initialQuantity: number,
    minQuantity: number,
    maxQuantity: number,
    onChang: Function,


}

function QuantitySelector({ initialQuantity, minQuantity, maxQuantity, onChang }: Props) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrease = () => {
        if (quantity < maxQuantity) {
          setQuantity(quantity + 1);
        //   onChang(quantity + 1);
        }
      };
    
      const handleDecrease = () => {
        if (quantity > minQuantity) {
          setQuantity(quantity - 1);
        //   onChang(quantity - 1);
        }
      };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Assurez-vous que la valeur est un nombre valide
        const newValue = parseInt(event.target.value, 10);
    
        // if (!isNaN(newValue) && newValue >= minQuantity && newValue <= maxQuantity) {
          setQuantity(newValue);
        //   onChang(newValue);S
        // }
      };
    return (
        <Box>
            <IconButton onClick={handleDecrease} size='small' sx={{color: PROJECT_COLORS.CofeeDark}} >
                <RemoveCircle/>
            </IconButton >
                <input style={{border:"none", width:"30px"}} type='number' value={quantity.toString()} onChange={handleInputChange}/>
            <IconButton onClick={handleIncrease} size='small' sx={{color: PROJECT_COLORS.CofeeDark}}>
                <AddCircle/>
            </IconButton>
            {/* <Button variant="contained" color="primary" onClick={handleIncrease}>
                +
            </Button>
            <Button variant="contained" color="primary" onClick={handleDecrease}>
                -
            </Button> */}
        </Box>
    );
}

export default QuantitySelector;