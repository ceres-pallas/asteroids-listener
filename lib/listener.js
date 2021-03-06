var Bag = require('asteroids-bag');

var Listener = module.exports = function(){
    this._callbacksFor = {};
    this._id2trigger = {};
};

Listener.prototype.addListener = function(trigger, callback){
    var id = this.callbacksFor(trigger).add(callback);
    this._id2trigger[id] = trigger;
    return id;

};
Listener.prototype.removeListener = function(id){
    var trigger = this._id2trigger[id];
    this.callbacksFor(trigger).remove(id);
    delete this._id2trigger[id];
};
Listener.prototype.notifyOf = function(trigger){
    var argumentsForCallback = Array.prototype.slice.call(arguments, 1);
    this.callbacksFor(trigger).forEach(function(callback){
	callback.apply(this, argumentsForCallback);
    });
};

Listener.prototype.callbacksFor = function(trigger){
    if (!this._callbacksFor[trigger]) {
	this._callbacksFor[trigger] = new Bag();
    }
    return this._callbacksFor[trigger];
}
