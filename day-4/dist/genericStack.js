"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle = {
    area: (radius) => Math.PI * radius ** 2,
    perimeter: (radius) => 2 * Math.PI * radius,
};
const rectangle = {
    area: (length, breadth) => length * breadth,
    perimeter: (length, breadth) => 2 * (length + breadth),
};
console.log("Circle area:", circle.area(4));
console.log("Circle perimeter:", circle.perimeter(4));
console.log("Rectangle area:", rectangle.area(4, 6));
console.log("Rectangle perimeter:", rectangle.perimeter(4, 6));
