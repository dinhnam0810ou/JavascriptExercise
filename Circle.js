function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getRadius = function () {
    return this.radius;
};
Circle.prototype.setRadius = function (radius) {
    this.radius = radius;
};
Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};
