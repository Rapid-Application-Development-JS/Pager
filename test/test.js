var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var Pager = require('../pager.js');
//chai.use(Pager);
describe('0.1: Pager. Basic tests.', function () {
  var PagerConstructor = null;
  var pager = null;
  var serviceName = 'ExampleService';
  var serviceResult = 'Service resolve result';
  var ExampleService = function ExampleService() {
    this.resolve = function () {
      return serviceResult;
    };
  };
  it('0.1.1: Pager → Initialization', function (done) {
    PagerConstructor = pager.Constructor;
    assert.typeOf(PagerConstructor, 'function');
    pager = new PagerConstructor();
    assert.typeOf(pager, 'object');
    done();
  });
  it('0.1.2: Pager → Register Service', function (done) {
    assert.typeOf(pager.register(serviceName, ExampleService), 'object');
    done();
  });
  it('0.1.3: Pager → Instantiate Services', function (done) {
    pager.instantiateAll();
    var services = pager.getAllInstantiate();
    assert.typeOf(services, 'array');
    (services.length).should.equal(1);
    done();
  });
  it('0.1.4: Pager → Get service', function (done) {
    var exampleService = pager.get(serviceName);
    assert.typeOf(exampleService, 'object');
    var result = exampleService.resolve();
    (result).should.equal(serviceResult);
    done();
  });
  it('0.1.5: Pager → Unregister Service', function (done) {
    pager.unregister(serviceName);
    assert.typeOf(pager.get("ExampleService"), 'null');
    done();
  });
});