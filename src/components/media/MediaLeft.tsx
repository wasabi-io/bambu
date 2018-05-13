import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MediaStyle, HTMLComponent, HTMLDivProps} from '../../';

export type MediaLeftProps = HTMLDivProps;

const MediaLeft: React.SFC<MediaLeftProps> = (props: MediaLeftProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MediaStyle.mediaLeft,
        className
    ]);

    return (
        <div {...inputProps} className={classNames}>
            {props.children}
        </div>
    );
};

MediaLeft.propTypes = HTMLComponent.propTypes;

MediaLeft.defaultProps = HTMLComponent.defaultProps;

MediaLeft.displayName = 'MediaContent';

export default MediaLeft;
