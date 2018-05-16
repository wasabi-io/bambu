import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects, {Props} from 'wasabi-common/lib/types/Objects';
import {bulma as ImageStyle, HTMLComponent, HTMLImgProps} from '../../';

export enum ImageSize {
    is16X16 = 'is16X16',
    is24X24 = 'is24X24',
    is32X32 = 'is32X32',
    is48X48 = 'is48X48',
    is64X64 = 'is64X64',
    is96X96 = 'is96X96',
    is128X128 = 'is128X128',
}

export enum ImageRatio {
    isSquare = 'isSquare',
    is1By1 = 'is1By1',
    is4By3 = 'is4By3',
    is3By2 = 'is3By2',
    is16By9 = 'is16By9',
    is2By1 = 'is2By1'
}

/**
 * Refers Html Props and Additional Props.
 */
export interface ImageProps extends HTMLImgProps {
    alt?: string;
    pClassName?: string;
    pStyle?: Props;
    ratio?: string | ImageRatio;
    bSize?: string | ImageSize;
    src: string;
    elementRef?: any;
}

export default class Image extends React.Component<ImageProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        alt: PropTypes.string,
        pClassName: PropTypes.string,
        pStyle: PropTypes.object,
        ratio: PropTypes.oneOf(Objects.values(ImageRatio)),
        bSize: PropTypes.oneOf(Objects.values(ImageSize)),
        src: PropTypes.string.isRequired
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {bSize, ratio, pClassName, pStyle, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            ImageStyle.image,
            ImageStyle[bSize],
            ImageStyle[ratio],
            pClassName,
        );

        return (
            <figure className={classNames} style={pStyle} ref={elementRef}>
                <img {...inputProps}>
                    {children}
                </img>
            </figure>
        );
    }
}
