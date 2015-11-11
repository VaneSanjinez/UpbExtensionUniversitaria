'use strict';

describe('Controller: RegistroinstCtrl', function () {

  // load the controller's module
  beforeEach(module('extensionUniversitariaPiApp'));

  var RegistroinstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistroinstCtrl = $controller('RegistroinstCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistroinstCtrl.awesomeThings.length).toBe(3);
  });
});
