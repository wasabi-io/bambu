import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLComponent, HTMLDivProps} from "bambu";
import MediaQueryUtil from "../../util/MediaQueryUtil";
import ResizeLayout, {DesignedPage, ResizeType} from "./ResizeLayout";
import {Props} from "wasabi-common";

export interface OnMatch {
    (key: string, isMatched: boolean): any;
}

export interface MediaQueryProps extends HTMLDivProps {
    type?: ResizeType;
    queries: Props<string>;
    onMatch: OnMatch;
    elementRef?: (ref: any) => any;
}

export default class MediaQuery extends React.Component<MediaQueryProps> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        type: PropTypes.string,
        queries: PropTypes.object,
        onMatch: PropTypes.func,
        elementRef: PropTypes.func
    };

    public static defaultProps = ResizeLayout.defaultProps;

    private isMatch: Props<any> = {};

    public constructor(props: MediaQueryProps) {
        super(props);
    }

    public render() {
        const {queries, onMatch, children, ...props} = this.props;
        return (
            <ResizeLayout onResize={this.onResize} onInit={this.onResize} {...props}>
                {children}
            </ResizeLayout>
        );
    }

    public onResize = (designedPage: DesignedPage) => {
        const queries = this.props.queries;
        for (const key in queries) {
            const isMatch = MediaQueryUtil.match(`${this.props.type} and ${queries[key]}`, {
                type: this.props.type,
                ...designedPage
            });
            if (this.isMatch[key] !== isMatch) {
                this.isMatch[key] = isMatch;
                this.props.onMatch(key, isMatch);
            }
        }
    }
}
