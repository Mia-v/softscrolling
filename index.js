  var blocks= [];
  function sizes(){
    blocks=[];
    document.querySelectorAll(".main").forEach((el) => {blocks.push(el.offsetTop);});
  }
  sizes();

  window.addEventListener("resize", sizes);
  document.addEventListener('wheel', swish);

  var pointer = 0;
  var isGateClosed = false;

  function move(coord) {
    if (coord < blocks[pointer+1]) {
      setTimeout(function() {
        coord += 5
        window.scrollTo(0, coord);
        move(coord);
      }, 5);
    }
  }

  function moveBack(coord){
    if (coord >= blocks[pointer-1]){
      setTimeout(function (){
        coord -= 5
        window.scrollTo(0, coord);
        moveBack(coord);
      }, 5);
    }
  }

  function swish(event) {
    if (event.deltaY > 0) {
      if (pointer == blocks.length - 1) {
        return false;
      } else {
        if (!isGateClosed) {
          isGateClosed = true;
          move(blocks[pointer]);
          setTimeout(function () {
            console.log("a", blocks[pointer]);
            pointer++;
            isGateClosed = false;
          }, 1500);
        }
      }
    } else if (event.deltaY < 0) {
      if (pointer == 0) {
        return false;
      }else{
        if (!isGateClosed){
          isGateClosed = true;
          moveBack(blocks[pointer]);
          setTimeout(function(){
            console.log("b", blocks[pointer]);
            pointer--;
            isGateClosed = false;
          }, 1500);
        }
      }
    }
  }
