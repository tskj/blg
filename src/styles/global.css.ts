import { globalStyle, createVar } from '@vanilla-extract/css';

export const theme = {
  text: createVar(),
  background: createVar(),
  attention: createVar(),
};

globalStyle(':root', {
  vars: {
    [theme.text]: '#0f0f0f',
    [theme.background]: '#ddd',
    [theme.attention]: '#eba523',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [theme.text]: '#fff',
        [theme.background]: '#191e24',
        [theme.attention]: '#e69915',
      },
    },
  },
});
