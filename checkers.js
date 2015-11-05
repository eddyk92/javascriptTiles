

//////////////////////////////////////////
function makeTile(color) {
    var tile = document.createElement("div");
    tile.style.width = "11.1%";
    tile.style.paddingBottom = "11.1%";
    tile.style.float = "left";
    tile.style.background = color;

    return tile;
}


function createCheckerBoard(n) {
  var tile = null;

 for (var i = 0; i < n; i++) {
    color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

//   if (i % 2 === 0) {
//
//        color = "black";
//   }  else {
//        color = "red";
//}

    tile = makeTile(color);



    console.log(tile);
    document.body.appendChild(tile);
  }

}

createCheckerBoard(81);


