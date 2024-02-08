import { Button, SxProps, Typography, styled } from '@mui/material';
import { PROJECT_COLORS } from '../common/ProjectConfig';

const MyButtonCoffeStyle = styled(Button)(()=>({
    backgroundColor: PROJECT_COLORS.CofeeDark,
    borderRadius:"50px",
    padding:"10px",
    color:"black",
    ':hover':{
        backgroundColor: PROJECT_COLORS.Black,
        // color:"white",
    }
}));

const MyButtonCoffeText = styled(Typography)(()=>({
    fontFamily:"PoppinsMedium, sans-serif !important",
    color:"white",
    fontSize:"1em",
    textTransform:"capitalize"
}));

interface Props {
    text: string,
    sx? : SxProps,
    cliqFunc: Function;
}

function MyButtonCoffe({text, sx={}, cliqFunc}: Props) {
    return (
        <MyButtonCoffeStyle sx={{...sx}} onClick={()=> cliqFunc()}>
            <MyButtonCoffeText>
            {text}
            </MyButtonCoffeText>
        </MyButtonCoffeStyle>
    );
}

export default MyButtonCoffe;