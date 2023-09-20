import { Button, SxProps, Typography, styled } from '@mui/material';
import { PROJECT_COLORS } from '../common/ProjectConfig';

const MyButtonBlackStyle = styled(Button)(()=>({
    backgroundColor: PROJECT_COLORS.Or,
    borderRadius:"50px",
    padding:"10px",
    color:"black",
    ':hover':{
        backgroundColor: PROJECT_COLORS.Black,
        // color:"white",
    }
}));

const MyButtonBlackText = styled(Typography)(()=>({
    fontWeight: 700,
    // fontFamily:"PoppinsMedium, sans-serif !important",
    color:"white",
    fontSize:"1em",
    textTransform:"capitalize"
}));

interface Props {
    text: string,
    sx? : SxProps,
}

function MyButtonBlack({text, sx={}}: Props) {
    return (
        <MyButtonBlackStyle sx={{...sx}}>
            <MyButtonBlackText>
            {text}
            </MyButtonBlackText>
        </MyButtonBlackStyle>
    );
}

export default MyButtonBlack;