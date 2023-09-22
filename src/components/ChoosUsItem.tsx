import { Box, Typography, styled } from '@mui/material';

const ChoosUsItemStyle = styled(Box)(({theme}) => ({
    
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
  
    },
}));

const ChooseUsItemImg = styled("img")(({theme}) => ({
    
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));
const ChooseUsItemTitle = styled(Typography)(({theme}) => ({
    fontSize:"1.2em",
    fontFamily:"Cambria, sans-serif !important",
    fontWeight: 700,
    margin:"3px 0px 5px 0px",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));
const ChooseUsItemDesc = styled(Typography)(({theme}) => ({
    fontSize:"0.9em",
    fontFamily:"PoppinsRegular, sans-serif !important",
    width:"92%",
    [theme.breakpoints.down('lg')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));

function ChoosUsItem() {
    return (
        <ChoosUsItemStyle>
            <ChooseUsItemImg src='/src/assets/images/choose_us_check.png'/>
            <ChooseUsItemTitle>Qualité supérieure</ChooseUsItemTitle>
            <ChooseUsItemDesc>Lorem ipsum dolor sit amet consectetur. Pulvinar sollicitudin integer facilisis lorem blandit arcu urna viverra.</ChooseUsItemDesc>
        </ChoosUsItemStyle>
    );
}

export default ChoosUsItem;