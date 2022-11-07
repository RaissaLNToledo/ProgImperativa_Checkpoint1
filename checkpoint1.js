//Constantes
const tempoPipoca = 10;
const tempoMacarrao = 8;
const tempoCarne = 15;
const tempoFeijao = 12;
const tempoBrigadeiro = 8;

let tempoDoPrato = null;

//função para analisar o tempo
function analiseDoTempo (tempoDoUsuario, tempoPadrao ) {
    if (tempoDoUsuario < tempoPadrao ) {
        let mensagem = 'Tempo insuficiente';
        console.log(mensagem);
    }
    else if (tempoDoUsuario > 2*tempoPadrao && tempoDoUsuario < 3*tempoPadrao ) {
        let mensagem = 'Comida queimou';
        console.log(mensagem);
    }
    else if (tempoDoUsuario >= 3*tempoPadrao) {
        let mensagem = 'Kabumm';
        return console.log(mensagem);
    }
    else {
        let mensagem = 'Prato pronto, bom apetite!!!';
        return console.log(mensagem);
    }
}

function microondas (nomeComida, tempoDoUsuario) {
    switch (nomeComida) {
        case 'pipoca':
        case 'Pipoca':
        case 1:
            tempoDoPrato = tempoPipoca;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'macarrao':
        case 'Macarrao':
        case 'macarrão':
        case 'Macarrão':
        case 2:
            tempoDoPrato = tempoMacarrao;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'carne':
        case 'Carne':
        case 3:
            tempoDoPrato = tempoCarne;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'feijao':
        case 'Feijao':
        case 'feijão':
        case 'Feijão':
        case 4:
            tempoDoPrato = tempoFeijao;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'brigadeiro':
        case 'Brigadeiro':
        case 5:
            tempoDoPrato = tempoBrigadeiro;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        default:
            console.log('Prato Inexistente');
    }
}

console.log('Temos 5 opções de prato:\n 1 - Pipoca \n 2 - Macarrão \n 3 - Carne \n 4 - Feijão \n 5 - Brigadeiro \n O microondas aceita tanto o nome do prato (com as diferentes possibilidades de escrita) como o número do prato')

//Testes dos cenários possiveis
microondas(1, 10); //Prato pronto
microondas('Pipoca', 8); //Tempo insuficiente
microondas('pipoca', 25); //Comida Queimou
microondas('Pipoca', 30); // Kabuum

microondas('macarrao', 5); //Tempo insuficiente
microondas('Macarrao', 8); //Prato pronto
microondas(2, 15); //Prato pronto
microondas('macarrão', 17); //Comida Queimou
microondas('Macarrão', 24); // Kabuum

microondas('carne', 5); //Tempo insuficiente
microondas('Carne', 20); //Prato pronto
microondas('carne', 30); //Prato pronto
microondas('Carne', 32); //Comida Queimou
microondas(3, 47); // Kabuum

microondas('feijao', 10); //Tempo insuficiente
microondas('Feijao', 14); //Prato pronto
microondas('feijão', 25); //Comida Queimou
microondas('Feijão', 40); // Kabuum
microondas(4, 40); // Kabuum

microondas('brigadeiro', 5); //Tempo insuficiente
microondas('Brigadeiro', 10); //Prato pronto
microondas(5, 20); //Comida Queimou
microondas('Brigadeiro', 28); // Kabuum

microondas('arroz', 28); //Prato inexistente
microondas(7, 28); //Prato inexistente