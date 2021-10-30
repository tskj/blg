import { style, globalStyle } from '@vanilla-extract/css';
import {
  fontFamily_boldItalicText,
  fontFamily_boldText,
  fontFamily_heading,
  fontFamily_italicText,
  fontFamily_regularText,
  fontFamily_subHeading,
} from '../styles/fonts.css';
import { theme } from '../styles/global.css';

export const articleStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '50px 0',
  width: '100vw',
});

const articleMaxWidth = '700px';
const articlePadding = '20px';

const articleJustification = {
  paddingLeft: articlePadding,
  paddingRight: articlePadding,
  width: '100vw',
  maxWidth: articleMaxWidth,
};

export const justify = style(articleJustification);

globalStyle(`${articleStyle} h1`, {
  ...fontFamily_heading,
  ...articleJustification,
});

globalStyle(`${articleStyle} p`, {
  ...fontFamily_regularText,
  ...articleJustification,
});

globalStyle(`${articleStyle} h2`, {
  ...fontFamily_subHeading,
  ...articleJustification,
});

export const byLine = style({ ...fontFamily_boldItalicText });
export const modifiedDate = style({ ...fontFamily_italicText, opacity: 0.7 });

export const note = style({
  ...fontFamily_boldText,
  backgroundColor: theme.attention,
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '5px',
  paddingTop: '10px',
  paddingBottom: '10px',
});

export const flex = style({ display: 'flex', alignItems: 'center' });
export const paddingRight = style({ paddingRight: '20px' });
