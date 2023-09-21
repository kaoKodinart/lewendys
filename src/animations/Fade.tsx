import { SxProps, styled } from '@mui/material';
import { Transition, Variants, motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
    children: ReactNode,
    variants?: Variants,
    transition?: Transition,
    sxFade?: SxProps,
  };

  const FadeContent = styled("div")(({theme})=> ({
      // display:"flex",
      // justifyContent:"center",
      // alignItems:"center",
    [theme.breakpoints.down('md')]: {
        // fontSize:"1.8rem",
        },
}))

function Fade({ children, variants, transition, sxFade={} }: Props) {

    const controller = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref);

    useEffect(() => {
        if (!variants) return;
        if (isInView) {
          controller.start(Object.keys(variants)[1]);
        } else {
          controller.start(Object.keys(variants)[0]);
        }
        // eslint-disable-next-line
      },[isInView, controller])
    return (
        <motion.div ref={ref} initial={variants ? Object.keys(variants)[0] : false} animate={controller} variants={variants} transition={transition} >
          <FadeContent sx={{...sxFade}}>
            {children}
          </FadeContent>
      </motion.div>
    );
}

export default Fade;