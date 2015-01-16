var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope',
    function($scope) {
        console.log('Init controller');

        if(localStorage.lang == null){
            $scope.lang         = $lang.es;
            localStorage.lang   = 'es';
        }else{
            $scope.lang = $lang[localStorage.lang];
        }            

        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $lang[lang];
                localStorage.lang   = lang;
            }
        };

        $scope.navigate = function(id){
            $('html, body').stop().animate({
                scrollTop: $(id).offset().top
            }, 500);
        };
    }]
);

