function ExercicioStartupCtrl($rootScope){
    // oculta o botão voltar no início
    $rootScope.showBack = false;
    $rootScope.currentLanguage = 'pt';
}

function ExercicioAbertoCtrl($scope, $rootScope, $routeParams, $location, Exercicio, ExercicioProcessa, Universo) {
    // mostra o botão voltar no exercício aberto
    $rootScope.showBack = true;

    // mantendo o estado do exercicio atual
    $scope.universo = [];
    $scope.atributos = [];
    $scope.atributosValores = [];
    $scope.etapas = [];

    // carregando o Exercicio com o service Exercicio
    // processando com o ExercicioProcessa
    $scope.exercicio =  Exercicio.get({exercicioId: $routeParams.exercicioId}, function(exercicio) {
        $scope.universo = Universo.get({universoTipo: exercicio.Exercicio.universoTipo, universoSubTipo: exercicio.Exercicio.universoSubTipo}, function(d){
          var processado = ExercicioProcessa.processa(d);
          $scope.atributos = processado.atributos;
          $scope.atributosValores = processado.valores;
        });

    },function(e){
      alert("Não foi possível carregar o exercício.");
      $location.path("/startup");
    });


  $scope.novoEstagio= function(){
      this.etapas.push({ "numElementos": 0, "verifiquem": 0, "propriedades": [{
              "tipo": "",
              "operador": "",
              "cor": ""
            },{
              "tipo": "",
              "operador": "",
              "cor": ""
            }]});
  };
  $scope.removerEtapa = function(item){
    this.etapas.splice(this.etapas.indexOf(item), 1);
  }
  $scope.reiniciar = function(){
    this.etapas = [];
  }
}