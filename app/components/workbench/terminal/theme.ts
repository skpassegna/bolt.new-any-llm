import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--ottodev-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--ottodev-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--ottodev-elements-terminal-textColor'),
    background: cssVar('--ottodev-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--ottodev-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--ottodev-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--ottodev-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--ottodev-elements-terminal-color-black'),
    red: cssVar('--ottodev-elements-terminal-color-red'),
    green: cssVar('--ottodev-elements-terminal-color-green'),
    yellow: cssVar('--ottodev-elements-terminal-color-yellow'),
    blue: cssVar('--ottodev-elements-terminal-color-blue'),
    magenta: cssVar('--ottodev-elements-terminal-color-magenta'),
    cyan: cssVar('--ottodev-elements-terminal-color-cyan'),
    white: cssVar('--ottodev-elements-terminal-color-white'),
    brightBlack: cssVar('--ottodev-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--ottodev-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--ottodev-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--ottodev-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--ottodev-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--ottodev-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--ottodev-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--ottodev-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
