import { globalStyle, createVar } from '@vanilla-extract/css';

export const theme = {
  text: createVar(),
  background: createVar(),
  attention: createVar(),
  secondary: createVar(),
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
        [theme.background]: '#1e2630',
        [theme.attention]: '#e69915',
        [theme.secondary]: '#344245',
      },
    },
  },
});
