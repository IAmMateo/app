define(function (require) {
	'use strict';

	function Intercom ($rootScope) {
		return {
			boot: function () {
				$rootScope.$watch('user', function (user) {
					if (user && window.appConfig.env === 'production') {
						window.Intercom('boot', {
							app_id: '8aa471d88de92f2f1f1a2fc08438fc69f4d9146e',
							email: user.email,
							created_at: Math.round(new Date().getTime()/1000),
							widget: {activator: '#IntercomDefaultWidget'}
						});
					}
				});
			}
		};
	}

	return Intercom;
});