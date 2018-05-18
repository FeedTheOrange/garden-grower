// these sizes are arbitrary and you can set them to whatever you wish
import { css, injectGlobal } from 'styled-components';

// global styles
export default () => injectGlobal(`
  body {
    box-sizing: border-box;
    font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0
  }
`);

// Helpers for accessability purposes
export const a11y = {
  srOnly: () => css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
   `,
  srOnlyFocus: () => css`
    &:active, &:focus {
      position: static;
      width: auto;
      height: auto;
      overflow: visible;
      clip: auto;
      white-space: normal;
      clip-path: none;
    }
   `,
  focus: () => css`
    &:active, &:focus {
      outline: 1px dashed #333;
      outline-offset: 2px;
      text-decoration: underline;
    }
   `,
};

// media queries
const sizes = {
  mobile: 1000,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  return {
    ...accumulator,
    [label]: (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `,
  };
}, {});

