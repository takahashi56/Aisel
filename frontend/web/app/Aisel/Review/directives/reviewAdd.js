'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselReview
 * @description     ...
 */

define(['app'], function (app) {
    app.directive('aiselReviewAdd', ['$compile', 'Environment', 'resourceService',
        function ($compile, Environment, resourceService) {
            return {
                restrict: 'EA',
                scope: {
                    resourceName: '=',
                    resourceId: '='
                },
                link: function ($scope, element, attrs) {

                    var resource = new resourceService($scope.resourceName);

                    $scope.addReview = function (title, content) {
                        var params = {
                            resourceId: $scope.resourceId,
                            title: title,
                            content: content
                        };
                        resource.addReview(params);
                    };
                },
                templateUrl: '/app/Aisel/Review/views/directives/review-add.html'
            };
        }
    ]);
});
