/*jslint esnext: true*/
(function () {
    'use strict';

    Math.randomInt = function (min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    };

    function Input () { this.value = true; }
    Input.prototype.set = function (value) { this.value = value; };
    Input.prototype.get = function () { return this.value; };

    function Cell (a, b) {
        this.a = a;
        this.b = b;
    }
    Cell.prototype.get = function () {
        return !(this.a.get() && this.b.get());
    };

    function Brain (input_count, cell_count) {
        this.all = [];
        for(var i = 0; i < input_count; i++) {
            this.all.push(new Input());
        }
        for(var j = 0; j < cell_count; j++) {
            var a = this.all[Math.randomInt(0, this.all.length)];
            var b = this.all[Math.randomInt(0, this.all.length)];
            this.all.push(new Cell(a, b));
        }
    }
    Brain.prototype.read = function () {
    };
    Brain.prototype.write = function () {
    };
    var myBrain = new Brain(10, 10);
    console.log(myBrain.all[19].get());
}());
