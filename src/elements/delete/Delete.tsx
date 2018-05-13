import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DeleteStyle, HTMLAllAttributes, HTMLComponent, Size, sizeValues} from '../../';

export interface DeleteProps extends HTMLAllAttributes {
    tagName?: string;
    bSize?: string | Size;
}

const Delete: React.SFC<DeleteProps> = (props: DeleteProps) => {
    const {tagName, bSize, className, ...deleteProps} = props;
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
    bSize: PropTypes.oneOf(sizeValues),
};

Delete.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'a'
};

Delete.displayName = 'Delete';

export default Delete;
