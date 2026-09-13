

function mostrarMensagem() {
    alert("KKKKKK você realmente clicou. Agora veja tudo isso ai e espero que você goste❤️");
}


// CONTADOR DO NOSSO TEMPO

const inicio = new Date("2026-08-15T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

if (document.getElementById("dias")) {
    atualizarContador();
    setInterval(atualizarContador, 1000);
}
// QUIZ DA NOSSA HISTÓRIA

let perguntaAtual = 0;
let pontos = 0;

const perguntas = [

    {
        pergunta: "Onde a gente se conheceu?",
        opcoes: [
            "No shopping 🛍️",
            "Na escola 🏫",
            "Na igreja ⛪"
        ],
        correta: 1
    },

    {
        pergunta: "Onde você começou a dar em cima de mim? 👀",
        opcoes: [
            "No TikTok 📱",
            "Na escola 🏫",
            "No Instagram 📸"
        ],
        correta: 0
    },

    {
        pergunta: "O que eu te chamava no começo?",
        opcoes: [
            "Meu amor ",
            "Amigo ",
            "Meu bem"
        ],
        correta: 1
    },

    {
        pergunta: "Quem foi mais insistente no começo? 👀",
        opcoes: [
            "Gabriel KKKKK",
            "Brenda",
            "Ninguém"
        ],
        correta: 0
    },

    {
        pergunta: "Quem provavelmente se apaixonou primeiro?",
        opcoes: [
            "Gabriel 👀",
            "Brenda 👀",
            "Nunca saberemos KKKK"
        ],
        correta: 2
    },

    {
        pergunta: "Quem é mais provável de mandar mensagem primeiro depois de uma discussão?",
        opcoes: [
            "Brenda",
            "Gabriel",
            "Depende KKKK"
        ],
        correta: null
    },

    {
        pergunta: "Quem demora mais pra escolher uma foto? 📸",
        opcoes: [
            "Brenda",
            "Gabriel",
            "Os dois"
        ],
        correta: null
    },

    {
        pergunta: "Quem é mais provável de falar 'não quero foto' e depois querer?",
        opcoes: [
            "Brenda KKKKK",
            "Gabriel",
            "Os dois"
        ],
        correta: null
    },

    {
        pergunta: "O que a gente foi assistir no shopping? 🕷️",
        opcoes: [
            "Homem-Aranha",
            "Vingadores",
            "Toy Story"
        ],
        correta: 0
    },

    {
        pergunta: "Onde eu estava quando você me pediu em namoro? ❤️",
        opcoes: [
            "Na escola",
            "Em casa",
            "No shopping"
        ],
        correta: 1
    },

    {
        pergunta: "Em que mês a gente começou a namorar?",
        opcoes: [
            "Agosto",
            "Julho",
            "Setembro"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dessas datas é a nossa? ❤️",
        opcoes: [
            "05/08",
            "15/08",
            "25/08"
        ],
        correta: 1
    },

    {
        pergunta: "O que começou como 'amizade' virou o quê?",
        opcoes: [
            "Uma amizade mesmo KKKK",
            "Uma história de amoooor",
            "Um completo desastre"
        ],
        correta: 1
    }

];

function responder(opcaoEscolhida) {

    const pergunta = perguntas[perguntaAtual];
    const feedback = document.getElementById("feedback");
    const botoes = document.querySelectorAll("#opcoes button");

    // impede clicar várias vezes
    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (pergunta.correta === null) {

    feedback.innerHTML =
        "KKKKKK essa eu só queria saber o que você ia responder 👀❤️";

} else if (opcaoEscolhida === pergunta.correta) {

    pontos++;

    feedback.innerHTML =
        "ACERTOU!❤️";

} else {

    feedback.innerHTML =
        "ERROU KKKKKKK 😭";

}

    document.getElementById("pontuacao").textContent =
        "❤️ " + pontos;

    setTimeout(() => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            carregarPergunta();

        } else {

            terminarQuiz();

        }

    }, 1300);
}


function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numero-pergunta").textContent =
        "Pergunta " + (perguntaAtual + 1) + " de 13";

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("feedback").textContent = "";

    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.textContent = opcao;

        botao.onclick = function () {
            responder(indice);
        };

        opcoes.appendChild(botao);

    });
}


function terminarQuiz() {

    document.querySelector(".quiz-caixa").style.display = "none";

    const final = document.getElementById("final-quiz");

    final.style.display = "block";

    document.getElementById("resultado").textContent =
        pontos + "/10 ❤️";

    if (pontos === 10) {

    document.getElementById("mensagem-final").textContent =
        "UHUUULLL MORRR 😭❤️ Tá oficialmente aprovado como namorado.";

} else if (pontos >= 7) {

    document.getElementById("mensagem-final").textContent =
        "Tá, não gabaritou mais foi bem 👀❤️ Vou deixar passar.";

} else if (pontos >= 4) {

    document.getElementById("mensagem-final").textContent =
        "Olha... acho que precisamos revisar nossa própria história KKKKK 😭❤️";

} else {

    document.getElementById("mensagem-final").textContent =
        "GABRIEL??? 😭 Vou fingir que não vi isso KKKKK. Pode continuar mesmo assim.";

}

}