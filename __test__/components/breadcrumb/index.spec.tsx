import * as React from 'react';
import {mount, render, shallow} from 'enzyme';
import {expect} from 'chai';
import {BreadCrumb} from '../../../src/components/breadcrumb';

/* tslint:disable no-unused-expression */
describe('components/breadcrump', () => {
    it('create', () => {
        const wrapper = mount(<BreadCrumb/>); // mount/render/shallow when applicable
        expect(wrapper).to.have.length(1);
    });
});
