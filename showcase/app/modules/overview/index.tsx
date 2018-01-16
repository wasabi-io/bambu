import * as React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { Tab, Tabs } from 'rebul/lib/components/tabs';
import { Container } from 'rebul/lib/elements/container';
import Stateless from 'wasabi-ui/lib/Stateless';

import Customize from './Customize';
import Start from './Start';

export default class Overview extends Stateless<{ match: { url: string } }> {
    public render(): JSX.Element {
        const match = this.props.match;
        return (
            <Container>
                <Container>
                    <Tabs>
                        <Tab isActive>
                            <Link to={`${match.url}/start`}>Start</Link>
                        </Tab>
                        <Tab>
                            <Link to={`${match.url}/customize`}>Customize</Link>
                        </Tab>
                    </Tabs>
                </Container>
                <Route exact path={`${match.url}/start`} component={Start} />
                <Route exact path={`${match.url}/customize`} component={Customize} />
            </Container>
        );
    }
}