var Bag = require('./bag');

var Listener = module.exports = function(){
    this._callbacksFor = {};
};

Listener.prototype.addListener = function(trigger, callback){
    this.callbacksFor(trigger).add(callback);
};
Listener.prototype.removeListener = function(){};
Listener.prototype.notifyOf = function(trigger){
    this.callbacksFor(trigger).forEach(function(callback){
	callback.call(this);
    })
};

Listener.prototype.callbacksFor = function(trigger){
    if (!this._callbacksFor[trigger]) {
	this._callbacksFor[trigger] = new Bag();
    }
    return this._callbacksFor[trigger];
}
