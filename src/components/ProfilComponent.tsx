import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography, styled } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_COLORS } from '../common/ProjectConfig';

const MenuTxt = styled(Typography)(({theme}) => ({
    fontSize:"1.1em",
    fontFamily:"PoppinsRegular, sans-serif !important",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));

function ProfilComponent() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleOpenProfil = () => {
        navigate("/dashboard")
      setAnchorEl(null);
    };
    const navigate = useNavigate();

    const logout = () => {
        return new Promise<void>((resolve, reject) => {
            localStorage.removeItem("user");
            resolve(); // résoudre la promesse une fois que l'opération de suppression est terminée
          }).then(()=> {
            navigate("/")
          });
        // (localStorage.removeItem("user"));
    }

    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);
    const firstLetterOfName = userData.name.charAt(0).toUpperCase();


    return (
        <Box>
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{bgcolor:PROJECT_COLORS.CofeeDark, width: 38, height: 38}}>{firstLetterOfName}</Avatar>
          </IconButton>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleOpenProfil}>
          <Avatar /> 
          <MenuTxt>Profile</MenuTxt>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
        {/* <Divider /> */}
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <MenuTxt>Déconnexion</MenuTxt>
        </MenuItem>
      </Menu>
        </Box>
    );
}

export default ProfilComponent;