var shapeList = [new Circle(10), new Triangle(16,9), new Rectangle(10, 6)];
var sum = 0;
shapeList.forEach(shape => {
    sum += shape.getArea();
});
console.log(sum);