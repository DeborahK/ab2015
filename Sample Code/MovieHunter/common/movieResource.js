(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("movieResource",
                ["$resource",
                 "appSettings",
                    productResource]);

    function productResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/movies/:id");
    }
}());