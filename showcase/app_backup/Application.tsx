import * as React from "react";
import {render} from "react-dom";
import {Props} from "wasabi-common/lib/types/Objects";
import {IconEffect, IconSize} from "rebul/lib/elements/icon";
import FaIcon from "rebul/lib/elements/icon/FaIcon";
import LoadingStyle from "rebul/lib/layout/loading/LoadingStyle";
import AsyncRenderer from "wasabi-ui/lib/async/AsyncRenderer";

export interface IApplicationProps {
    container: any;
    renderer: Promise<React.ComponentClass<any>>;
    options: any;
}

const importWorkspaces = (path: string, options: Props) => {
    return import("./workspaces" + path);
};

export default class Application {

    public static build(props: IApplicationProps): Application {
        return new Application(props);
    }

    public static loading() {
        return (
            <div className={LoadingStyle.centerAll}>
                <FaIcon className={LoadingStyle.loading} name="spinner" size={IconSize.x3} effect={IconEffect.spin}
                        fixed/>;
            </div>
        );
    }

    private constructor(props: IApplicationProps) {
        this.render(props);
    }

    public render(props: IApplicationProps) {
        render(
            <AsyncRenderer
                loading={Application.loading()}
                renderer={props.renderer}
                componentProps={{import: importWorkspaces}}
            />
            , props.container
        );
    }
}
