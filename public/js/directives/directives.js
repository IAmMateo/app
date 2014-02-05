define(function (require) {
	'use strict';

	require('ngProgressLite');

	var angular = require('angular');
	var directives = angular.module('directives', ['ngProgressLite']);

	directives.directive('toggleSwitcher', require('./toggleSwitcher'));
	directives.directive('textSearch', require('./textSearch'));
	directives.directive('linkify', require('./linkify'));
	directives.directive('stickyAt', require('./stickyAt'));
	directives.directive('dropdownMenu', require('./dropdownMenu'));
	directives.directive('shareOn', require('./shareOn'));
	directives.directive('touchy', require('./touchy'));
	directives.directive('avatarLoad', require('./avatarLoad'));
	directives.directive('lazyAutocomplete', require('./lazyAutocomplete'));

	return directives;
});