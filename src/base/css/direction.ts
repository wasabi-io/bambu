import Objects from 'wasabi-common/lib/types/Objects';

export enum Direction {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left',
}

export enum DirectionH {
    right = 'right',
    bottom = 'bottom',
    left = 'left'
}

export const directionHValues = Objects.values(DirectionH);

export enum Horizontal {
    left = 'left',
    right = 'right'
}

export const horizontalValues = Objects.values(DirectionH);

export enum Vertical {
    top = 'top',
    bottom = 'bottom'
}

export const verticalValues = Objects.values(Vertical);
