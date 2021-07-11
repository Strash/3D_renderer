import { Vector2, Vector3, hypotenuse, toDegrees, convertCoordinates } from "./math.js";
// camera
class Camera {
    constructor(_canvas, position, focalLength) {
        this._canvas = _canvas;
        this._canvas = _canvas;
        this.position = position;
        this.focalLength = focalLength;
    }
    get FOV() {
        return 2 * Math.atan(hypotenuse(this._canvas.width, this._canvas.height) / (this.focalLength * 2));
    }
}
// viewport
class Viewport {
    constructor(_canvas) {
        this._canvas = _canvas;
        this._canvas = _canvas;
    }
    get width() {
        return this.height * this.ratio;
    }
    get height() {
        return this.ratio > 1 ? 1 : 1 / this.ratio;
    }
    get ratio() {
        return this._canvas.width / this._canvas.height;
    }
    get rect() {
        return new Vector2(this.width, this.height);
    }
    viewportCoordinates(canvasPixelPosition) {
        let offsetedPixel = convertCoordinates(new Vector2(this._canvas.width, this._canvas.height), canvasPixelPosition);
        let v_x = offsetedPixel.x * (this.width / this._canvas.width);
        let v_y = offsetedPixel.y * (this.height / this._canvas.height);
        return new Vector2(v_x, v_y);
    }
}
// main class
class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.viewport = new Viewport(this.canvas);
        this.camera = new Camera(this.canvas, new Vector3(0, 0, 0), 70);
        console.log(toDegrees(this.camera.FOV));
    }
}
let canvas = document.getElementById("canvas");
new Renderer(canvas);
