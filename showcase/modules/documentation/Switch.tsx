import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import createHistory from "history/createHashHistory";
import {Action, Location, UnregisterCallback} from "history";
import SCStore from "./SCStore";
import UrlUtil from "../../util/UrlUtil";
import DynamicRouter from "./DynamicRouter";

const history = createHistory();

export default class Switch extends Stateless<{}> {
    private unListen: UnregisterCallback;
    private store = new SCStore();

    public constructor(props: any) {
        super(props);
        this.store.setPaths(UrlUtil.parseHash(window.location.hash).paths);
    }

    public render() {
        return (
            <DynamicRouter store={this.store}/>
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
