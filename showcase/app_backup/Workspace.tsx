import {observer} from "mobx-react";
import * as React from "react";
import {has} from "wasabi-common";
import Strings from "wasabi-common/lib/types/Strings";
import {Menu, MenuGen, MenuLinkGenRoot} from "rebul/lib/components/menu";
import {Color} from "rebul/lib/base/css";
import Container from "rebul/lib/elements/container/Container";
import {IconEffect, IconSize} from "rebul/lib/elements/icon";
import FaIcon from "rebul/lib/elements/icon/FaIcon";
import Notification from "rebul/lib/elements/notification/Notification";
import {ColumnSize} from "rebul/lib/grid/column";
import {TileContext, TileSize} from "rebul/lib/grid/tile";
import Tile from "rebul/lib/grid/tile/Tile";
import LoadingStyle from "rebul/lib/layout/loading/LoadingStyle";
import Stateless from "wasabi-ui/lib/Stateless";
import SelectorStore from "./store/SelectorStore";

export interface WorkspaceProps {
    initial: string;
    routes: MenuLinkGenRoot[];
    store: SelectorStore;
}

@observer
export default class Workspace extends Stateless<WorkspaceProps> {
    public render() {
        return (
            <Tile context={TileContext.ancestor}>
                <Tile context={TileContext.parent} size={TileSize.is2}>
                    <Notification color={Color.light}>
                        <Menu>
                            <MenuGen hierarchical routes={this.props.routes}/>
                        </Menu>
                    </Notification>
                </Tile>
                <Tile context={TileContext.parent} size={TileSize.is9}>
                    {this.renderContent()}
                </Tile>
            </Tile>
        );
    }

    public renderContent(): JSX.Element {
        const Component = this.props.store.component;

        if (!has(Component)) {
            return (
                <Container className={LoadingStyle.centerAll}>
                    <FaIcon className={LoadingStyle.loading} name="spinner" size={IconSize.x3} effect={IconEffect.spin}
                            fixed/>;
                </Container>
            );
        }
        return <Component />;
    }

    public componentDidMount() {
        if (!Strings.has(this.props.store.path)) {
            this.props.store.path = this.props.initial;
        }
    }
}
