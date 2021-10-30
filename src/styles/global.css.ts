import { globalStyle, createVar } from '@vanilla-extract/css';

export const theme = {
  text: createVar(),
  background: createVar(),
  secondary: createVar(),
  tertiary: createVar(),
  quadriary: createVar(),
  attention: createVar(),
  marker: createVar(),
  contrast: createVar(),
  secondaryContrast: createVar(),
};

globalStyle(':root', {
  vars: {
    [theme.text]: '#0f0f0f',
    [theme.background]: '#ddd',
    [theme.secondary]: '#d2d4cd',
    [theme.attention]: '#eda124',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [theme.text]: '#fff',
        [theme.background]: '#1e2630',
        [theme.secondary]: '#303e42',
        [theme.tertiary]: '#405c5c',
        [theme.quadriary]: '#39524d',
        [theme.attention]: '#d1841f',
        [theme.marker]: '#db544f',
        [theme.contrast]: '#3492b0',
        [theme.secondaryContrast]: '#007b85',
      },
    },
  },
});
