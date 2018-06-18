const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const chai = require("chai");
const chaiEnzyme = require('chai-enzyme');

enzyme.configure({ adapter: new Adapter() });


chai.use(chaiEnzyme()); // Note the invocation at the end