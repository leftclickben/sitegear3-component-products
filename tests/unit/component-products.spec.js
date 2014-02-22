/*jslint node: true, nomen: true, white: true, unparam: true*/
/*globals describe, beforeEach, afterEach, it, expect, spyOn*/
/*!
 * Sitegear3
 * Copyright(c) 2014 Ben New, Sitegear.org
 * MIT Licensed
 */

(function (_, defaultComponent) {
	"use strict";
	require('../setupTests');

	describe('Component: default', function () {
		it('Exports a function', function () {
			expect(_.isFunction(defaultComponent)).toBeTruthy();
		});
	});
}(require('lodash'), require('../../')));
