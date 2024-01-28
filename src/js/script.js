
const botao = document.querySelector(".btn-plataforma");
console.log(botao);


const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

console.log(elementoPlataformas);


botao.addEventListener("click", () => {
    
   elementoPlataformas.classList.toggle("ativo");
    

});

