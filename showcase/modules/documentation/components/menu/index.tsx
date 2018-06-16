import * as React from "react";
import XDocEditor from "modules/view/editor/XDocEditor";
import pageStyle from "css/pageStyle";

const codes = {
    basic: require("!raw-loader?modules!./code/1-basic"),
};

const Index: React.SFC<{}> = () => {
    return (
        <div className={pageStyle.bdContent}>
            <div className={pageStyle.content}>
                <XDocEditor title="Sizes" codes={[codes.basic]}/>
            </div>
        </div>
    );
};
export default Index;
