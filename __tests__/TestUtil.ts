import {expect} from "chai";
import bulma from "../src/base/css/bulma";
import {mount} from "enzyme";
import {Props} from "wasabi-common";

export default class TestUtil {
    public static bulma(key: string) {
        return bulma[key];
    }

    public static checkEnum(enumMap: Props<any>, getComponent: (name?: any) => JSX.Element) {
        const initialWrapperAssertion = expect(mount(getComponent()));
        for (const key in enumMap) {
            const name = enumMap[key];
            const className = bulma[name];
            initialWrapperAssertion.to.have.not.className(className);
            const wrapper = mount(getComponent(name));
            const wrapperAssertion = expect(wrapper);
            wrapperAssertion.to.have.className(className);
        }
    }

    public static checkBoolean(className: string, getComponent: (value: boolean) => JSX.Element) {
        const initialWrapperAssertion = expect(mount(getComponent(false)));
        initialWrapperAssertion.to.have.not.className(className);
        const wrapper = mount(getComponent(true));
        const wrapperAssertion = expect(wrapper);
        wrapperAssertion.to.have.className(className);
    }
}
