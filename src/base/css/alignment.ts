import Objects from "wasabi-common/lib/types/Objects";

export enum Alignment {
    left = "isLeft",
    center = "isCenter",
    right = "isRight"
}

export const AlignmentValues = Objects.values(Alignment);
