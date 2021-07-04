// main class
class Renderer {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	constructor() {
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
		this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
	}

	protected _getCoordinateOffset(x: number, y: number): Float32Array {
		let _x: number = 0;
		let _y: number = 0;
		if (x && !isNaN(x)) _x = x;
		if (y && !isNaN(y)) _y = y;
		return new Float32Array([this.canvas.width / 2 + _x, this.canvas.height / 2 - _y]);
	}
}


const MY_RENDERER: Renderer = new Renderer();
