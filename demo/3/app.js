angular
  .module('TechInteriorApp', [])
  .controller('PalestrasController', function($scope) {
    $scope.palestras = [
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

    $scope.removePalestra = function(palestra){
      $scope.palestras.splice($scope.palestras.indexOf(palestra), 1)
    };

    $scope.addPalestra = function(){
      $scope.palestras.push({
        titulo: $scope.newTitulo,
        palestrante: $scope.newPalestrante
      });
      $scope.newTitulo = '';
      $scope.newPalestrante = '';
    }
  });
