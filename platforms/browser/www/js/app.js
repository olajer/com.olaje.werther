angular.module('app', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "js/templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "js/templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.pregunta_a', {
      url: "/pregunta_a",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_a.html"
        }
      }
    })
    .state('tabs.pregunta_a_si', {
      url: "/pregunta_a_si",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_a_si.html"
        }
      }
    })
      .state('tabs.pregunta_a_no', {
      url: "/pregunta_a_no",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_a_no.html"
        }
      }
    })
    .state('tabs.pregunta_b', {
      url: "/pregunta_b",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_b.html"
        }
      }
    })
    .state('tabs.pregunta_b_si', {
      url: "/pregunta_b_si",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_b_si.html"
        }
      }
    })
      .state('tabs.pregunta_b_no', {
      url: "/pregunta_b_no",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_b_no.html"
        }
      }
    }) 
    .state('tabs.pregunta_c', {
      url: "/pregunta_c",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_c.html"
        }
      }
    })
    .state('tabs.pregunta_c_si', {
      url: "/pregunta_c_si",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_c_si.html"
        }
      }
    })
      .state('tabs.pregunta_c_no', {
      url: "/pregunta_c_no",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_c_no.html"
        }
      }
    })
    .state('tabs.pregunta_d', {
      url: "/pregunta_d",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_d.html"
        }
      }
    })
    .state('tabs.pregunta_d_si', {
      url: "/pregunta_d_si",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_d_si.html"
        }
      }
    })
      .state('tabs.pregunta_d_no', {
      url: "/pregunta_d_no",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_d_no.html"
        }
      }
    })
    .state('tabs.pregunta_e', {
      url: "/pregunta_e",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_e.html"
        }
      }
    })
    .state('tabs.pregunta_e_si', {
      url: "/pregunta_e_si",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_e_si.html"
        }
      }
    })
      .state('tabs.pregunta_e_no', {
      url: "/pregunta_e_no",
      views: {
        'home-tab': {
          templateUrl: "js/templates/pregunta_e_no.html"
        }
      }
    })                     
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "js/templates/about.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "js/templates/contact.html"
        }
      }
    });
   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  $scope.lol = "foo";
  
  $scope.baz = function() {
    $scope.lol = "bar";
  }
});
