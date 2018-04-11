import resolver from 'wasabi-common/lib/resolver';
import * as chai from 'chai';
// setup file
import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as chaiEnzyme from 'chai-enzyme';

configure({adapter: new Adapter()});

resolver.electron().root('./src');

chai.use(chaiEnzyme()); // Note the invocation at the end
