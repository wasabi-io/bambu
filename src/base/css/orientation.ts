import Objects from "wasabi-common/lib/types/Objects";

export enum Orientation {
    vertical = 'vertical',
    horizontal = 'horizontal'
}

export const orientationValues = Objects.values(Orientation);
