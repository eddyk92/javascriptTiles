function makeGrid(color) {
    var grid = document.createElement("div");
    grid.style.width = "1.1%";
    grid.style.paddingBottom = "1.1%";
    grid.style.float = "left";
    grid.style.background = color;
    grid.style.borderStyle = 'solid';
    grid.style.borderColor = 'silver';
    grid.addEventListener("click", function() {
      console.log("color");
    });

    return grid;
}


function createGrid(n) {
  var grid = null;
  for (var i = 0; i < n; i++) {
     color = "white";

  //   color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

//   if (i % 2 === 0) {

//        color = "black";
//   }  else {
//        color = "red";
// }

    grid = makeGrid(color);

    document.body.appendChild(grid);
  }

}


createGrid(5005);








// function getSquare(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
//         y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
//     };
// }

// function drawGrid(context) {
//     for (var x = 0.5; x < 1001; x += 10) {
//       context.moveTo(x, 0);
//       context.lineTo(x, 1000);
//     }
    
//     for (var y = 0.5; y < 1001; y += 10) {
//       context.moveTo(0, y);
//       context.lineTo(1000, y);
//     }
    
//     context.strokeStyle = "#ddd";
//     context.stroke();
// }

// function fillSquare(context, x, y){
//     context.fillStyle = "red"
//     context.fillRect(x,y,9,9);
// }


// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');

// drawGrid(context);

// canvas.addEventListener('click', function(evt) {
//     var mousePos = getSquare(canvas, evt);
//     fillSquare(context, mousePos.x, mousePos.y)
// }, false);







