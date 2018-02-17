import Objects from 'wasabi-common/lib/types/Objects';

export enum Color {
  primary = 'isPrimary',
  info = 'isInfo',
  success = 'isSuccess',
  warning = 'isWarning',
  danger = 'isDanger',
  link = 'isLink',
  white = 'isWhite',
  light = 'isLight',
  dark = 'isDark',
  black = 'isBlack'
}


export const colorValues = Objects.values(Color);
