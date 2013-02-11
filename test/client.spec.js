// client.spec.js

describe('Sockly', function() {
	
	sockly = new Sockly();

	it('should have an instantiation', function() {
		expect(sockly).toBeDefined();
	});

	it('should have a connect method', function() {
		expect(sockly.connect).toBeDefined();
	});

	it('should have a send method', function() {
		expect(sockly.send).toBeDefined();
	});

	it('should have a subscribe method', function() {
		expect(sockly.subscribe).toBeDefined();
	});


	describe('connect', function() {

	});

	describe('send', function() {

	});

	describe('subscribe', function() {

	});

});