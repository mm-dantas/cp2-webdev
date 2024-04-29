var quantidade = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("qtdGarrafa").addEventListener("change", function() {
        quantidade = parseInt(document.getElementById("qtdGarrafa").value);
        calcularTotal();
    });
});

function calcularTotal() {
    var total = quantidade * 139.90;
    document.getElementById("valorTotal").textContent = "R$ " + total.toFixed(2);
    return total;
}

function addDesconto(){
    var total = calcularTotal();
    var cupom = document.getElementById("cupomDesc").value;

    if (cupom == "FIAP2024"){
        var totalComDesconto = total * 0.9;
        document.getElementById("valorcomdesc").textContent = "R$ " + totalComDesconto.toFixed(2);
    } else {
        document.getElementById("valorcomdesc").textContent = "Não há desconto";
    }
}

function carrinho(){
    if (quantidade >= 1){
        alert("Produtos adicionados ao carrinho!");
    } else {
        alert("Nenhum produto adicionado ao carrinho!");
    }
}
