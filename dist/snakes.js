"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snakes = function () {
    function Snakes() {
        _classCallCheck(this, Snakes);

        console.log(this.matrixGenerator(10, 10));
    }

    _createClass(Snakes, [{
        key: "matrixGenerator",
        value: function matrixGenerator(rows, cols) {
            return [].concat(_toConsumableArray(new Array(rows))).map(function (row) {
                return [].concat(_toConsumableArray(new Array(cols))).map(function (col) {
                    return 0;
                });
            });
        }
    }, {
        key: "renderMatrix",
        value: function renderMatrix(snake) {}
    }]);

    return Snakes;
}();

var game = new Snakes();