import {Props} from "wasabi-common";
import * as React from "react";
import {CellProps} from "bambu/lib/elements/table";
import GridSearchQuery from "./search/GridSearchQuery";

export interface GridRowCellRenderer {
    (name: string, item?: Props<any>, key?: number, field?: GridField): React.ReactChild;
}

export interface GridRowRenderer {
    (fields: Props<GridField>, item: Props<any>, index: number, cellRender: GridRowCellRenderer): React.ReactChild;
}

export interface GridHeaderCellRenderer {
    (name: string, field?: GridField, index?: number, totalField?: number, action?: GridSearchQuery, searchRenderer?: GridFieldSearchRenderer): React.ReactChild;
}

export interface GridFieldSearchRenderer {
    (name: string, field?: GridField, action?: GridSearchQuery): React.ReactChild;
}

export interface GridHeaderRenderer {
    (fields: Props<GridField>, cellRenderer: GridHeaderCellRenderer, action?: GridSearchQuery): React.ReactChild;
}

export interface GridFieldSettings extends Props<any> {
    search?: Props<any>;
}

interface GridField {
    type?: string;
    defaultValue?: string;
    header: string;
    headerCellRenderer?: GridHeaderCellRenderer;
    fieldSearchRenderer?: GridFieldSearchRenderer;
    alias?: string;
    renderer?: GridRowCellRenderer;
    settings?: GridFieldSettings;
    sortable?: boolean;
    placeholder?: string;
    cell?: CellProps;
}

export default GridField;
