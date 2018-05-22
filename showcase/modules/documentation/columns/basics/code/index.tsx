import * as React from "react";
import {Stateless} from "wasabi-ui";
import CodeMirror, {CodeMirrorStore} from "../../../../../component/code/mirror/CodeMirror";
import {observer} from "mobx-react";
import {IInstance} from "react-codemirror2";
import codemirror from 'codemirror';
import {observable} from "mobx";
import Preview, {PreviewStore} from "../../../../../component/code/preview/Preview";
import Card from "bambu/lib/components/card/Card";
import {CardContent, CardFooter} from "bambu/lib/components/card";
import transformer from "../../../../../component/code/transform/transformer";

const codeText = require("!raw-loader?modules!./Code1");

@observer
export default class Index extends Stateless <any> {
    @observable
    private previewStore: PreviewStore;
    private codeMirrorStore: CodeMirrorStore;

    public constructor(props: any) {
        super(props);
        this.codeMirrorStore = new CodeMirrorStore({
            code: codeText
        });
        const result = transformer.execute(codeText);
        this.previewStore = new PreviewStore(result);
    }

    public render() {
        return (
            <Card>
                <CardContent>
                    <CodeMirror
                        store={this.codeMirrorStore}
                        onBeforeChange={this.onBeforeChange}
                        onChange={this.onChange}
                    />
                </CardContent>
                <CardFooter>
                    <Preview store={this.previewStore}/>
                </CardFooter>
            </Card>
        );
    }

    public onBeforeChange = (editor: IInstance, data: codemirror.EditorChange, code: string) => {
        this.codeMirrorStore.setCode(code);
    }

    public onChange = (editor: IInstance, data: codemirror.EditorChange, code: string) => {
        try {
            // eslint-disable-next-line
            const result = transformer.execute(code);
            this.previewStore.setResult(result);
        } catch (e) {
            console.log(e);
        }
    }
}
