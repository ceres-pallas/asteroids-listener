var expect = require('chai').expect;

var Listener = require('../lib/listener');

describe('Listener', function(){
    it('should exist', function(){
	expect(Listener).to.not.be.undefined;
    });

    it('should be a constructor', function(){
	expect(Listener).to.be.a('function');
    });

    describe('object', function(){
	var listener;

	beforeEach(function(){
	    listener = new Listener();
	});

	['addListener', 'removeListener', 'notifyOf'].forEach(function(methodName){
	    it('should respond to ' + methodName, function(){
		expect(listener).to.respondTo(methodName);
	    });
	});
    });

    describe('interaction', function(){
	var listener;

	beforeEach(function(){
	    listener = new Listener();
	});

	it('should notify callbacks when registered', function(done){
	    var trigger = 'register';
	    listener.addListener(trigger, function(){ done(); });

	    listener.notifyOf(trigger);
	});

	it('should notify callbacks with arguments when registered', function(){
	    var trigger = 'register';

	    listener.addListener(trigger, function(a,b){ 
		expect(a).to.equal('a');
		expect(b).to.equal('b');
	    });

	    listener.notifyOf(trigger, 'a', 'b');
	});

	it('should remove registered callbacks', function(done){
	    var trigger = 'remove';
	    var id = listener.addListener(trigger, function(){ expect(false).to.be.true; });
	    listener.removeListener(id);
	    listener.addListener(trigger, function(){ done(); });
	    
	    listener.notifyOf(trigger);
	});
    });
});
