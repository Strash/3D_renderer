export class Vector2 {
    constructor(x, y) {
        // два аргумента number
        if (x !== undefined && typeof (x) == "number" && y !== undefined) {
            this.x = x;
            this.y = y;
            // один аргумент number
        }
        else if (x !== undefined && typeof (x) == "number" && y == undefined) {
            this.x = x;
            this.y = x;
            // один аргумент Vector2
        }
        else if (x !== undefined && x instanceof Vector2) {
            this.x = x.x;
            this.y = x.y;
            // нет ни одного аргумента
        }
        else {
            this.x = 0;
            this.y = 0;
        }
    }
    getDistance(target) {
        return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2));
    }
}
export class Vector3 {
    constructor(x, y, z) {
        // все аргументы и все number
        if (x !== undefined && typeof (x) == "number" && y !== undefined && typeof (y) == "number" && z !== undefined && typeof (z) == "number") {
            this.x = x;
            this.y = y;
            this.z = z;
            // два аргумента, первый Vector2, второй number
        }
        else if (x !== undefined && x instanceof Vector2 && y !== undefined && typeof (y) == "number") {
            this.x = x.x;
            this.y = x.y;
            this.z = y;
            // два аргумента, первый number, второй Vector2
        }
        else if (x !== undefined && typeof (x) == "number" && y !== undefined && y instanceof Vector2) {
            this.x = x;
            this.y = y.x;
            this.z = y.y;
            // один аргумент number
        }
        else if (x !== undefined && typeof (x) == "number" && y == undefined && z == undefined) {
            this.x = x;
            this.y = x;
            this.z = x;
            // один агрумент Vector3
        }
        else if (x !== undefined && x instanceof Vector3) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
            // нет ни одного аргумента
        }
        else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
    }
    getDistance(target) {
        return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2) + Math.pow(this.z - target.z, 2));
    }
}
// вычисление длины гипотенузы
export function hypotenuse(width, height) {
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}
// радианы в градусы
export function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
// сдвиг координаты в центр канваса
export function convertCoordinates(canvasSize, position) {
    return new Vector2(canvasSize.y / 2 + position.x, canvasSize.y / 2 - position.y);
}
