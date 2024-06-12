trocaTema = () => {
    // alert("Mudei o tema e você não viu.")
    // const html = document.documentElement;
   
    // document.querySelector("body").style.background = "Pink"

document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/perfil.jpg" : "./img/perfil2.jpg";

document.querySelector("#perfil img").setAttribute("src", imagem);


const textDark = 
    "Foto de um menino moreno, de cabelo preto, usando uniforme da escola senai, de cor preta, segurando um celular, em um ângulo diagonal, com um fundo azul escuro liso.";
const textLight =
    "Foto de um menino moreno, de cabelo preto, usando uniforme da escola senai, de cor preta, segurando um celular, em um ângulo diagonal,com um fundo verde claro neutro liso.";

    isLight
    ? document.querySelector("#perfil img").setAttribute("alt", textLight)
    : document.querySelector("perfil img").setAttribute("alt", textDark);

};