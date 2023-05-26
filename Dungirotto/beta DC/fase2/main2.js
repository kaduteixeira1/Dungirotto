const mapa = document.getElementById("mapa");
const tamanho = 30;
let playerX = 1;
let playerY = 1;
var vida = 100;
var caracter 

caixaDeTexto.innerHTML = 'Sua missão é achar todos os itens escondidos em meio aos espinhos.';

//Animação caixa de texto
function balao(params) {
  var caixaDeTexto = document.getElementById('caixaDeTexto');
 var texto = caixaDeTexto.innerHTML;
caixaDeTexto.innerHTML = '';
caixaDeTexto.style.opacity = 0;
var fadeIn = setInterval(() => {
  if (caixaDeTexto.style.opacity < 1) {
    caixaDeTexto.style.opacity = parseFloat(caixaDeTexto.style.opacity) + 0.05; 
  } else {
    clearInterval(fadeIn);
    
    intervalId = setInterval(animarTexto, 70);
  }
}, 100);

var index = 0;
var animarTexto = () => {
  caixaDeTexto.innerHTML += texto.charAt(index);
  index++;
  if (index > texto.length - 1) {
    clearInterval(intervalId);
  
    var fadeOut = setInterval(() => {
      if (caixaDeTexto.style.opacity > 0) {
        caixaDeTexto.style.opacity -= 0.05;
      } else {
        clearInterval(fadeOut);
      }
    }, 100);
  }
};
var intervalId;

}
balao()

/////////////////////////////////////////////////////////////////

const terrenos = [
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*','*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', ' ', ' ', '>', '*', '@', '*', '@', '*', ' ', ' ', ' ', '*', '<', '*','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', '*', '*', ' ', '*', ' ', '*', ' ', 'v', ' ', '*', '@', '*','#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', " ", '*'],
  ['*', ' ', '*', 'Ʌ', '*', ' ', '*', 'v', '*', '*', '*', '*', '*', '*', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', '*', '*', '#', '#', '#', '#', '#', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '#', '#', '#', '#', '#', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', '*', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'D',' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', '*', '#', ' ', 'D',' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', '*', '*', ' ', '#', '#', '#', ' ', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', '#', '#', '#', '#', '#', ' ', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', ' ', ' ', '*', 'v', '*', '*', '*', '*', '*', '*', '#', '#', '*','#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*','#', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', "#", '*'],
  ['*', ' ', '*', 'O', '@', ' ', '*', '>', '#', '#', '#', '#', '#', ' ', '*','#', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', " ", '*'],
  ['*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*','*', '*', '#', '#', '#', '#', 'O', ' ', '#', '#', '#', '#', '#', '#', '*'],
  ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', '<', ' ', '$', '<', '*', ' ',' ', '*', '*', '*', '*', '*', '*', 'D', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ',' ', '*', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '>', '*'],
  ['*', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '*', '*','*', '*', ' ', ' ', ' ', '#', ' ', ' ', '#', '#', '#', '#', ' ', '>', '*'],
  ['*', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '#','*', ' ', '#', '#', '#', ' ', '#', '#', ' ', '#', '#', ' ', ' ', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', ' ', '#','*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', 'O', ' ', '#', '#', ' ', '#', '#', ' ', '#', ' ', ' ', ' ', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', ' ', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ', ' ', ' ', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', ' ', ' ', '#', '#', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#', '>', '*'],
  ['*', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', ' ', ' ', '#', ' ', ' ', ' ', '#', '#', ' ', ' ', ' ', '#', '>', '*'],
  ['*', '#', ' ', ' ', ' ', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#','*', '#', ' ', ' ', '#', ' ', ' ', '#', '#', '#', '#', ' ', ' ', '>', '*'],
  ['*', '#', '#', '#', ' ', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#','*', ' ', ' ', '#', ' ', '#', '#', ' ', ' ', ' ', ' ', '#', ' ', '>', '*'],
  ['*', '*', '*', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*','*', '*', '*', ' ', ' ', ' ', '#', '#', ' ', '#', ' ', ' ', '*', '*', '*'],
  ['*', '@', '*', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '*', 'v',' ', ' ', '*', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ', '*', '@', '*'],
  ['*', 'v', '*',  '#', '#', '#', '#', '#', '#', '#', '#', '#','#', '*', ' ',' ', 'O', '*', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '*', 'v', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*','D', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
];

function desenharMapa() {
  
  const raioDeVisao = 11;
  let stringMapa = '';
  for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
      let distancia = Math.sqrt(Math.pow(playerX - x, 2) + Math.pow(playerY - y, 2));
      if (distancia < raioDeVisao) {
        if (y === playerY && x === playerX) {
          stringMapa += '&';
        } else {
          stringMapa += terrenos[y][x];
        }
      } else {
        stringMapa += ' '; 
      }
      stringMapa += ' ';
    }
    stringMapa += '\n';
  }
  mapa.textContent = stringMapa;
}
desenharMapa();



var tpOn = false,
    tpItem = false;

var c1 = false,
    c2 = false,
    c3 = false,
    c4 = false,
    c5 = false,
    c6 = false
    c7 = false
    c8 = false
    c9 = false
    keyPrincipal = false;

var armor = false;

function moverJogador(event) {
  switch (event.key) {
    case "w":
      if (terrenos[playerY - 1][playerX] !== "*") {
        playerY--;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "D") {
        playerY++;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "#" && armor == false) {
        vida = vida - 10;
        document.getElementById("life").innerHTML = vida;
        desenharMapa();
      }
      break;
    case "a":
      if (terrenos[playerY][playerX - 1] !== "*") {
        playerX--;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "D") {
        playerX--;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "#" && armor == false) {
        vida = vida - 10;
        document.getElementById("life").innerHTML = vida;
        desenharMapa();
      }
      break;
    case "s":
      if (terrenos[playerY + 1][playerX] !== "*") {
        playerY++;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "D") {
        playerY--;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "#" && armor == false) {
        vida = vida - 10;
        document.getElementById("life").innerHTML = vida;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "=" && c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8) {
        window.location.href = "/beta DC/fase3/index3.html"
        desenharMapa();
        break;
      }
      break;
    case "d":
      if (terrenos[playerY][playerX + 1] !== "*") {
        playerX++;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "D") {
        playerX--;
        desenharMapa();
      }
      if (terrenos[playerY][playerX] == "#" && armor == false) {
        vida = vida - 10;
        document.getElementById("life").innerHTML = vida;
        desenharMapa();
      }
      break;
    case "i":
      //tps//
      if (playerX == 3 && playerY == 1) {
        playerX = 10;
        playerY = 2;
        desenharMapa();
      } else if (playerX == 10 && playerY == 2) {
        playerX = 3;
        playerY = 1;
        desenharMapa();
        break;
      }

      if (playerX == 3 && playerY == 3) {
        playerX = 7;
        playerY = 3;
        desenharMapa();
      } else if (playerX == 7 && playerY == 3) {
        playerX = 3;
        playerY = 3;
        desenharMapa();
        break;
      }

      if (playerX == 5 && playerY == 10) {
        playerX = 13;
        playerY = 1;
        desenharMapa();
      } else if (playerX == 13 && playerY == 1) {
        playerX = 5;
        playerY = 10;
        desenharMapa();
        break;
      }

      if (playerX == 11 && playerY == 1 && tpOn) {
        playerX = 5;
        playerY = 12;
        desenharMapa();
      } else if (playerX == 5 && playerY == 12 && tpOn) {
        playerX = 11;
        playerY = 1;
        desenharMapa();
        break;
      }

      if (playerX == 3 && playerY == 7 && tpItem) {
        playerX = 12;
        playerY = 14;
        desenharMapa();
      } else if (playerX == 12 && playerY == 14 && tpItem) {
        playerX = 3;
        playerY = 7;
        desenharMapa();
        break;
      }
      if (playerX == 9 && playerY == 14 && tpItem) {
        playerX = 7;
        playerY = 12;
        desenharMapa();
      } else if (playerX == 7 && playerY == 12 && tpItem) {
        playerX = 9;
        playerY = 14;
        desenharMapa();
        break;
      }

      if (playerX == 26 && playerY == 28) {
        playerX = 28;
        playerY = 28;
        desenharMapa();
      } else if (playerX == 28 && playerY == 28) {
        playerX = 26;
        playerY = 28;
        desenharMapa();
        break;
      }

      if (playerX == 28 && playerY == 18) {
        playerX = 1;
        playerY = 28;
        desenharMapa();
      } else if (playerX == 1 && playerY == 28) {
        playerX = 28;
        playerY = 18;
        desenharMapa();
        break;
      }

      if (playerX == 4 && playerY == 21 && terrenos[playerY][playerX] == ">" ) {
        playerX = 14;
        playerY = 27;
        desenharMapa();
        break;
      } else if (playerX == 14 && playerY == 27) {
        playerX = 4;
        playerY = 21;
        desenharMapa();
        break;
      }

      //keys//
      if (playerX == 5 && playerY == 1) {
        terrenos[playerY][playerX] = " ";
        terrenos[12][5] = "<";
        terrenos[1][11] = ">";
        tpOn = true;
        c1 = true;
        desenharMapa();
        break;
      }

      if (playerX == 7 && playerY == 1) {
        terrenos[playerY][playerX] = " ";
        c2 = true;
        desenharMapa();
        break;
      }

      if (playerX == 13 && playerY == 2) {
        terrenos[playerY][playerX] = " ";
        c3 = true;
        desenharMapa();
        break;
      }

      if (playerX == 4 && playerY == 12) {
        terrenos[playerY][playerX] = " ";
        c4 = true;
        desenharMapa();
        break;
      }

      if (playerX == 15 && playerY == 1 && terrenos[playerY][playerX] == "@") {
        terrenos[playerY][playerX] = " ";
        c5 = true;
        desenharMapa();
        break;
      }

      if (playerX == 21 && playerY == 21 && terrenos[playerY][playerX] == "@") {
        terrenos[playerY][playerX] = " ";
        c6 = true;
        desenharMapa();
        break;
      }

      if (playerX == 1 && playerY == 27) {
        terrenos[playerY][playerX] = " ";
        c7 = true;
        desenharMapa();
        break;
      }

      if (playerX == 28 && playerY == 27) {
        terrenos[playerY][playerX] = " ";
        c8 = true;
        desenharMapa();
        break;
      }


      //loots//
      if (playerX == 11 && playerY == 14) {
        armor = true;
        terrenos[playerY][playerX] = " ";
        caixaDeTexto.innerHTML = "Você coletou uma armadura que protege e destrói espinhos";
        balao()
        desenharMapa();
        break;
      }
      //buttons//
      if (playerX == 21 && playerY == 13 && c5) {
        terrenos[playerY][playerX] = " ";
        terrenos[14][22] = "=";
        desenharMapa();
        break;
      }

      if (playerX == 3 && playerY == 12 && c4) {
        terrenos[playerY][playerX] = " ";
        terrenos[7][14] = "=";
        terrenos[6][14] = "=";
        desenharMapa();
        break;
      }

      if (playerX == 16 && playerY == 19 && c6) {
        terrenos[playerY][playerX] = " ";
        terrenos[20][15] = "=";
        terrenos[21][15] = "=";
        terrenos[20][14] = " ";
        terrenos[21][14] = " ";
        desenharMapa();
        break;
      }

      if (playerX == 16 && playerY == 28 && c7 ) {
        terrenos[29][15] = "=";
        desenharMapa();
        break;
      }

      //espinhos//
      if (playerX == 15 && playerY == 1 && armor) {
        terrenos[playerY][playerX] = "@";
        desenharMapa();
        break;
      }else if (playerX == 21 && playerY == 21 && armor) {
        terrenos[20][15] = "D";
        terrenos[21][15] = "D";
        terrenos[21][21] = "@";
        desenharMapa();
        break;
      }else if (playerX == 4 && playerY == 21 && armor) {
        terrenos[playerY][playerX] = ">";
        desenharMapa();
        break;
      }else if (terrenos[playerY][playerX] == "#" && armor) {
        terrenos[playerY][playerX] = " ";
        desenharMapa();
        break;
      }

      break;
  }
  //life//
  if (vida == 0) {
    window.location.href = "/beta DC/fase2/gameOver.html"
    desenharMapa();
  }
  //kets//
  if (c1 && c2 && c3 && c4) {
    terrenos[7][3] = ">";
    tpItem = true;
    desenharMapa();
  }
}
window.addEventListener("keydown", moverJogador);