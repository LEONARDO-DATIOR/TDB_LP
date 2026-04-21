var botaoSim = document.getElementById("botao-sim")
var botaoNao = document.getElementById("botao-nao")


botaoNao.addEventListener('mouseenter', () => {
    const posicaoHorizontalAleatoria = Math.floor(Math.random() * (window.innerWidth - 30));   
    const posicaoVerticalAleatoria = Math.floor(Math.random() * (window.innerHeight - 30));   
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posicaoHorizontalAleatoria+"px";
    botaoNao.style.top = posicaoVerticalAleatoria+"px";
    console.log(botaoNao.style.left)
})

