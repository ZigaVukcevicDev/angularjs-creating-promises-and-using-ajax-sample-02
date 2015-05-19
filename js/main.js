angular.module('demo', []);

angular.module('demo').controller('DemoController', function($q, $timeout) {

    var randomLoterry = getRandom(1, 100);
    var randomTime = getRandom(2000, 5000);

    $timeout(getRandom(1, 100), randomTime).then(function(result) {
        console.log(randomLoterry);
        console.log(randomTime);    
        alert(result);
    }, function(error) {
        alert(error);
    });

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    };

});