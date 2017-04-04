import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colors = {
  red: '#d73c4d',
  redBold: '#d7503c',
  green: '#5eebb8',
  blue: '#3cadd7',
  yellow: '#ffe792',
  orange: '#ffb454'
}

const colorSet: IColorSet = {
  base: {
    background: '#0e151b',
    foreground: '#efefef',
    color1: colors.red,
    color2: colors.blue,
    color3: colors.yellow,
    color4: colors.green,
  },
  syntax: {
    identifier: colors.red,
    string: colors.yellow,
    number: colors.yellow,
    keyword: colors.redBold,
    boolean: colors.yellow,
    function: colors.blue,
    functionCall: colors.blue,
    storage: colors.blue,
    comment: '#515c68',
    class: colors.blue,
    classMember: colors.blue,
    type: colors.green,
    cssClass: colors.blue,
  //   cssId: colors.red,1
    cssTag: colors.redBold,
  //   markdownQuote: '#c0c0c0'
  },
  ui: {
    cursor: '#ffe792',
  //   guide: '#263040',
  //   invisibles: '#263040',
  //   rangeHighlight: '#263040',
  //   // Bright red 50% opacity
  //   findMatchHighlight: '#cb606080',
  //   // Brighter red 50% opacity
  //   currentFindMatchHighlight: '#ff777780',
  //   selection: '#153958',
  //   // Blue 50% opacity
  //   selectionHighlight: '#2b74b380',
  //   // White with ~10% opacity
  //   wordHighlight: '#ffffff18',
  //   wordHighlightStrong: '#ffffff18',
  //   activeLinkForeground: colors.blue
  },
  // terminal: {
  //   black: '#666666',
  //   red: colors.red,
  //   green: colors.green,
  //   yellow: colors.yellow,
  //   blue: colors.blue,
  //   magenta: colors.pink,
  //   cyan: colors.teal,
  //   white: '#efefef',
  //   brightBlack: '#666666',
  //   brightRed: colors.red,
  //   brightGreen: colors.green,
  //   brightYellow: colors.yellow,
  //   brightBlue: colors.blue,
  //   brightMagenta: colors.pink,
  //   brightCyan: colors.teal,
  //   brightWhite: '#efefef'
  // }
};

generateTheme('Sapphire', colorSet, path.join(__dirname, 'theme.json'));
