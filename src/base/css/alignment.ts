import Objects from 'wasabi-common/lib/types/Objects';

export enum Alignment {
    left = 'isLeft',
    center = 'isCentered',
    right = 'isRight'
}

export const AlignmentValues = Objects.values(Alignment);
