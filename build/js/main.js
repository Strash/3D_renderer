"use strict";
// main class
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    Renderer.prototype._getCoordinateOffset = function (x, y) {
        var _x = 0;
        var _y = 0;
        if (x && !isNaN(x))
            _x = x;
        if (y && !isNaN(y))
            _y = y;
        return new Float32Array([this.canvas.width / 2 + _x, this.canvas.height / 2 - _y]);
    };
    return Renderer;
}());
var MY_RENDERER = new Renderer();
