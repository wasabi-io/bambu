import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLAllAttributes} from '../../base/html/HTML';
import LevelStyle from '../../base/css/bulma';

export interface LevelRightProps extends HTMLAllAttributes {
    tagName?: string;
}

const LevelRight: React.SFC<LevelRightProps> = (props: LevelRightProps) => {

    const {tagName, className, ...levelRightProps} = props;

    const classNames = ClassNames(
        LevelStyle.levelRight,
        className
    );
    (levelRightProps as any).className = classNames;
    return React.createElement(tagName, levelRightProps, props.children);
};

LevelRight.propTypes = {
    ...HTMLComponent.propTypes
};

LevelRight.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'div'
};

LevelRight.displayName = 'LevelRight';

export default LevelRight;

