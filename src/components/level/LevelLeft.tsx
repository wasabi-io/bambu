import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, { HTMLAllAttributes } from '../../base/html/HTML';
import LevelStyle from './LevelStyle';

export interface LevelLeftProps extends HTMLAllAttributes {
    tagName?: string;
}

const LevelLeft: React.SFC<LevelLeftProps> = (props: LevelLeftProps) => {

    const { tagName, className, ...levelLeftProps } = props;

    const classNames = ClassNames(
        LevelStyle.levelLeft,
        className
    );
    (levelLeftProps as any).className = classNames;
    return React.createElement(tagName, levelLeftProps, props.children);
};

LevelLeft.propTypes = {
    ...HTMLComponent.propTypes
};

LevelLeft.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: "div"
};

LevelLeft.displayName = "LevelLeft";

export default LevelLeft;

