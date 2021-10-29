import { style, globalStyle } from '@vanilla-extract/css';
import {
  fontFamily_boldItalicText,
  fontFamily_heading,
  fontFamily_italicText,
  fontFamily_regularText,
  fontFamily_subHeading,
} from '../styles/fonts.css';

export const articleStyle = style({
  position: 'relative',
  margin: '50px auto',
  padding: '0 20px',
  maxWidth: '700px',
});

globalStyle(`${articleStyle} h1`, {
  ...fontFamily_heading,
});

globalStyle(`${articleStyle} p`, {
  ...fontFamily_regularText,
});

globalStyle(`${articleStyle} h2`, {
  ...fontFamily_subHeading,
});

export const byLine = style({ ...fontFamily_boldItalicText });
export const modifiedDate = style({ ...fontFamily_italicText, opacity: 0.7 });
