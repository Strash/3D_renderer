export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // TODO: имплементация
    getDistance(target) {
        return target;
    }
}
export class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // TODO: имплементация
    getDistance(target) {
        return target;
    }
}
export function hypotenuse(width, height) {
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}
export function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
