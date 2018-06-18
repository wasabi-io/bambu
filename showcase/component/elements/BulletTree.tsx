import * as React from "react";
import * as PropTypes from "prop-types";
import {Props} from "wasabi-common";
import {HTMLComponent, HTMLOlProps, HTMLUlProps} from "bambu";

export interface BulletTreeItem extends HTMLUlProps {
    header: string | JSX.Element;
    bullet?: string;
    items?: BulletTreeItem[];
}

export interface BulletTreeProps extends HTMLOlProps {
    bullet?: string;
    items: BulletTreeItem[];
}

export default class BulletTree extends React.Component<BulletTreeProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        bullet: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object)
    };
    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        bullet: "ol"
    };

    public render() {
        const {items, bullet, ...props} = this.props;
        return BulletTree.renderTreeParent(bullet, props, items);
    }

    public static renderTreeParent(bullet: string, props: Props<any>, items: BulletTreeItem[]) {
        return React.createElement(bullet, props, BulletTree.renderTreeItems(items));
    }

    public static renderTreeItems(items: BulletTreeItem[]) {
        const elements: JSX.Element[] = [];
        for (let i = 0; i < items.length; i = i + 1) {
            const item = items[i];
            const {header, bullet, items: childItems, ...props} = item;
            elements.push(
                <li key={`li-${i}`}>
                    {header}
                    {childItems ? BulletTree.renderTreeParent(bullet || "ul", {
                        key: `${bullet}-${i}`,
                        ...(props || {})
                    }, childItems) : null}
                </li>
            );
        }
        return elements;
    }
}