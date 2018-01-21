import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'rebul/lib/components/tabs';
import Stateless from 'wasabi-ui/lib/Stateless';
import locationStore, { LocationProps } from './stores/LocationStore';
import WorkspaceStyle from './WorkspaceStyle';
import { observer } from 'mobx-react';
import Navigaion from './Navigation';

const navigaions: Navigaion[] = require("./navigaions.json");

// const navigaions = [
//     {
//         "text": "Overview",
//         "path": "/overview/start"
//     },
//     {
//         "text": "Columns",
//         "path": "/columns/hello"
//     },
//     {
//         "text": "Layout",
//         "path": "/layout/container"
//     }
// ];

@observer
export default class MainNavigation extends Stateless<{}> {
    public render(): JSX.Element {
        const paths = locationStore.getPaths();
        let elements: any[] = [];
        for (let navigaion of navigaions) {
            elements.push(<Tab key={navigaion.path} {...this.configureTab(paths[0], navigaion.start) }><Link to={`${navigaion.start}`}>{navigaion.text}</Link></Tab>);
        }

        return (
            <Tabs tabStyle="isBoxed">
                {elements}
            </Tabs>
        );
    }
    private configureTab(locationPath: string, path: string) {
        let config: any = {};
        if (path.startsWith(`/${locationPath}`)) {
            config["isActive"] = true;
        } else {
            config["className"] = WorkspaceStyle.isFirstTabIsNotActive;
        }

        return config;

    }
}