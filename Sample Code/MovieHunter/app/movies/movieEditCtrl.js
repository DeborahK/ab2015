(function () {
    "use strict";

    angular
        .module("movieHunter")
        .controller("MovieEditCtrl",
                    ["movieResource",
                        "$routeParams",
                        "$location",
                     MovieEditCtrl]);

    function MovieEditCtrl(movieResource, $routeParams, $location) {
        var vm = this;

        vm.Id = $routeParams.movieId;
        vm.movie = "";
        vm.title = "";
        vm.message = "";

        movieResource.get({ id: vm.Id },
            function (data) {
                vm.movie = data;

                if (vm.movieId) {
                    vm.title = vm.movie.title
                }
                else {
                    vm.title = "New Movie";
                }
            });

        vm.submit = function (isValid) {
            if (isValid) {
                vm.movie.$save(function (data) {
                    vm.message = "Save successful.";
                })
            } else {
                vm.message = "Please correct the validation errors first.";
            }
        };

        vm.cancel = function () {
            $location.path("/searchByTitle")
        };
    }
}());