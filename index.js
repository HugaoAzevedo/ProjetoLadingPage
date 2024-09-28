var setaesquerda = window.document.getElementById("setaesquerda")
var setadireitaireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")

function RolarParaDireita() {
  
setaesquerda.style ="display:flex"
leonardo.style = "display:none"
samantha.style = "display:flex"
setadireita.style ="display:none; margin-top: 50px"
}

function RolarParaEsquerda() {
    console.log(setadireita);
    
    setadireita.style = "display:flex; margin-top: 50px"
    setaesquerda.style ="display:none"
    leonardo.style = "display:flex"
    samantha.style = "display:none"
}

