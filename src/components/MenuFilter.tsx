import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Typography, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { menuItems } from '../common/Data';
import { PROJECT_COLORS } from '../common/ProjectConfig';
import MenuPageItem from './MenuPageItem';
import MenuDialog from './MenuDialog';

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
    const [cart, setCart] = useState([]);

    // const addToCart = (item: any) => {
    //     // Créez une copie du panier actuel et ajoutez le plat sélectionné
    //     setCart([...cart, item]);
    //     // Mettez à jour l'état du panier avec la nouvelle copie
    //   };
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    const categories = Array.from(new Set(menuItems.map((item) => item.categorie)));
    const firstCategoryButtonRef = useRef<HTMLButtonElement | null>(null);


    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
      };

      useEffect(() => {
        if (menuItems.length > 0) {
          setSelectedCategory(menuItems[0].categorie);
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

      const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({});

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
            .filter((item) => selectedCategory === null || item.categorie === selectedCategory)
            .map((item) => (
                <Grid  key={item.uid} xs sx={{display:"grid", placeItems:"center"}}>
                    <MenuPageItem  image={item.image} id={item.uid} nom={item.nomMenu} description={item.description} prix={0} cliqFunc={() => handleOpenDialog(item)} />
                    <MenuDialog menu={item} stateInit={open} stateClose={() => setOpen(false)} />
                    {/* <MenuDialog menu={item} stateInit={modalStates[item.uid]} stateClose={() => setOpen(false)} /> */}
                </Grid>
            ))
            
        }
            </Grid>
            {/* <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Détails du plat</DialogTitle>
                <DialogContent>
                    {selectedDish && (
                    <>

                    </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Fermer</Button>
                </DialogActions>
            </Dialog> */}
        </MenuFilterContainer>
    );
}

export default MenuFilter;