import * as React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';
import {BreadCrumb, BreadCrumbSeperator, BreadCrumbItem} from '../../../src/components/breadcrumb';
import {Size} from "../../../src";
import TestUtil from "../../TestUtil";

/* tslint:disable no-unused-expression */
describe('components/breadcrump/BreadCrumb', () => {
    it('initial', () => {
        const wrapper = mount(<BreadCrumb/>);
        const wrapperAssertion = expect(wrapper);
        wrapperAssertion.to.have.className(TestUtil.bulma("breadcrumb"));
        wrapperAssertion.to.tagName("nav");
        expect(wrapper.children()).to.have.length(1);
        expect(wrapper.children().childAt(0)).to.tagName("ul");
    });

    it('separator', () => {
        TestUtil.checkEnum(BreadCrumbSeperator, (name: any) => {
            if (name) {
                return <BreadCrumb separator={name}/>;
            }
            return <BreadCrumb/>;
        });
    });

    it('bSize', () => {
        TestUtil.checkEnum(Size, (name: any) => {
            if (name) {
                return <BreadCrumb bSize={name}/>;
            }
            return <BreadCrumb/>;
        });
    });
    it('isCentered', () => {
        TestUtil.checkBoolean(TestUtil.bulma("isCentered"), (value: boolean) => <BreadCrumb isCentered={value}/>);
    });
    it('isRight', () => {
        TestUtil.checkBoolean(TestUtil.bulma("isRight"), (value: boolean) => <BreadCrumb isRight={value}/>);
    });
    it('elementRef', () => {
        const wrapper = mount(<BreadCrumb/>);
        const wrapperAssertion = expect(wrapper);
        wrapperAssertion.to.have.className(TestUtil.bulma("breadcrumb"));
    });

    it('children', () => {
        let wrapper = mount(<BreadCrumb/>);
        expect(wrapper.children()).to.have.length(1);
        expect(wrapper.children().childAt(0).children()).to.have.length(0);
        wrapper = mount(
            <BreadCrumb>
                <BreadCrumbItem>
                    This is item
                </BreadCrumbItem>
            </BreadCrumb>
        );
        expect(wrapper.find('BreadCrumbItem')).to.have.length(1);
        wrapper = mount(
            <BreadCrumb>
                <BreadCrumbItem>
                    This is item
                </BreadCrumbItem>
                <BreadCrumbItem>
                    This is item
                </BreadCrumbItem>
            </BreadCrumb>
        );
        expect(wrapper.find('BreadCrumbItem')).to.have.length(2);
    });
});
