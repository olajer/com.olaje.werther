angular.module('app', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: "/home",templateUrl: "js/templates/home.html"})
    .state('inicio', {url: "/inicio",templateUrl: "js/templates/inicio.html"})    
    .state('pregunta_a', {url: "/pregunta_a",templateUrl: "js/templates/pregunta_a.html"})
    .state('pregunta_a_si', {url: "/pregunta_a_si",templateUrl: "js/templates/pregunta_a_si.html"})
    .state('pregunta_a_no', {url: "/pregunta_a_no",templateUrl: "js/templates/pregunta_a_no.html"})
    .state('pregunta_b', {url: "/pregunta_b",templateUrl: "js/templates/pregunta_b.html"})
    .state('pregunta_b_si', {url: "/pregunta_b_si",templateUrl: "js/templates/pregunta_b_si.html"})
    .state('pregunta_b_no', {url: "/pregunta_b_no",templateUrl: "js/templates/pregunta_b_no.html"}) 
    .state('pregunta_c', {url: "/pregunta_c",templateUrl: "js/templates/pregunta_c.html"})
    .state('pregunta_c_si', {url: "/pregunta_c_si",templateUrl: "js/templates/pregunta_c_si.html"})
    .state('pregunta_d', {url: "/pregunta_d",templateUrl: "js/templates/pregunta_d.html"})
    .state('pregunta_d_si', {url: "/pregunta_d_si",templateUrl: "js/templates/pregunta_d_si.html"})
    .state('pregunta_e', {url: "/pregunta_e",templateUrl: "js/templates/pregunta_e.html"})
    .state('pregunta_e_si', {url: "/pregunta_e_si",templateUrl: "js/templates/pregunta_e_si.html"})
    .state('escalas', {url: "/escalas",templateUrl: "js/templates/escalas.html"})
    .state('escalas_a', {url: "/escalas_a",templateUrl: "js/templates/escalas_a.html"})
    .state('escalas_b', {url: "/escalas_b",templateUrl: "js/templates/escalas_b.html"})
    .state('escalas_c', {url: "/escalas_c",templateUrl: "js/templates/escalas_c.html"})
    .state('escalas_d', {url: "/escalas_d",templateUrl: "js/templates/escalas_d.html"})
    .state('manejo', {url: "/manejo",templateUrl: "js/templates/manejo.html"})
    .state('manejo_a', {url: "/manejo_a",templateUrl: "js/templates/manejo_a.html"}) 
    .state('manejo_b', {url: "/manejo_b",templateUrl: "js/templates/manejo_b.html"}) 
    .state('manejo_c', {url: "/manejo_c",templateUrl: "js/templates/manejo_c.html"}) 
    .state('manejo_d', {url: "/manejo_d",templateUrl: "js/templates/manejo_d.html"}) 
    .state('manejo_e', {url: "/manejo_e",templateUrl: "js/templates/manejo_e.html"})                     
    .state('about', {url: "/about",templateUrl: "js/templates/about.html"})
    .state('contact', {url: "/contact",templateUrl: "js/templates/contact.html"});
   $urlRouterProvider.otherwise("/home");

})
.controller('EscalasCtrl', function($scope) {
    $scope.total = 0;

    $scope.nino={
        a:{seleccionado:false, valor:1},
        b:{seleccionado:false, valor:1},
        c:{seleccionado:false, valor:2},
        d:{seleccionado:false, valor:1},
        e:{seleccionado:false, valor:3},
        f:{seleccionado:false, valor:3},
        g:{seleccionado:false, valor:2},
        h:{seleccionado:false, valor:2},
        i:{seleccionado:false, valor:3},
        j:{seleccionado:false, valor:2}
    };
   
    $scope.getTotalNinos = function(){
      $scope.total = 0;
        for(index in $scope.nino){
          if($scope.nino[index].seleccionado){
            var valor=$scope.nino[index].valor;
            $scope.total += valor;
          }
        }
    }

   $scope.adolescente={
        a:{seleccionado:false, valor:1},
        b:{seleccionado:false, valor:2},
        c:{seleccionado:false, valor:3},
        d:{seleccionado:false, valor:2},
        e:{seleccionado:false, valor:4},
        f:{seleccionado:false, valor:5},
        g:{seleccionado:false, valor:2},
        h:{seleccionado:false, valor:5},
        i:{seleccionado:false, valor:4},
        j:{seleccionado:false, valor:2}
    };
   
    $scope.getTotalAdolescentes = function(){
      $scope.total = 0;
        for(index in $scope.adolescente){
          if($scope.adolescente[index].seleccionado){
            var valor=$scope.adolescente[index].valor;
            $scope.total += valor;
          }
        }
    }

   $scope.adulto={
        a:{seleccionado:false, valor:3},
        b:{seleccionado:false, valor:3},
        c:{seleccionado:false, valor:2},
        d:{seleccionado:false, valor:4},
        e:{seleccionado:false, valor:5},
        f:{seleccionado:false, valor:4},
        g:{seleccionado:false, valor:2},
        h:{seleccionado:false, valor:3},
        i:{seleccionado:false, valor:3},
        j:{seleccionado:false, valor:2}
    };
   
    $scope.getTotalAdultos = function(){
      $scope.total = 0;
        for(index in $scope.adulto){
          if($scope.adulto[index].seleccionado){
            var valor=$scope.adulto[index].valor;
            $scope.total += valor;
          }
        }
    }    
   $scope.pmayor={
        a:{seleccionado:false, valor:2},
        b:{seleccionado:false, valor:2},
        c:{seleccionado:false, valor:3},
        d:{seleccionado:false, valor:3},
        e:{seleccionado:false, valor:1},
        f:{seleccionado:false, valor:2},
        g:{seleccionado:false, valor:4},
        h:{seleccionado:false, valor:5},
        i:{seleccionado:false, valor:3},
        j:{seleccionado:false, valor:5}
    };
   
    $scope.getTotalMayor = function(){
      $scope.total = 0;
        for(index in $scope.pmayor){
          if($scope.pmayor[index].seleccionado){
            var valor=$scope.pmayor[index].valor;
            $scope.total += valor;
          }
        }
    }
});
