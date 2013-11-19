if (!this.window) { // Require simple extend if not in a browser environment
    var extend = require('../simple-extend.js').extend;
}

(function () {
    'use strict';

    // Define Animal constructor
    function Animal(options) {
        var self = this;

        // If initial parameters are passed to the constructor
        if (typeof options === 'object') {
            Object.keys(options).forEach(function (key) {
                self[key] = options[key];
            });
        }
    }

    // Create getters and setters on Animal for the following keys
    ['name', 'legs', 'color'].forEach(function (key) {
        var keyCapitalized = key.charAt(0).toUpperCase() + key.slice(1);

        Animal.prototype['set' + keyCapitalized] = function (value) {
            this[key] = value;
        };

        Animal.prototype['get' + keyCapitalized] = function () {
            return this[key];
        };
    });

    Animal.prototype.describe = function () {
        console.log(this.getName() + ' is a ' + this.getColor() + ' ' + this.constructor.name +
                    ' that has ' + this.getLegs() + ' legs and is a kind of ' +
                    this.parentConstructor.name + '.');
    };

    // Define Bird constructor that extends Animal
    function Bird(options) {
        this.legs = 2;
        Animal.call(this, options); // Run parent constructor
    }
    extend(Bird, Animal); // Extend Bird with Animal

    Bird.prototype.fly = function () {
        console.log(this.getName() + ' takes off in flight.');
    };


    // Define Dove constructor that extends Bird
    function Dove(options) {
        this.color = 'white';
        Bird.call(this, options); // Run parent constructor
    }
    extend(Dove, Bird); // Extend Bird with Animal


    // Define Crow constructor that extends Bird
    function Crow(options) {
        this.color = 'black';
        Bird.call(this, options); // Run parent constructor
    }
    extend(Crow, Bird); // Extend Bird with Animal


    // Now create two birds
    var bird1, bird2, bird3;

    bird1 = new Dove({ name: 'Lucky', color: 'grey' });
    bird2 = new Dove({ name: 'Free' });
    bird3 = new Crow();

    bird3.setName('Clever');

    bird1.describe();
    bird2.describe();
    bird3.describe();
    bird1.fly();

    if (bird2.constructorIsDecendantOf(Animal)) {
        console.log(bird2.getName() + ' is a kind of Animal.');
    } else {
        console.log(bird2.getName() + ' is not an Animal.');
    }
}());
