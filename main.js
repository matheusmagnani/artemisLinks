function toggleMode() {
  const html= document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  
  if(html.classList.contains("light")){
    img.setAttribute("alt", "Logo da Artemis formado por um A azul com o fundo preto")
    img.setAttribute("src", "./assets/avatar-light.png")
  }else{
    img.setAttribute("alt", "Logo da Artemis formado por um A azul e fundo branco")
    img.setAttribute("src", "./assets/avatar.png")
  }

}