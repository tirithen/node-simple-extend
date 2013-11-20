# node-simple-extend

Simple extend is a JavaScript constructor inheritance utility. The utility can be used in both browser environments and node environments. It strives to use as much of the standard JavaScript functionality as possible.

## Installation
To use Simple extend with node.js simply use npm:
    
    $ npm install node-simple-extend

To use Simple extend in a browser environment, simply include the simple-extend.js file in a script tag.

## Usage

To use Simple extend you need to do two things:

1. Run the method extend with the first argument as the constructor you want to extend and the second argument as the constructor you like to inherit from.
2. Inside the child constructor, call the parent constructor with Parent.call(this, *argument1, argument2*);

Below is a simple usage example:

    function Parent() {}
    Parent.prototype.swim = function () {
        console.log(this.constructor.name + ' is swimming.');
    }

    function Child() {
        Parent.call(this);
    }
    extend(Child, Parent);

    var animal = new Child();
    animal.swim();

For a bit more involved example, look at the example/example.js file.

## License

The code for this module is released under the MIT license, for more details read the LICENSE file that is provided in this repository.
