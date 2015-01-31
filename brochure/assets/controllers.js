var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log('Init controller');

        $scope.projects = {};

        $http.get(
            LinkServer.Url('brochure', 'getProjects')
        ).success(function (data) {
            if(data._code === 200) {
                $scope.projects = data._response;

                angular.forEach($scope.projects, function(p){
                    console.log(p);
                    // console.log(p.galery[0].url);
                });
            }
        });

        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $lang[lang];
                localStorage.lang   = lang;
            }
        };
    }]
);

