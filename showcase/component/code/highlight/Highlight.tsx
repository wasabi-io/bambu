import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Style from './Style';
import Stateless from "wasabi-ui/lib/Stateless";
import {observable} from "mobx";
import * as highlight from "highlight.js";
import {HTMLDivProps} from "bambu";
import {observer} from "mobx-react";
import language from "wasabi-ui/lib/i18n/Language";

export interface HighlightProps extends HTMLDivProps {
    withScroll?: boolean;
    language?: string;
}

@observer
export default class Highlight extends Stateless<HighlightProps> {
    @observable
    private isHovered: any = false;

    public static propTypes = {
        withScroll: PropTypes.bool
    };

    public static defaultProps = {
        withScroll: true,
        language: "javascript"
    };

    private codeId = `highlight-${this.id}`;

    public constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        this.highlightCode();
    }

    public componentDidUpdate() {
        this.highlightCode();
    }

    public render(): JSX.Element {
        const {className} = this.props;
        const buttonClassName = ClassNames(Style.hljsCopy, {[`${Style.hljsCopyHovered}`]: this.isHovered});
        const preClassName = ClassNames(Style.hljsPre, {
            [`${Style.hljsPreHovered}`]: this.isHovered,
            [`${Style.hljsPreScroll}`]: this.props.withScroll
        });
        return (
            <div className={ClassNames(Style.hljsContent, className)}>
                <button
                    className={buttonClassName}
                    onMouseOver={() => this.isHovered = true}
                    onMouseOut={() => this.isHovered = false}
                    onClick={this.copyToClipboard}>
                    copy
                </button>
                <pre className={preClassName}>
                      <code id={this.codeId} className={Style[`language-${this.props.language}`]} data-lang={language}>
                        {this.props.children}
                      </code>
                </pre>
            </div>
        );
    }

    public highlightCode() {
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');
        for (let i = 0; i < nodes.length; i = +1) {
            highlight.highlightBlock(nodes[i]);
        }
    }

    public copyToClipboard() {
        const range = document.createRange();
        range.selectNode(document.getElementById(this.codeId));

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }
}
