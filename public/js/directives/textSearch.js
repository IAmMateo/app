define(function () {
	'use strict';

	var angular = require('angular');

	function TextSearch ($timeout, $window, $location, appLoader, api) {
		return {
			restrict: 'A',
			replace: true,
			template: '\
				<form ng-submit="goToSearch()" class="search-bar-wrap">\
					<i data-icon="i" class="search-icon"></i>\
					<input type="text" class="search-input" name="text" placeholder="Search" ng-model="query">\
					<div class="hover-background"></div>\
				</form>\
			',
			link: function (scope, elem, attrs) {
				var delay = attrs.delay || 1000;
				var timer = false;
				var backup, pages;

				scope.goToSearch = function () {
					$location.url('/search?text=' + scope.query);
				};

				scope.$watch('query', searching);

				function searching (value) {
					if (timer) {
						$timeout.cancel(timer);
					}

					timer = $timeout(function () {
						if (value) {
							$window.scrollTo(0,0);

							scope.search = true;
							makeItemsBackupOnce();
							appLoader.loading();

							api.get({ resource: 'search', text: value }, function (res) {
								scope.items = res.data;
								scope.nextPage = res.nextPage;
								appLoader.ready();
							});
						} else if (backup) {
							scope.items = scope.backup;
							scope.nextPage = pages;
							scope.search = false;
						}
					}, delay);
				}

				function makeItemsBackupOnce () {
					if (!backup) {
						scope.backup = angular.copy(scope.items);
						pages = scope.nextPage;
						backup = true;
					}
				}
			}
		};
	}

	return TextSearch;
});