import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'rebul/lib/components/tabs';
import Stateless from 'wasabi-ui/lib/Stateless';

import WorkspaceStyle from './WorkspaceStyle';

const navigaions = [
    {
        "text": "Overview",
        "path": "/overview/start"
    },
    {
        "text": "Columns",
        "path": "/columns/start"
    }
];


export default class MainNavigation extends Stateless<{}> {
    public render(): JSX.Element {

        let elements: any[] = [];
        for (let navigaion of navigaions) {
            elements.push(<Tab className={WorkspaceStyle.isFirstTabIsNotActive} key={navigaion.path}><Link to={`${navigaion.path}`}>{navigaion.text}</Link></Tab>);
        }

        return (
            <Tabs tabStyle="isBoxed">
                {elements}
            </Tabs>
        );
    }
}