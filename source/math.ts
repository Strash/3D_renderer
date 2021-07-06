interface IVector2 {
	x: number;
	y: number;
	getDistance<T>(target: T): T;
}

export class Vector2 implements IVector2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	// TODO: имплементация
	getDistance<Vector2>(target: Vector2): Vector2 {
		return target;
	}
}


interface IVector3 extends IVector2 {
	z: number;
}

export class Vector3 implements IVector3 {
	x: number;
	y: number;
	z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	// TODO: имплементация
	getDistance<Vector3>(target: Vector3): Vector3 {
		return target;
	}
}


export function hypotenuse(width: number, height: number): number {
	return Math.sqrt( Math.pow(width, 2) + Math.pow(height, 2) );
}

export function toDegrees(radians: number): number {
	return radians * 180 / Math.PI;
}
