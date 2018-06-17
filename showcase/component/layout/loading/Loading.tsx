import * as ClassNames from "classnames";
import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Stateless from "wasabi-ui/lib/Stateless";
import loadingStyle from "./loadingStyle";
import Spinner from "./svg/Spinner";

export interface LoadingProps {
}

@observer
export default class Loading extends Stateless<LoadingProps> {
    @observable
    private isActive: boolean = true;

    public render() {
        return (
            <div className={ClassNames(loadingStyle.bLoadingContainer)}>
                <div className={ClassNames(loadingStyle.bLoading, loadingStyle.isActive)}>
                    <div className={loadingStyle.bLoadingBackground}/>
                    <div className={loadingStyle.bLoadingContent}>
                        <Spinner className={loadingStyle.bLoadingSvg}/>
                    </div>
                </div>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
