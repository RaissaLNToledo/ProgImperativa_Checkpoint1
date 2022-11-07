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
        return console.log(mensagem);
    }
    else if (tempoDoUsuario > 2*tempoPadrao && tempoDoUsuario <= 3*tempoPadrao ) {
        let mensagem = 'Comida queimou';
        return console.log(mensagem);
    }
    else if (tempoDoUsuario > 3*tempoPadrao) {
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
            tempoDoPrato = tempoPipoca;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'macarrao':
            tempoDoPrato = tempoMacarrao;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'carne':
            tempoDoPrato = tempoCarne;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
        case 'feijao':
            tempoDoPrato = tempoFeijao;
            analiseDoTempo(tempoDoUsuario, tempoDoPrato);
            break;
    }
}

