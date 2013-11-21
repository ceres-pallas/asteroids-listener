var hat = require('hat');

var rack = hat.rack();

var Bag = module.exports = function(){
    this.elements = {};
}
Bag.prototype.add = function(element){
    var id = rack();
    this.elements[id] = element;
    return id;
}
Bag.prototype.forEach = function(callback){
    for (var id in this.elements) {
	callback.call(this, this.elements[id], id);
    };
}
Bag.prototype.remove = function(id){
    delete this.elements[id];
}
