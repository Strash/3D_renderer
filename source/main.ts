import { Vector2, Vector3, hypotenuse, toDegrees } from "./math.js";


// camera
class Camera {
	position: Vector3;
	focalLength: number;

	constructor(private _canvas: HTMLCanvasElement, position: Vector3, focalLength: number) {
		this._canvas = _canvas;
		this.position = position;
		this.focalLength = focalLength;
	}

	get FOV(): number {
		return 2 * Math.atan(hypotenuse(this._canvas.width, this._canvas.height) / (this.focalLength * 2));
	}
}

// viewport
class Viewport {
	constructor(private _canvas: HTMLCanvasElement) {
		this._canvas = _canvas;
	}

	get width(): number {
		return this.height * this.ratio;
	}

	get height(): number {
		return this.ratio > 1 ? 1 : 1 / this.ratio;
	}

	get ratio(): number {
		return this._canvas.width / this._canvas.height;
	}

	get rect(): Vector2 {
		return new Vector2(this.width, this.height);
	}

	protected _getCoordinateOffset(position: Vector2): Vector2 {
		return new Vector2(this._canvas.width / 2 + position.x, this._canvas.height / 2 - position.y);
	}

	viewportCoordinates(canvasPixelPosition: Vector2): Vector2 {
		let offsetedPixel: Vector2 = this._getCoordinateOffset(canvasPixelPosition);
		let v_x: number = offsetedPixel.x * (this.width / this._canvas.width);
		let v_y: number = offsetedPixel.y * (this.height / this._canvas.height);
		return new Vector2(v_x, v_y);
	}
}


// main class
class Renderer {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	viewport: Viewport;
	camera: Camera;

	constructor() {
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.viewport = new Viewport(this.canvas);
		this.camera = new Camera(this.canvas, new Vector3(0, 0, 0), 70);
		console.log(toDegrees(this.camera.FOV))
	}
}


new Renderer();
