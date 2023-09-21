interface Props {
  duration? : number,
  durationIn? : number,
  durationOut? : number,
  ease? : Array<number>,
  easeIn? : Array<number>,
  easeOut? : Array<number>,
}

export const varTranHover = ({duration =  0.32, ease = [0.43, 0.13, 0.23, 0.96]}: Props) => {
  return { duration, ease };
};

export const varTranEnter = ({durationIn =  0.32, easeIn = [0.43, 0.13, 0.23, 0.96]}: Props) => {
  const duration = durationIn;
  const ease = easeIn;

  return { duration, ease };
};

export const varTranExit = ({durationOut =  0.32, easeOut = [0.43, 0.13, 0.23, 0.96]}: Props) => {
  const duration = durationOut;
  const ease = easeOut;

  return { duration, ease };
};
