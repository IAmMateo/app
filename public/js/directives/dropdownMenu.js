define(function (require) {
	'use strict';

	var angular = require('angular');

	function DropdownMenu ($document) {
		return {
			restrict: 'A',
			replace: true,
			template: '\
				<div class="account-show" ng-click="toggleMenu()">\
					<ul class="dropdown">\
						<li><a href="/inbox" class="menu-link">Inbox</a></li>\
						<li><a href="/settings" class="menu-link">Account settings</a></li>\
						<li><a href="/logout" class="menu-link" target="_self">Logout</a></li>\
					</ul>\
				</div>',
			link: function (scope, elem, attrs) {
				var $parent = elem.parent();

				scope.toggleMenu = function () {
					$parent.toggleClass('active');
				};

				$document.bind('click', function (e) {
					var target = angular.element(e.target.parentElement).hasClass('account-info');

					if (!target) {
						$parent.removeClass('active');
					}
				});
			}
		};
	}

	return DropdownMenu;
});