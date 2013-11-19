(function (exports) {
    'use strict';

    function constructorIsDecendantOf(constructorName) {
        var pointer = this.parentConstructor,
            result = false;

        if (constructorName instanceof Function) {
            constructorName = constructorName.name;
        }

        while (true) {
            if (pointer instanceof Function) {
                if (pointer && pointer.name === constructorName) {
                    result = true;
                    break;
                }

                pointer = pointer.prototype.parentConstructor;
            } else {
                break;
            }
        }

        return result;
    };

    function extend(constructor1, constructor2) {

        var name;

        if (!(constructor1 instanceof Function) || !(constructor2 instanceof Function)) {
            throw new Error("Both arguments needs to be constructor functions");
        }

        for (name in constructor2.prototype) {
            if (constructor2.prototype.hasOwnProperty(name)) {
                constructor1.prototype[name] = constructor2.prototype[name];
            }
        }

        constructor1.prototype.parentConstructor =  constructor2;
        constructor1.prototype.constructorIsDecendantOf =  constructorIsDecendantOf;
    }

    exports.extend = extend;

}(this.window ? this.window : module.exports));
