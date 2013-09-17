var icombApp = angular.module('icomb', ['icombServices']);

icombApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/startup', { templateUrl: 'partials/startup.html', controller: ExercicioStartupCtrl }).
      when('/opened/:exercicioId', { templateUrl: 'partials/opened.html', controller: ExercicioAbertoCtrl }).
      otherwise({redirectTo: '/startup'});
}]);

icombApp.run(function($rootScope){
    $rootScope.showBack = false;
    $rootScope.currentLanguage = 'pt';
});