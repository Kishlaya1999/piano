let keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
     key.addEventListener("click", function () {
          let keyName = this.innerText;
          let audio = new Audio("./notes/" + keyName + ".mp3");
          audio.volume = 0.5;
          audio.play();
          // console.log(audio.volume);
     })
})

document.addEventListener("keydown", function (e) {
     var key = e.keyCode;
     // console.log(e);
     switch (key) {

          // white keys
          case 90:
               let C = new Audio("./notes/C.mp3");
               C.volume = 0.5;
               C.play();
               whiteHovered(0);
               // adding hovered class to key and then removing it
               // keys[0].classList.add("white-hovered");
               // setTimeout(() => {
               //      keys[0].classList.remove("white-hovered");
               // }, 300)
               break;
          case 88:
               let D = new Audio("./notes/D.mp3");
               D.volume = 0.5;
               D.play();
               whiteHovered(2);
               // adding hovered class to key and then removing it
               // keys[2].classList.add("white-hovered");
               // setTimeout(() => {
               //      keys[2].classList.remove("white-hovered");
               // }, 300)
               break;
          case 67:
               let E = new Audio("./notes/E.mp3");
               E.volume = 0.5;
               E.play();
               whiteHovered(4);
               break;
          case 86:
               let F = new Audio("./notes/F.mp3");
               F.volume = 0.5;
               F.play();
               whiteHovered(5);
               break;
          case 66:
               let G = new Audio("./notes/G.mp3");
               G.volume = 0.5;
               G.play();
               whiteHovered(7);
               break;
          case 78:
               let A = new Audio("./notes/A.mp3");
               A.volume = 0.5;
               A.play();
               whiteHovered(9);
               break;
          case 77:
               let B = new Audio("./notes/B.mp3");
               B.volume = 0.5;
               B.play();
               whiteHovered(11);
               break;

               // black keys
          case 83:
               let Db = new Audio("./notes/Db.mp3");
               Db.volume = 0.5;
               Db.play();
               blackHovered(1);
               break;
          case 68:
               let Eb = new Audio("./notes/Eb.mp3");
               Eb.volume = 0.5;
               Eb.play();
               blackHovered(3);
               break;
          case 71:
               let Gb = new Audio("./notes/Gb.mp3");
               Gb.volume = 0.5;
               Gb.play();
               blackHovered(6);
               break;
          case 72:
               let Ab = new Audio("./notes/Ab.mp3");
               Ab.volume = 0.5;
               Ab.play();
               blackHovered(8);
               break;
          case 74:
               let Bb = new Audio("./notes/Bb.mp3");
               Bb.volume = 0.5;
               Bb.play();
               blackHovered(10);
               break;
     }
})

function whiteHovered(num) {
     keys[num].classList.add("white-hovered");
     setTimeout(() => {
          keys[num].classList.remove("white-hovered");
     }, 300)
}
function blackHovered(num) {
     keys[num].classList.add("black-hovered");
     setTimeout(() => {
          keys[num].classList.remove("black-hovered");
     }, 300)
}