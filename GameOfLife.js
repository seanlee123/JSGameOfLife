// Generated by CoffeeScript 1.6.3
(function() {
  var c, circle, context, fillRect, translate;

  translate = function(x, y) {
    return context.translate(x, y);
  };

  fillRect = function(width, height) {
    return context.fillRect(0, 0, width, height);
  };

  circle = function(radius) {
    return context.arc(0, 0, radius, 0, 2 * Math.PI, false);
  };

  c = document.getElementById("myCanvas");

  context = c.getContext("2d");

  context.fillStyle = "#FF0000";

  translate(50, 50);

  circle(10);

}).call(this);
