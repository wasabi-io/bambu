import * as classNames from 'classnames';
import * as React from 'react';
import {Controlled, IInstance} from 'react-codemirror2';
import codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/keymap/sublime';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/oceanic-next.css';
import Style from "../Styles";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {bulma} from "bambu";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Stateless} from "wasabi-ui";
import CssUtil from "../../../util/CssUtil";

export interface Props {
    onBeforeChange?: (
        editor: IInstance,
        data: codemirror.EditorChange,
        value: string
    ) => void;
    onChange: (
        editor: IInstance,
        data: codemirror.EditorChange,
        value: string
    ) => void;
    store: CodeMirrorStore;
    codeMirrorOptions?: Partial<codemirror.EditorConfiguration>;
    className?: string;
    style?: Object;
}

export interface CodeMirrorStoreProps {
    code: string;
}

export class CodeMirrorStore {
    @observable
    private _code: string;
    @observable
    private _isActive: boolean = false;

    public constructor(props: CodeMirrorStoreProps) {
        this._code = props.code;
    }

    public get code(): string {
        return this._code;
    }

    public setCode(value: string) {
        this._code = value;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public setActive(isActive: boolean) {
        this._isActive = isActive;
    }
}

@observer
export default class CodeMirror extends Stateless<Props> {
    private figureId = `figure-${this.id}`;

    public render() {
        const {
            codeMirrorOptions = {},
            onBeforeChange,
            onChange,
            store,
            style = {},
            className = '',
        } = this.props;
        const styled: any = {
            padding: 1,
            ...style
        };

        const {isActive, code} = store;

        const clsName = classNames(
            Style.bdSnippetCode,
            Style.highlightFull,
            Style.bdIsMore,
            Style.content,
            {[`${Style.bdIsMoreClipped}`]: !isActive}
        );

        const codeClassName = !isActive ? Style.isShow : null;

        return (
            <div className={`${classNames(Style.CodeMirror, Style.box, bulma.hasTextLeft, className)}`} style={styled}>
                <div className={clsName}>
                    <figure id={this.figureId} className={classNames(Style.highlight)}>
                        <div className={codeClassName}>
                            <Controlled
                                // @ts-ignore
                                options={{
                                    keyMap: 'sublime',
                                    indentUnit: 2,
                                    foldGutter: true,
                                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                                    lineNumbers: true,
                                    lineWrapping: false,
                                    mode: 'jsx',
                                    ...codeMirrorOptions,
                                }}
                                onBeforeChange={onBeforeChange}
                                onChange={onChange}
                                value={code}
                            />
                        </div>
                        <Button
                            onMouseOver={this.copyOnMouseOver}
                            onMouseLeave={this.copyOnMouseLeave}
                            onClick={this.copy}
                            tagName="button"
                            style={{zIndex: 1000}}
                            className={classNames(bulma.isSmall, Style.bdCopy)}
                        >
                            Copy
                        </Button>
                        {!isActive &&
                        <Button onClick={this.show} tagName="button" className={Style.bdShow}>
                            <div>
                                <span className="icon">
                                    <Icon><FaIcon name="code"></FaIcon></Icon>
                                </span>
                                <strong>Show code</strong>
                            </div>
                        </Button>
                        }
                    </figure>
                </div>
            </div>
        );
    }

    public show = () => {
        this.props.store.setActive(true);
    }

    public copy = () => {
        const codeText = this.props.store.code;
        let element: any = document.createElement("textarea");
        element.id = "copy-textarea" + this.id;
        element.value = codeText;
        document.body.appendChild(element);
        element = document.getElementById(element.id);
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);

        /* Alert the copied text */
        alert("Copied the code");
    }

    public copyOnMouseOver() {
        CssUtil.addClassName(document.getElementById(this.figureId), Style.bdIsHovering);
    }

    public copyOnMouseLeave() {
        CssUtil.removeClass(document.getElementById(this.figureId), Style.bdIsHovering);
    }
}
