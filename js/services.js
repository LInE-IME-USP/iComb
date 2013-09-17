var icombModule = angular.module('icombServices', ['ngResource']);

icombModule.factory('Exercicio', function($resource){
    return $resource('exercicios/:exercicioId.json', {}, {
    query: {method:'GET', params:{}, isArray:true }});
});

icombModule.factory('ExercicioProcessa', function($resource){
    return {
        processa: function(d){
          var atributos = [];
          var atributosValores = [];

          // descobrindo os atributos
          angular.forEach(d.universo.elemento[0].atributo, function(value, key){
             atributos.push(value.nome);
             atributosValores[value.nome] = [];
          });

          // descobrindo os valores
          angular.forEach(d.universo.elemento, function(elValue, elKey){
            angular.forEach(elValue.atributo, function(atValue, atKey){
             if(atributosValores[atValue.nome].indexOf(atValue.valor)==-1){
                atributosValores[atValue.nome].push(atValue.valor);
             }
             if(atValue.predicado && (atributosValores[atValue.nome].indexOf(atValue.predicado)==-1)){
                atributosValores[atValue.nome].push(atValue.predicado);
             }
            });
          });

          return { atributos: atributos, valores: atributosValores };
        }
    };
});

icombModule.factory('Universo', function($resource){
    universo = $resource('universos/:universoTipo/:universoSubTipo.json', {}, {
    query: {method:'GET', params:{}, isArray:false }});
    return universo;
});