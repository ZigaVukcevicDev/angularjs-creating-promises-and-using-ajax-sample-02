angular.module('demo', []);

angular.module('demo').controller('DemoController', function($q, $timeout, $scope) {
    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    };

    function makePromise() {
        var deffered = $q.defer();

        randomNumber = getRandom(1, 100);

        for (var i = 0; i < $scope.number.length; i++) {
            if($scope.number[i] == randomNumber) {
                randomNumber = getRandom(1, 100);
            }
        };

        randomTime = getRandom(2000, 5000);

        $timeout(function() {
            deffered.resolve({ number: randomNumber, time: randomTime });
        }, randomTime);

        return deffered.promise;
    }

    $scope.firePromise = function() {

        $scope.number = [];
        $scope.time = [];

        var promise = makePromise();
        promise.then(function(response) {
            console.log('promise fired 1');

            $scope.number.push(response.number);
            $scope.time.push(response.time);
            
            return makePromise();
        }, function(error) {
        }).then(function(response) {
            console.log('promise fired 2');

            $scope.number.push(response.number);
            $scope.time.push(response.time);
            
            return makePromise();
        }, function(error) {
        }).then(function(response) {
            console.log('promise fired 3');

            $scope.number.push(response.number);
            $scope.time.push(response.time);
            
            return makePromise();
        }, function(error) {
        });         
    }
});