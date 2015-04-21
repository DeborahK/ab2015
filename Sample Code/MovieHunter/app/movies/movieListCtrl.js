(function () {
    "use strict";

    angular
    .module("movieHunter")
    .controller("MovieListCtrl",
                ["movieResource",
                    MovieListCtrl]);

    function MovieListCtrl(movieResource) {
        var vm = this;

        vm.movies = [];
        vm.title = "Search by Movie Title";
        vm.showImage = false;
        vm.message = "";

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

        movieResource.query(
            function (data) {
                vm.movies = data;
            },
            function (response) {
                vm.message = response.message + "\r\n";
                if (response.data && response.data.exceptionMessage)
                    vm.message += response.data.exceptionMessage;
            }
       );












        // Using OData to skip/take
        //movieResource.query({$skip:1, $top:3},
        //    function (data) {
        //        vm.movies = data;
        //    },
        //    function (response) {
        //        vm.message = response.message + "\r\n";
        //        if (response.data && response.data.exceptionMessage)
        //            vm.message += response.data.exceptionMessage;
        //    });

        // Using OData to filter
        //movieResource.query({
        //        $filter: "contains(Title, 'The') and StarRating ge 4.8",
        //        $orderby: "StarRating desc"
        //    },
        //        function (data) {
        //        vm.movies = data;
        //    },
        //    function (response) {
        //        vm.message = response.message + "\r\n";
        //        if (response.data && response.data.exceptionMessage)
        //            vm.message += response.data.exceptionMessage;
        //    });
    }


}());

