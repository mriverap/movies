import React, {createContext} from 'react';

type ImageColors = {
  primary: string | undefined;
  secondary: string | undefined;
};

type ContextProps = {
  currentColors: ImageColors;
  previousColors: ImageColors;
  updateCurrentColors: (colors: ImageColors) => void;
  updatePreviousColors: (colors: ImageColors) => void;
};

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [current, setCurrent] = React.useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [previous, setPrevious] = React.useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const updateCurrent = (colors: ImageColors) => {
    setCurrent(colors);
  };
  const updatePrevious = (colors: ImageColors) => {
    setPrevious(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        currentColors: current,
        previousColors: previous,
        updateCurrentColors: updateCurrent,
        updatePreviousColors: updatePrevious,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
