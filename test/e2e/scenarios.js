'use strict';

describe('MahjongLearn App', function() {
	
	describe('Home page', function() {
	
		beforeEach(function() {
			browser().navigateTo('/');
		});
		
		it('should load all the localized texts', function() {
			
		});
	});
	
	describe('Welcome page', function() {
		beforeEach(function() {
			browser().navigateTo('/#/welcome');
		});
		
		it('should navigate to the welcome page', function() {
			expect(browser().location().path()).toBe('/welcome');
		});
	});
		
});