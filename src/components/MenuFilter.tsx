import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Typography, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { menuItems } from '../common/Data';
import { PROJECT_COLORS } from '../common/ProjectConfig';
import MenuPageItem from './MenuPageItem';
import MenuDialog from './MenuDialog';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { addPanier } from '../redux/slices/Plats';
import { MenuItemModel } from '../models/MenuItemModel';
import { MenuModel } from '../models/MenuModel';
import { PanierItemModel } from '../models/PanierItemModel';
import { getMenus } from '../redux/slices/Menus';

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
    const dispatch = useAppDispatch();
    const menus = useAppSelector((state:RootState) => state.menus.menus);

    const [cart, setCart] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    const categories = Array.from(new Set(menus.map((item) => item.categorie)));
    const firstCategoryButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleAjouterAuPanier = (plat: PanierItemModel) => {
        // Dispatch de l'action addPanier avec le plat sélectionné
        dispatch(addPanier(plat));
      };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
      };

      useEffect(() => {

        dispatch(getMenus()).then((res) => console.log(res)).catch(error => {
            console.log(error);
            
          })
        if (menus.length > 0) {
          setSelectedCategory(menuItems[0].categorie);
        }

        if (firstCategoryButtonRef.current) {
            firstCategoryButtonRef.current.focus();
          }
      }, []);

        const [open, setOpen] = useState(false);

        
        const handleOpenDialog = (dish : any) => {
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
            {menus
            .filter((item) => selectedCategory === null || item.categorie === selectedCategory)
            .map((item) => (
                <Grid  key={item.uid} xs sx={{display:"grid", placeItems:"center"}}>
                    <MenuPageItem  image={item.image} id={item.uid} nom={item.nomMenu} description={item.description} prix={item.prix} cliqFunc={() => handleOpenDialog(item)} />
                    {/* <MenuPageItem  image={item.image} id={item.uid} nom={item.nomMenu} description={item.description} prix={item.prix} cliqFunc={() => handleAjouterAuPanier(item)} /> */}
                    <MenuDialog menu={item} stateInit={open} stateClose={() => setOpen(false)} />
                </Grid>
            ))  
        }
            </Grid>
        </MenuFilterContainer>
    );
}

export default MenuFilter;