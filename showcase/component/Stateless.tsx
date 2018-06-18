import * as React from "react";
import Binder from "wasabi-common/lib/lang/Binder";
import Generator from "wasabi-common/lib/util/Generator";

/**
 * Base Stateless Component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */
abstract class Stateless<P extends Readonly<P>> extends React.Component<P, {}> {
    /**
     *
     */
    public refs: {
        [key: string]: any;
    };
    /* tslint:disable */
    protected _id: string = Generator.guid();

    /**
     * Creates an instance of BaseComponent.
     * @param {Object} props
     * @param {any} context
     */
    public constructor(props: P, context?: any) {
        super(props, context);
        Binder.bindAll(this);
    }

    public get id(): string {
        return this._id;
    }
}

export default Stateless;