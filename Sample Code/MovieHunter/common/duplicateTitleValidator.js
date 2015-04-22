(function () {
    "use strict";

    angular
        .module("common.directives")
        .directive("duplicateTitleValidator",
                    ["$q",
                     "movieResource",
                     duplicateTitleValidator]);

    function duplicateTitleValidator($q, movieResource) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                var movieId = attrs.duplicateTitleValidator;

                ngModel.$asyncValidators.duplicateTitle = function (modelValue) {
                    var defer = $q.defer();

                    movieResource.get({ title: modelValue },
                        function (response) {
                            if (response.movieId != movieId) {
                                // Found a row
                                defer.reject("Exists");
                            } else {
                                // Did not find a row
                                defer.resolve();
                            }
                        },
                        function (response) {
                            // Did not find a row
                            defer.resolve();
                        }
                    );
                    return defer.promise;
                }
            }
        }
    }

}());