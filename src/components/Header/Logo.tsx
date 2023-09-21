import { Fragment } from "react";
import { styled, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { USER_PAGES } from "../../routes/path";

// const Image = styled("img")(() => ({
//   objectFit: "contain",
//   // backgroundColor:"blueviolet",

// }));
const LogoText = styled(Typography)(() => ({
  color: "black",
  fontSize:"1.2em",
  fontFamily:"PoppinsBold, sans-serif !important",

}));
interface Props {
  disableLink?: boolean,
  sx? : SxProps,
};

function Logo({disableLink = false, sx = {}}: Props) {

  const logo = (
    <Fragment>
      {/* <Image sx={{width: 125, height: 125, ...sx}} src="assets/images/logo.png" alt="Logo" width="50%" height="50%"/> */}
      <LogoText sx={{...sx}}>Le Wendy'S</LogoText>
    </Fragment>
  );

  const logoStyle = {
    // backgroundColor:"red",
    textDecoration:"none",

  }

  if (disableLink) {
    return logo;
  }

  return <Link to={USER_PAGES.home} style={logoStyle}>{logo}</Link>;
}

export default Logo;
