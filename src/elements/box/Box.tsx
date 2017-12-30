import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import BoxStyle from './BoxStyle';

export type BoxProps = HTMLDivProps;

const Box: React.SFC<BoxProps> = (props: BoxProps) => {

    const { className, ...boxProps } = props;

    const classNames = ClassNames(BoxStyle.box, className);

    return (
        <div className={classNames} {...boxProps} >
            {props.children}
        </div>
    );
};

Box.propTypes = HTMLComponent.propTypes;

Box.defaultProps = HTMLComponent.defaultProps;

Box.displayName = "Box";

export default Box;
