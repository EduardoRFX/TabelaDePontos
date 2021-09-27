var thiago = {nome: "Thiago", vitorias: 2, empates: 3, derrotas: 1, pontos: 0};
var pedro = {nome: "Pedro", vitorias: 3, empates: 5, derrotas: 2, pontos: 0};
var maria = {nome: "Maria", vitorias: 1, empates: 6, derrotas: 4, pontos: 0};


function calcularPontos(jogador) {
    var pontos = jogador.vitorias *3 + jogador.empates;
    return pontos;
}

thiago.pontos = calcularPontos(thiago);
pedro.pontos = calcularPontos(pedro);
maria.pontos = calcularPontos(maria);

var jogadores = [thiago, pedro, maria];

function exibiJogadoresNaTela(jogadores){
    var elemento = "";

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitoria</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
        if (jogadores[i].pontos >= 30){
            var vencedor = document.getElementById("vencedor");
            vencedor.innerHTML = "Você ganhou!!" + "&#127942";
            console.log("Você ganhou");
        
        }
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibiJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibiJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibiJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibiJogadoresNaTela(jogadores);
}

function ZerarPontos(){
    thiago.vitorias = 0;
    thiago.empates = 0;
    thiago.derrotas = 0;
    thiago.pontos = 0;

    pedro.vitorias = 0;
    pedro.empates = 0;
    pedro.derrotas = 0;
    pedro.pontos = 0;

    maria.vitorias = 0;
    maria.empates = 0;
    maria.derrotas = 0;
    maria.pontos = 0;
    exibiJogadoresNaTela(jogadores);

    var vencedor = document.getElementById("vencedor");
    vencedor.innerHTML = "";

}

