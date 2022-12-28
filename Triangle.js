function Triangle(bottomEdge, height) {
    this.bottomEdge = bottomEdge;
    this.height = height;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.contructor = Triangle;
Triangle.prototype.getBottomEdge = function () {
    return this.bottomEdge;
};
Triangle.prototype.setBottomEdge = function (bottomEdge) {
    this.bottomEdge = bottomEdge;
};
Triangle.prototype.getHeight= function () {
    return this.height;
};
Triangle.prototype.setHeight = function (height) {
    this.height = height;
};
Triangle.prototype.getArea = function () {
    return (this.bottomEdge / 2) * this.height;
};