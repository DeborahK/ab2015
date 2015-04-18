(function () {
    "use strict";

    angular
        .module("movieHunter")
        .controller("MovieDetailCtrl",
                    ["movieResource",
                        "$routeParams",
                     MovieDetailCtrl]);

    function MovieDetailCtrl(movieResource, $routeParams) {
        var vm = this;

        vm.movie = '';

        movieResource.get({ movieId: $routeParams.movieId },
            function (data) {
                vm.movie = data;
            });
    }
}());