import * as codeMirror from "codemirror";
import {Props} from "wasabi-common";
import CssUtil from "../../util/CssUtil";
import HtmlUtil from "../../util/HtmlUtil";
import { Promise } from "es6-promise";

export interface MirrorEditorEvents extends Props<any> {
    changes?: (instance: codeMirror.Editor, change: codeMirror.EditorChangeLinkedList[]) => any;
    beforeChange?: (instance: codeMirror.Editor, change: codeMirror.EditorChangeCancellable) => any;
    cursorActivity?: (instance: codeMirror.Editor) => any;
    beforeSelectionChange?: (instance: codeMirror.Editor, selection: { head: codeMirror.Position; anchor: codeMirror.Position; }) => any;
    viewportChange?: (instance: codeMirror.Editor, from: number, to: number) => any;
    gutterClick?: (instance: codeMirror.Editor, line: number, gutter: string, clickEvent: Event) => any;
    focus?: (instance: codeMirror.Editor) => any;
    blur?: (instance: codeMirror.Editor) => any;
    scroll?: (instance: codeMirror.Editor) => any;
    update?: (instance: codeMirror.Editor) => any;
    renderLine?: (instance: codeMirror.Editor, line: codeMirror.LineHandle, element: HTMLElement) => any;
}

export interface MirrorEditorOptions extends codeMirror.EditorConfiguration {
    onChange?: (value: string, instance?: codeMirror.Editor, change?: codeMirror.EditorChangeLinkedList) => any;
    editorClassName?: string;
    events?: MirrorEditorEvents;
}

export default class MirrorEditor {
    public static modes: string[] = [];
    public static themes: string[] = [];

    private events?: MirrorEditorEvents = {};
    private options: MirrorEditorOptions;
    private nodeRef: HTMLElement;
    private editor: codeMirror.Editor;

    private currentTheme: string = "";

    private currentMode: string = "";

    public init(nodeRef: HTMLElement, options: MirrorEditorOptions) {
        this.nodeRef = nodeRef;
        this.options = options;
        this.events = {};
        const events: any = options.events || {};
        for (const key in events) {
            if (events.hasOwnProperty(key)) {
                this.events[key] = events[key];
            }
        }
        this.events.change = this.change;
    }

    private change = (instance: codeMirror.Editor, change: codeMirror.EditorChangeLinkedList) => {
        console.log("eeee");
        if (this.options.onChange) {
            this.options.onChange(instance.getValue(), instance, change);
        }
    }

    public load(mode: string, theme: string) {
        if (this.currentMode !== mode || this.currentTheme !== theme) {
            if (!this.editor) {
                this.createEditor(this.options);
            }
            MirrorEditor.loadModeAndTheme(mode, theme).then(() => {
                this.selectThemeAndMode(mode, theme);
            });
        }
    }

    public selectThemeAndMode(mode: string, theme: string) {
        if (this.editor) {
            this.editor.setOption("mode", mode);
            this.editor.setOption("theme", theme);
        }
    }

    public focus() {
        this.editor.focus();
        this.editor.getDoc().setCursor({line: 0, ch: 0});
    }

    public createEditor(options: MirrorEditorOptions) {
        this.destroy();
        this.options = options;
        this.events = {};
        const events: any = options.events || {};
        for (const key in events) {
            if (events.hasOwnProperty(key)) {
                this.events[key] = events[key];
            }
        }
        this.events.change = this.change;
        this.editor = codeMirror(this.nodeRef, options);
        CssUtil.addClassName(this.nodeRef.firstChild, this.options.editorClassName);
        this.changeEvent(this.editor.on.bind(this.editor));
        return this.editor;
    }

    public destroy() {
        if (this.editor != null) {
            this.nodeRef.removeChild(this.nodeRef.firstChild);
            this.changeEvent(this.editor.off.bind(this.editor));
            this.editor = null;
        }
    }

    public changeEvent(trigger: any) {
        if (this.events) {
            for (const eventKey in this.events) {
                if (this.events.hasOwnProperty(eventKey)) {
                    trigger(eventKey, this.events[eventKey]);
                }
            }
        }
    }

    public copy = () => {
        this.getEditor().execCommand("selectAll");
        HtmlUtil.copy(this.getEditor().getValue());
    }

    public getEditor() {
        return this.editor;
    }

    public static loadModeAndTheme(mode: string, theme: string) {
        return new Promise((resolve, reject) => {
            const existingTheme = MirrorEditor.themes.indexOf(theme);
            const existingMode = MirrorEditor.modes.indexOf(mode);
            if (existingTheme === -1 && existingMode === -1) {
                Promise
                    .all([MirrorEditor.loadMode(mode), MirrorEditor.loadTheme(theme)])
                    .then(() => resolve([theme, mode]))
                    .catch(reject);
            } else if (existingMode === -1) {
                MirrorEditor.loadMode(mode).then(() => resolve([theme, mode])).catch(reject);
            } else if (existingTheme === -1) {
                MirrorEditor.loadTheme(theme).then(() => resolve([theme, mode])).catch(reject);
            } else {
                resolve([theme, mode]);
            }
        });
    }

    public static loadTheme(theme: string) {
        return System.import(`codemirror/theme/${theme}.css`).then(() => {
            MirrorEditor.themes.push(theme);
            return theme;
        });
    }

    public static loadMode(mode: string) {
        return System.import(`codemirror/mode/${mode}/${mode}.js`).then(() => {
            MirrorEditor.modes.push(mode);
            return mode;
        });
    }
}
