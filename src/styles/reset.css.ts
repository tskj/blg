import { globalStyle } from '@vanilla-extract/css';
import { backgroundColor, color } from './global.css';

globalStyle('body', {
  margin: 0,
  backgroundColor,
  color,
});
