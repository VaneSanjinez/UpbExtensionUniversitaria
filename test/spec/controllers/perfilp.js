'use strict';

describe('Controller: PerfilpCtrl', function () {

  // load the controller's module
  beforeEach(module('extensionUniversitariaPiApp'));

  var PerfilpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilpCtrl = $controller('PerfilpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilpCtrl.awesomeThings.length).toBe(3);
  });
});
