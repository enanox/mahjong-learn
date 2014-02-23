'use strict';

describe('Service: L10n', function () {

  // load the service's module
  beforeEach(module('mahjongLearnAppApp'));

  // instantiate service
  var L10n;
  beforeEach(inject(function (_L10n_) {
    L10n = _L10n_;
  }));

  it('should do something', function () {
    expect(!!L10n).toBe(true);
  });

});
