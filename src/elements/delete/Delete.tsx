import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Size, SizeValues } from '../../base/css';
import HTMLComponent, { HTMLAllAttributes } from '../../base/html/HTML';
import DeleteStyle from './DeleteStyle';

export interface DeleteProps extends HTMLAllAttributes {
    tagName?: string;
    bSize?: string | Size;
}

const Delete: React.SFC<DeleteProps> = (props: DeleteProps) => {
    const { tagName, bSize, className, ...deleteProps } = props;
    const classNames = ClassNames(
        DeleteStyle.delete,
        DeleteStyle[bSize],
        className
    );
    (deleteProps as any).className = classNames;
    return React.createElement(tagName, deleteProps, props.children);
};

Delete.propTypes = {
    ...HTMLComponent.propTypes,
    tagName: PropTypes.string,
    bSize: PropTypes.oneOf(SizeValues),
};

Delete.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: "a"
};

Delete.displayName = "Delete";

export default Delete;
