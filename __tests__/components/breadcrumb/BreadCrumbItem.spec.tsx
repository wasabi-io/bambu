import * as React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {BreadCrumbItem} from '../../../src/components/breadcrumb';
import TestUtil from "../../TestUtil";

/* tslint:disable no-unused-expression */
describe('components/breadcrump/BreadCrumbItem', () => {
    it('initial', () => {
        const wrapper = mount(<BreadCrumbItem/>);
        const wrapperAssertion = expect(wrapper);
        wrapperAssertion.to.have.className("");
        wrapperAssertion.to.tagName("li");
        expect(wrapper.children()).to.have.length(1);
        expect(wrapper.children().childAt(0)).to.tagName("a");
    });

    it('isActive', () => {
        TestUtil.checkBoolean(TestUtil.bulma("isActive"), (value: boolean) => <BreadCrumbItem isActive={value}/>);
    });

    it('children', () => {
        let wrapper = mount(<BreadCrumbItem/>);
        expect(wrapper.children()).to.have.length(1);
        expect(wrapper.children().childAt(0).children()).to.have.length(0);
        wrapper = mount(<BreadCrumbItem>
            This is item
        </BreadCrumbItem>);
        expect(wrapper.find('BreadCrumbItem')).to.have.length(1);
    });
});
