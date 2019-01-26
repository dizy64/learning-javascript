$(document).ready(function() {
  'use strict';
  console.log('main.js loaded');

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';

  var text = new PointText(200, 210);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';

  paper.view.draw();

});
