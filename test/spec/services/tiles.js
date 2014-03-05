'use strict';

describe('Service: Tiles', function () {

  // load the service's module
  beforeEach(module('mahjongLearnAppApp'));

  // instantiate service
  var Tiles;
  beforeEach(inject(function (_Tiles_) {
    Tiles = _Tiles_;
  }));

  it('should do something', function () {
    expect(!!Tiles).toBe(true);
  });

});
