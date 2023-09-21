import { Button, Grid, Stack, Typography, styled } from '@mui/material';
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
            <Grid container spacing={3}>
            {menuItems
            .filter((item) => selectedCategory === null || item.category === selectedCategory)
            .map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} sx={{display:"grid", placeItems:"center"}}>
                    <MenuPageItem image={item.image} id={item.id} nom={item.name} description={item.desc} prix={item.price} />
                </Grid>
            ))}
            </Grid>
        </MenuFilterContainer>
    );
}

export default MenuFilter;