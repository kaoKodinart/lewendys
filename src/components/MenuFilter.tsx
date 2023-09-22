import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Typography, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { menuItems } from '../common/Data';
import { PROJECT_COLORS } from '../common/ProjectConfig';
import MenuPageItem from './MenuPageItem';

const MenuFilterContainer = styled("div")(()=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
}));
const MenuFilterButton = styled(Button)(()=>({
    color:"white",
    backgroundColor: PROJECT_COLORS.Or,
    // border:"2px solid #F8C291",
    '&:focus': {
        backgroundColor: '#101010', // Changer la couleur de fond en rouge au focus
        outline: 'none', // Supprimer la bordure par défaut du focus
      },
}));
const MenuFilterButtonText = styled(Typography)(({theme})=>({
    // fontWeight:"bold",
    [theme.breakpoints.down('sm')]: {
        fontSize:'0.8em'
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));

function MenuFilter() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    const categories = Array.from(new Set(menuItems.map((item) => item.category)));
    const firstCategoryButtonRef = useRef<HTMLButtonElement | null>(null);


    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
      };

      useEffect(() => {
        if (menuItems.length > 0) {
          setSelectedCategory(menuItems[0].category);
        }

        if (firstCategoryButtonRef.current) {
            firstCategoryButtonRef.current.focus();
          }
      }, []);




      const [open, setOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

    const handleOpenDialog = (dish : any) => {
        setSelectedDish(dish);
        setOpen(true);
      };

    return (
        <MenuFilterContainer>
            <Stack direction={"row"} spacing={2} sx={{mb:3}}>
            {categories.map((category, index) => (
                <MenuFilterButton key={category} 
                                onClick={() => handleCategoryClick(category)}
                                ref={index === 0 ? firstCategoryButtonRef : null}
                                >
                    <MenuFilterButtonText>
                        {category}
                    </MenuFilterButtonText>
                </MenuFilterButton>
            ))}
            </Stack>
            <Grid container spacing={1}>
            {menuItems
            .filter((item) => selectedCategory === null || item.category === selectedCategory)
            .map((item) => (
                <Grid item key={item.id} xs sx={{display:"grid", placeItems:"center"}}>
                    <MenuPageItem  image={item.image} id={item.id} nom={item.name} description={item.desc} prix={item.price} cliqFunc={() => handleOpenDialog(item)} />
                </Grid>
            ))}
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Détails du plat</DialogTitle>
                <DialogContent>
                    {selectedDish && (
                    <>
                        
                        {/* Affichez d'autres informations du plat ici */}
                    </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Fermer</Button>
                </DialogActions>
            </Dialog>
        </MenuFilterContainer>
    );
}

export default MenuFilter;