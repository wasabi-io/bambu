import * as React from "react";
import Stateless from "component/Stateless";
import createHistory from "history/createHashHistory";
import {Action, Location, UnregisterCallback} from "history";
import Index from "./index";
import DocStore from "../store/DocStore";
import UrlUtil from "wasabi-common/lib/util/UrlUtil";

const history = createHistory();

export default class Documentation extends Stateless<{}> {
    private unListen: UnregisterCallback;
    private store = new DocStore();

    public constructor(props: any) {
        super(props);
        this.store.setPaths(UrlUtil.parseHash(window.location.hash).paths);
    }

    public render() {
        return (
            <Index store={this.store}/>
        );
    }

    public componentDidMount() {
        this.unListen = history.listen(this.onHistoryChanged);
    }

    public componentWillUnmount() {
        this.unListen();
    }

    public onHistoryChanged = (location: Location, action: Action) => {
        this.store.setPaths(UrlUtil.parseHash(window.location.hash).paths);
    }
}
