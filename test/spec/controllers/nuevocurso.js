'use strict';

describe('Controller: NuevocursoCtrl', function () {

  // load the controller's module
  beforeEach(module('extensionUniversitariaPiApp'));

  var NuevocursoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevocursoCtrl = $controller('NuevocursoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevocursoCtrl.awesomeThings.length).toBe(3);
  });
});
