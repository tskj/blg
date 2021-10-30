export const fontFamily_heading = {
  fontFamily: "'Catamaran', sans-serif",
  fontSize: '32px',
  lineHeight: 1,
};

const regularFontName = 'Karla';
const regularFontSize = '16px';

export const fontFamily_regularText = {
  fontFamily: `'${regularFontName}', sans-serif`,
  fontSize: regularFontSize,
  fontWeight: 200,
};

export const fontFamily_italicText = {
  ...fontFamily_regularText,
  fontStyle: 'italic',
};

export const fontFamily_boldText = {
  fontFamily: `'${regularFontName}', sans-serif`,
  fontSize: regularFontSize,
  fontWeight: 400,
  lineHeight: 1,
};

export const fontFamily_boldItalicText = {
  ...fontFamily_boldText,
  fontStyle: 'italic',
};

export const fontFamily_subHeading = {
  fontFamily: `'${regularFontName}', sans-serif`,
  fontSize: regularFontSize,
  fontWeight: 800,
};

export const fontFamily_italicSubheading = {
  ...fontFamily_subHeading,
  fontStyle: 'italic',
};
