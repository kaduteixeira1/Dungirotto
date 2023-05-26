const mapa = document.getElementById('mapa');
const tamanho = 15;
let playerX = 1;
let playerY = 1;

caixaDeTexto.innerHTML = "Seu objetivo é achar uma chave escondida em meio a escuridão."

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
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', ' ', '*', '*', 'o', ' ', ' ', ' ', ' ', '*'],
  ['*', ' ', ' ', ' ', '*', '*', ' ', ' ', '*', '*', '*', '*', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
  ['*', ' ', ' ', ' ', ' ', '*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', '*', '*', '*', ' ', '?', '*', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', ' ', '*', '*', ' ', 'O', '*'],
  ['*', ' ', '*', '*', '*', '*', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*'],
  ['*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', '*', '*', '*', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', 'O', ' ', '*', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'],
  ['*', '@', '*', ' ', ' ', ' ', ' ', ' ', '*', '*', '*', '*', '*', '$', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']
];
function mascara(caractere) {
  return " "
}
let carac = terrenos[8][13];
let mascaraCarac = mascara(carac);
terrenos[8][13] = mascaraCarac
terrenos[11][9] = mascaraCarac

var itemVisao = false

function desenharMapa() {
  
  const raioDeVisao = 3;
  let stringMapa = '';
  for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
      let distancia = Math.sqrt(Math.pow(playerX - x, 2) + Math.pow(playerY - y, 2));
      if (itemVisao) {
        distancia = 0
      }
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


function moverJogador(event) {
  switch (event.key) {
    case 'w':
      if (terrenos[playerY-1][playerX] !== '*' ) {
        playerY--;
        desenharMapa();
      }
      break;
    case 'a':
      if (terrenos[playerY][playerX-1] !== '*') {
        playerX--;
        desenharMapa();
      }
      
      break;
    case 's':
      if (terrenos[playerY+1][playerX] !== '*') {
        playerY++;
        desenharMapa();
      }
      break;
      case 'd':
        if (terrenos[playerY][playerX+1] !== '*') {
          playerX++;
          desenharMapa();
        }
        if (terrenos[playerY][playerX] === 'D') {
          playerX--;
          desenharMapa();
        }if (terrenos[playerY][playerX] == terrenos[12][14]){   
          window.location.href = "/beta DC/fase2/index2.html"
          desenharMapa();
          break;
      }
      break;      
      case 'i':
        if (terrenos[playerY][playerX] == '?') {
          caixaDeTexto.innerHTML = "As coisas não são o que parecem..."
            balao()
          desenharMapa();
          break;
        }
        if (terrenos[playerY][playerX] == terrenos[13][1]) {
          terrenos[8][5] = ' ';
          terrenos[8][13] = '0';
          terrenos[13][1] = " "
          terrenos[7][14] = "D"
          terrenos[3][1] ="!"
          
          desenharMapa();
          break;
        }
        if (terrenos[playerY][playerX] == "!" ) {
          caixaDeTexto.innerHTML = "Há um segredo escrito em um pergaminho (U) nas coordenadas [11][13]..."
          terrenos[11][13] = "U"
          balao()
          desenharMapa();
        }   
        if (terrenos[playerY][playerX] == "U" ) {
          caixaDeTexto.innerHTML ="Limpe a entrada a sua frente, há um acesso antigo esquecido pelas pessoas"
          terrenos[11][12] = "|"
          terrenos[11][13] = " "
          balao()
          desenharMapa();
        }
        if (terrenos[playerY][playerX] == "@") {
          chaveVerdadeira = true
          terrenos[12][9] = ' ';
          terrenos[11][9] = 'O';
          
          desenharMapa();
        }
        if (terrenos[playerY][playerX] == "|") {
          terrenos[12][9] = ' ';
          terrenos[11][11] = ' ';
          terrenos[12][9] = '@';
          
          desenharMapa();
        }
        if (terrenos[playerY][playerX] == 'o'){
          terrenos[13][2] = ' ';
          desenharMapa();
          break;
        }
        
        if (terrenos[playerY][playerX] == "O"){
          terrenos[12][14] = "="
          desenharMapa();
          break;
        }else if (terrenos[playerY][playerX] == "0"){
          terrenos[7][14] = "="
          desenharMapa();
          break;
        }

        if (terrenos[playerY][playerX] == terrenos[7][14]){
          playerX = 1;
          playerY = 1;
          itemVisao = false
          terrenos[4][1] = " "
          terrenos[2][2] = "*"
          desenharMapa();
          break;
        } 
        if (terrenos[playerY][playerX] == terrenos[13][13]){
          itemVisao = true
          terrenos[13][13] = " "
          desenharMapa();
          break;
        }    

    }
}
window.addEventListener('keydown', moverJogador);

