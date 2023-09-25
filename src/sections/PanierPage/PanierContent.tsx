import { styled } from '@mui/material';
import SectionStyle from '../../Styles/SectionStyle';
import { useState } from 'react';

const PanierContentStyle = styled(SectionStyle)(({theme})=> ({
    minHeight:"50vh",
    // opacity:0.8,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"calc(100% - 8vw)",
        padding:"75px 4vw 75px 4vw",    
    },
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        width:"calc(100% - 4vw)",
        padding:"75px 2vw 75px 2vw",    
    },
}))

function PanierContent() {

    return (
        <PanierContentStyle>
            
        </PanierContentStyle>
    );
}

export default PanierContent;