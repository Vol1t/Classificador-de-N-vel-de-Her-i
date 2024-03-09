const prompt = require('prompt-sync')();

let nomeHeroi = prompt('Qual seu nome de Herói? ');
let experiencia = prompt('Digite a quantidade de xp que vc possui, sendo ela entre 1.000 a 10.001: ');
let xp = parseInt(experiencia);

let nivelDoHeroi = " "

switch(true){
    case (xp < 1000):
    nivelDoHeroi = "Ferro";
    break;
    case (xp > 1001 && xp <= 2000):
    nivelDoHeroi = "Bronze";
    break;
    case (xp > 2001 && xp <= 5000):
    nivelDoHeroi = "Prata";
    break;
    case (xp > 6001 && xp <= 7000):
    nivelDoHeroi = "Ouro";
    break;
    case (xp > 7001 && xp <= 8000):
    nivelDoHeroi = "Platina Diamante";
    break;
    case (xp > 8001 && xp <= 9000):
    nivelDoHeroi = "Ascendente"
    break;
    case (xp > 9001 && xp <= 10000):
    nivelDoHeroi = "Imortal"
    break;
    case (xp >= 10001):
    nivelDoHeroi = "Radiante"
    break;

    default:

        nivelDoHeroi = "Nível indeterminado";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}`);