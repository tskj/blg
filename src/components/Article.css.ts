import { style, globalStyle } from '@vanilla-extract/css';

export const articleStyle = style({});

globalStyle(`${articleStyle} h1`, {
  fontFamily: 'sans-serif',
});
