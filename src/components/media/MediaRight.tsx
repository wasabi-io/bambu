import * as ClassNames from 'classnames';
import * as React from 'react';
import MediaStyle from '../../base/css/bulma';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';

export type MediaRightProps = HTMLDivProps;

const MediaRight: React.SFC<MediaRightProps> = (props: MediaRightProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        MediaStyle.mediaRight,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

MediaRight.propTypes = HTMLComponent.propTypes;

MediaRight.defaultProps = HTMLComponent.defaultProps;

MediaRight.displayName = 'MediaRight';

export default MediaRight;
