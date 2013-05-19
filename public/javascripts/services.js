'use strict';

angular.module('services', ['ngResource'])
	.factory('User', function($resource) {
		return $resource('/:action', 
			{},
			{
				login: { method: 'POST', isArray: false, params: { action: 'login' } },
				list : { method: 'GET', isArray: false, params: { action: 'users'} }
			}
		);
	});