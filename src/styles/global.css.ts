import { globalStyle, createVar } from '@vanilla-extract/css';

export const theme = {
  text: createVar(),
  background: createVar(),
};

globalStyle(':root', {
  vars: {
    [theme.text]: '#0f0f0f',
    [theme.background]: '#ddd',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [theme.text]: '#fff',
        [theme.background]: '#191e24',
      },
    },
  },
});
