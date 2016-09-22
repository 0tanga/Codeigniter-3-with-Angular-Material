(function(){
  'use strict';

  angular.module('department')
         .config(['$routeProvider', '$locationProvider', DepartmentRoutes]);

  function DepartmentRoutes($routeProvider, $locationProvider, $q){
    $routeProvider
      .when('/department', {
        templateUrl: base_url + 'src/pages/department/view/content.html',
        controller: 'DepartmentController',
        controllerAs: 'department'
      });
  }

})();
