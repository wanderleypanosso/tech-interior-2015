angular
  .module('TechInteriorApp', [
    'ngRoute'
  ])

  .config(function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'list.html',
        controller: 'ListPalestrasController'
      }).
      when('/add', {
        templateUrl: 'add.html',
        controller: 'AddPalestrasController'
      }).
      otherwise({
        redirectTo: '/list'
      });
  })


  .factory('palestrasFactory', function(){
     var palestras = [
      {
        titulo: 'Introdução ao AngularJS',
        palestrante: 'Wanderley Panosso'
      },
      {
        titulo: 'Técnicas para servir imagens responsivas',
        palestrante: 'Maurício Maujor'
      },
      {
        titulo: 'Os príncipios por trás do DevOps',
        palestrante: 'Guilherme Silva Cardoso'
      },
      {
        titulo: 'Usuários líderes e estratégias que desafiam o mercado',
        palestrante: 'Marcio Galli'
      },
      {
        titulo: 'Os incríveis 8 passos para o sucesso na carreira de desenvolvimento de Software',
        palestrante: 'Jaydson Gomes'
      },
      {
        titulo: 'WoMoz - a tecnologia feita por todos',
        palestrante: 'Cynthia Zanoni'
      },
      {
        titulo: 'De programador a professor. De código proprietário a open source.',
        palestrante: 'Felipe Do E. Santo'
      }
    ];

    return {
      getPalestras: function (){
        return palestras;
      },
      removePalestra: function(palestra){
        palestras.splice(palestras.indexOf(palestra), 1)
      },
      addPalestra: function(palestra){
        palestras.push(palestra);
      }
    };
  })


  .controller('ListPalestrasController', function($scope, palestrasFactory) {
    $scope.palestras = palestrasFactory.getPalestras();

    $scope.removePalestra = function(palestra){
      palestrasFactory.removePalestra(palestra);
    };
  })


  .controller('AddPalestrasController', function($scope, $location, palestrasFactory) {

    $scope.addPalestra = function(){
      palestrasFactory.addPalestra({
        titulo: $scope.newTitulo,
        palestrante: $scope.newPalestrante
      });
      $scope.newTitulo = '';
      $scope.newPalestrante = '';
      $location.path('/list');
    }
  });
