import { Button, SxProps, Typography, styled } from '@mui/material';
import { PROJECT_COLORS } from '../common/ProjectConfig';
import { Link } from 'react-router-dom';

const MyButtonBlackStyle = styled(Button)(()=>({
    backgroundColor: PROJECT_COLORS.Or,
    borderRadius:"50px",
    padding:"10px",
    color:"black",
    minWidth:"75px",
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
    path? : string,
}

function MyButtonBlack({text, sx={}, path}: Props) {
    return (
        <Link to={path!}>
            <MyButtonBlackStyle sx={{...sx}}>
                <MyButtonBlackText>
                {text}
                </MyButtonBlackText>
            </MyButtonBlackStyle>
        </Link>
    );
}

export default MyButtonBlack;