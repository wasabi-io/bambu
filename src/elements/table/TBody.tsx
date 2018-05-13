import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTbodyProps} from '../../';

export type TBodyProps = HTMLTbodyProps;

const TBody: React.SFC<TBodyProps> = (props: TBodyProps) => {

    const {className, ...tBodyProps} = props;

    const classNames = ClassNames(
        TableStyle.tr,
        className
    );

    return (
        <tbody className={classNames} {...tBodyProps} >
        {props.children}
        </tbody>
    );
};

TBody.propTypes = HTMLComponent.propTypes;
TBody.defaultProps = HTMLComponent.defaultProps;
TBody.displayName = 'TBody';

export default TBody;
