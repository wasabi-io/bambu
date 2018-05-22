import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ClassNames from 'classnames';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Highlight} from '../highlight/index';
import Style from './snippet.css';
import {HTMLDivProps} from "bambu";

const jsxToString = require('jsx-to-string');

interface SnippetProps extends HTMLDivProps {
    withScroll?: boolean;
    slices?: boolean;
    wi?: boolean;
}

export default class Snippet extends Stateless<SnippetProps> {
    public static propTypes = {
        withScroll: PropTypes.bool,
        slices: PropTypes.bool,
        wi: PropTypes.bool
    };

    public static defaultProps = {
        withScroll: true,
    };

    public render(): JSX.Element {
        const {children, slices, withScroll, className, ...props} = this.props;

        const snpptClassName = ClassNames(
            Style.snppt, {
                [`${Style.snpptBorderless}`]: !withScroll,
                [`${Style.snpptSlices}`]: slices
            }, className);
        return (
            <div className={snpptClassName} {...props}>
                <div className={Style.snpptPreview}>
                    {children}
                </div>
                <div className={Style.snpptHighlight}>
                    <Highlight withScroll={withScroll}>
                        {React.Children.map(children, child => `\n${jsxToString(child, {shortBooleanSyntax: true})}`)}
                    </Highlight>
                </div>
            </div>
        );
    }
}
