const paragrafo = document.querySelector("#sobre");

const btnCriado = document.createElement("button");

btnCriado.innerHTML = "Clique para ver uma mensagem!";

const styleBtn = btnCriado.style;
styleBtn.padding = "15px 20px";
styleBtn.margin  = "20px";
styleBtn.border = "none";
styleBtn.background = "coral";
styleBtn.color = "#FFF";
styleBtn.cursor = "pointer";

paragrafo.appendChild(btnCriado);

const clicouMensagem = () => {
    const paragrafoMotivacional = document.createElement("p");

    paragrafoMotivacional.innerHTML = "Você não precisa ser perfeito para começar, mas precisa começar para ser incrível.";

    paragrafo.appendChild(paragrafoMotivacional)

    setTimeout(() => {
        paragrafoMotivacional.remove();
    }, 3000)
}

btnCriado.addEventListener("click", clicouMensagem);

