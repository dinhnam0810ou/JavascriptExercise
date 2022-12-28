function Rectangle(lenght, width) {
    this.lenght = lenght;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getLenght = function () {
    return this.lenght;
};
Rectangle.prototype.setLenght = function (lenght) {
    this.lenght = lenght;
};
Rectangle.prototype.getWidth = function () {
    return this.width;
};
Rectangle.prototype.setWidth = function (width) {
    this.width = width;
};
Rectangle.prototype.getArea = function () {
    return this.lenght * this.width;
};