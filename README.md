asteroids-listener [![Build Status](https://travis-ci.org/ceres-pallas/asteroids-listener.png?branch=master)](https://travis-ci.org/ceres-pallas/asteroids-listener)
==================

Custom implementation of the observer pattern tailored for Asteroids


Examples
--------

### Direct

```javascript
var Listener = require('asteroids-listener');

var listener = new Listener();
var identifier = listener.addListener('change', function(){
    console.log('a change occured');
})

listener.notifyOf('change');

listener.removeListener(identifier);

listener.notifyOf('change');
```

Output:

```
a change occured
```

### Prototype

```javascript
var Listener = require('asteroids-listener');

var Discussion = function(){
    Listener.call(this);
}
Discussion.prototype = new Listener();
Discussion.prototype.agreement = function(){
    this.notifyOf('agreement');
};

var discussion = new Discussion();
discussion.addListener('agreement', function Stakeholder(){
    console.log('celebrating');
})

discussion.agreement();
```

Output:

```
celebrating
```
