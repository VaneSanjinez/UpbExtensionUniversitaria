'use strict';

describe('Controller: AutentificacionCtrl', function () {

  // load the controller's module
  beforeEach(module('extensionUniversitariaPiApp'));

  var AutentificacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutentificacionCtrl = $controller('AutentificacionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
