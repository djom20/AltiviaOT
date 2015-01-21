angular.module('App.controllers', [])

    .controller('projectsController', ['$scope', '$location', '$http', function($scope, $location, $http){
    	// $scope.partialURL = 'partials/projects.html';
        $scope.menu_active = 1;
    }])

    .controller('profileController', ['$scope', '$location', function($scope, $location){
    	// $scope.partialURL = 'partials/projects.html';
        $scope.menu_active = 2;
    }])

    .controller('enterpriseController', ['$scope', '$location', function($scope, $location){
    	// $scope.partialURL = 'partials/projects.html';
        $scope.menu_active = 3;
    }])

    .controller('skillsController', ['$scope', '$location', function($scope, $location){
        // $scope.partialURL = 'partials/skills.html';
        $scope.menu_active = 4;
    }])

    .controller('LangController', ['$scope', '$location', function($scope, $location){
    	console.log('Init controller');

        if(localStorage.lang == null){
            $scope.lang         = $lang.es;
            localStorage.lang   = 'es';
        }else{
            $scope.lang = $lang[localStorage.lang];
        }

        console.log('default', $scope.lang);
        
        $scope.changeLang = function(lang){
            console.log(lang);
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $lang[lang];
                localStorage.lang   = lang;
            }
        };
    }]);