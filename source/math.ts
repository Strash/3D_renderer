interface IVector2 {
	x: number;
	y: number;
}


interface IVector3 extends IVector2 {
	z: number;
}


export class Vector2 implements IVector2 {
	x: number;
	y: number;

	constructor();
	constructor(number: number);
	constructor(vector: Vector2);
	constructor(x: number, y: number);
	constructor(x?: number | Vector2, y?: number) {
		// два аргумента number
		if (x !== undefined && typeof (x) == "number" && y !== undefined) {
			this.x = x;
			this.y = y;
		// один аргумент number
		} else if (x !== undefined && typeof (x) == "number" && y == undefined) {
			this.x = x;
			this.y = x;
		// один аргумент Vector2
		} else if (x !== undefined && x instanceof Vector2) {
			this.x = x.x;
			this.y = x.y;
		// нет ни одного аргумента
		} else {
			this.x = 0;
			this.y = 0;
		}
	}

	getDistance(target: Vector2): number {
		return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2));
	}
}


export class Vector3 implements IVector3 {
	x: number;
	y: number;
	z: number;

	constructor();
	constructor(number: number);
	constructor(vector: Vector3);
	constructor(vector: Vector2, z: number);
	constructor(x: number, vector: Vector2);
	constructor(x: number, y: number, z: number);
	constructor(x?: number | Vector2 | Vector3, y?: number | Vector2, z?: number) {
		// все аргументы и все number
		if (x !== undefined && typeof (x) == "number" && y !== undefined && typeof (y) == "number" && z !== undefined && typeof (z) == "number") {
			this.x = x;
			this.y = y;
			this.z = z;
		// два аргумента, первый Vector2, второй number
		} else if (x !== undefined && x instanceof Vector2 && y !== undefined && typeof (y) == "number") {
			this.x = x.x;
			this.y = x.y;
			this.z = y;
		// два аргумента, первый number, второй Vector2
		} else if (x !== undefined && typeof (x) == "number" && y !== undefined && y instanceof Vector2) {
			this.x = x;
			this.y = y.x;
			this.z = y.y;
		// один аргумент number
		} else if (x !== undefined && typeof (x) == "number" && y == undefined && z == undefined) {
			this.x = x;
			this.y = x;
			this.z = x;
		// один агрумент Vector3
		} else if (x !== undefined && x instanceof Vector3) {
			this.x = x.x;
			this.y = x.y;
			this.z = x.z;
		// нет ни одного аргумента
		} else {
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
	}

	getDistance(target: Vector3): number {
		return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2) + Math.pow(this.z - target.z, 2));
	}
}

// вычисление длины гипотенузы
export function hypotenuse(width: number, height: number): number {
	return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

// радианы в градусы
export function toDegrees(radians: number): number {
	return radians * 180 / Math.PI;
}

// сдвиг координаты в центр канваса
export function convertCoordinates(canvasSize: Vector2, position: Vector2): Vector2 {
	return new Vector2(canvasSize.y / 2 + position.x, canvasSize.y / 2 - position.y);
}

