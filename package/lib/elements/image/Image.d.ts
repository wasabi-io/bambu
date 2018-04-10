/// <reference types="react" />
import * as React from 'react';
import { Props } from 'wasabi-common/lib/types/Objects';
import { HTMLImgProps } from '../../base/html/HTML';
export declare enum ImageSize {
    is16X16 = "is16X16",
    is24X24 = "is24X24",
    is32X32 = "is32X32",
    is48X48 = "is48X48",
    is64X64 = "is64X64",
    is96X96 = "is96X96",
    is128X128 = "is128X128",
}
export declare enum ImageRatio {
    isSquare = "isSquare",
    is1By1 = "is1By1",
    is4By3 = "is4By3",
    is3By2 = "is3By2",
    is16By9 = "is16By9",
    is2By1 = "is2By1",
}
/**
 * Refers Html Props and Additional Props.
 */
export interface ImageProps extends HTMLImgProps {
    alt?: string;
    pClassName?: string;
    pStyle?: Props;
    ratio?: string | ImageRatio;
    size?: string | ImageSize;
    src: string;
}
declare const Image: React.SFC<ImageProps>;
export default Image;
