import { styled, Toolbar } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { HeaderConfig } from "../common/HeaderConfig";
import useOffSetTop from "../hooks/useOffSetTop";

const HeaderAnimContainer = styled(Toolbar)(({ theme }) => ({
    position: "fixed",
    top: 0,
    // width: "calc(100% - 40px)",
    width: "100%",
    padding: "0px !important",
    paddingLeft: "40px !important",
    paddingRight: "40px !important",
    height: HeaderConfig.MAX_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backdropFilter: "blur(10px)",
    // backgroundColor: "rgba(1, 0, 66, 0.3)",
    backgroundColor:"transparent",
    transition: theme.transitions.create(["height", "boxShadow", "backgroundColor", "backdropFilter"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.down('md')]: {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        },
}));
interface Props {
    children: ReactNode,
}

function HeaderAnim({children}: Props) {
    const isOffset = useOffSetTop(HeaderConfig.HEIGHT);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
    
          if (prevScrollPos > currentScrollPos) {
            // Scrolling Up
            setPrevScrollPos(currentScrollPos);
          } else {
            // Scrolling Down
            setPrevScrollPos(currentScrollPos);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [prevScrollPos]);

      // const shouldShowHeader = prevScrollPos > window.scrollY;


    return (
        <HeaderAnimContainer sx={{...(isOffset && {backgroundColor:"white" ,  height: {md: HeaderConfig.HEIGHT}, boxShadow:  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" , })}}>
            {children}
        </HeaderAnimContainer>
    );
}

export default HeaderAnim;