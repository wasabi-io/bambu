import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTheadProps} from '../../';

export type THeadProps = HTMLTheadProps;

const THead: React.SFC<THeadProps> = (props: THeadProps) => {

    const {className, ...tHeadProps} = props;

    const classNames = ClassNames(
        TableStyle.tr,
        className
    );

    return (
        <thead className={classNames} {...tHeadProps} >
        {props.children}
        </thead>
    );
};

THead.propTypes = HTMLComponent.propTypes;
THead.defaultProps = HTMLComponent.defaultProps;
THead.displayName = 'THead';

export default THead;
