interface Shape {
  area: (...args: number[]) => number;
  perimeter: (...args: number[]) => number;
}

const circle: Shape = {
  area: (radius: number) => Math.PI * radius ** 2,
     perimeter: (radius: number) => 2 * Math.PI * radius, 
};



const rectangle: Shape = {
  area: (length: number, breadth: number) => length * breadth,
  perimeter: (length: number, breadth: number) => 2 * (length + breadth),
};


console.log("Circle area:", circle.area(4));
console.log("Circle perimeter:", circle.perimeter(4));



console.log("Rectangle area:", rectangle.area(4, 6));
console.log("Rectangle perimeter:", rectangle.perimeter(4, 6));
