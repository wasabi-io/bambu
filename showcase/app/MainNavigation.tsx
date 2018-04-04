import {observer} from 'mobx-react';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs, tabsStyle} from 'rebul/lib/components/tabs';
import Stateless from 'wasabi-ui/lib/Stateless';

import Navigation from './Navigation';
import locationStore from './stores/LocationStore';
import WorkspaceStyle from './WorkspaceStyle';

const navigaions: Navigation[] = require('./navigations.json');

@observer
export default class MainNavigation extends Stateless<{}> {
    public render(): JSX.Element {
        const paths = locationStore.getPaths();
        const elements: any[] = [];
        for (const navigaion of navigaions) {
            elements.push(<Tab key={navigaion.path} {...this.configureTab(paths[0], navigaion.start)}><Link to={`${navigaion.start}`}>{navigaion.text}</Link></Tab>);
        }

        return (
            <Tabs tabStyle={tabsStyle.boxed}>
                {elements}
            </Tabs>
        );
    }

    private configureTab(locationPath: string, path: string) {
        const config: any = {};
        if (path.startsWith(`/${locationPath}`)) {
            config['isActive'] = true;
        } else {
            config['className'] = WorkspaceStyle.isFirstTabIsNotActive;
        }

        return config;

    }
}
