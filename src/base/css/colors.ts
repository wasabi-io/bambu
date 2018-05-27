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
    black = 'isBlack',
    text = 'isText',
}

export const colorValues = Objects.values(Color);

export enum TextColor {
    primary = 'hasTextPrimary',
    info = 'hasTextInfo',
    success = 'hasTextSuccess',
    warning = 'hasTextWarning',
    danger = 'hasTextDanger',
    link = 'hasTextLink',
    white = 'hasTextWhite',
    light = 'hasTextLight',
    dark = 'hasTextDark',
    black = 'hasTextBlack'
}

export const textColorValues = Objects.values(TextColor);
