import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";

const PageBaseStyle = styled("div")(() => ({

}));
interface Props {
    children: React.ReactNode,
    title: string,
    sx?: SxProps,
    // descripti
}

function Page({children, title = "", sx = {}}: Props) {
    const finalTitle = title === "" ? " WENDY'S " : title + " | WENDY'S";

    return (
        <Fragment>
            <Helmet>
                <title>{finalTitle}</title>
                <meta name=""/>
            </Helmet>
            <PageBaseStyle sx={{ ...sx }}>
                {children}
            </PageBaseStyle>
        </Fragment>
    );
}

export default Page;