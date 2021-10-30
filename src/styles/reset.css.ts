import { globalStyle } from '@vanilla-extract/css';
import { theme } from './global.css';

globalStyle('body', {
  margin: 0,
  backgroundColor: theme.background,
  color: theme.text,
});

globalStyle('*', {
  boxSizing: 'border-box',
});
