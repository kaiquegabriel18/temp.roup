function comprarProduto(){

    alert("Produto adicionado ao carrinho!");

}

const botoesTamanho = document.querySelectorAll(".tamanhos button");

botoesTamanho.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesTamanho.forEach(btn => {
            btn.style.background = "#0b3d91";
        });

        botao.style.background = "#28a745";

    });

});