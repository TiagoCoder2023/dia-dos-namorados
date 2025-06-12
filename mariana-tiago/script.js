function mostrarMensagem() {
  const surpresa = document.getElementById("surpresa");

  if (surpresa.style.display === "block") {
    // Esconder a mensagem
    surpresa.style.display = "none";
  } else {
    // Mostrar a mensagem
    surpresa.textContent =
      "Desde o dia que te conheci, sabia que era especial e nesse tempo juntos, sempre tento fazer você se sentir assim, única do jeito que é, maravilhosa de todass as formas, amo quando você me olha no fundo dos olhos pois consigo ver sua alma e ela é a luz que ilumina a minha. Desaprendi a viver só, pois Deus me mostrou que sou merecedor de um amor tão lindo quanto eu sonhava, assim ele me enviou no dia 09/09/2024 você, que todos os dias me surpreende do melhor jeito e torna minha vida mais feliz, sua forma de falar comigo, sendo bruta ou quando você me chama de lerdão, quando ri das minhas gracinhas, quando paramos pra falar sobre planos e eu vejo que meu futuro inteiro é ao seu lado, eu amo tudo isso muito, viver ao seu lado é o maior presente que eu poderia receber nessa vida, eu amo seu jeito nunca mude meu amor, você é perfeita assim pra mim.  EU TE LOVO, EU TE AMO, EU TE VIVO, EU TE HONRO, EU TE VEJO❤️";
    surpresa.style.display = "block";
  }
}
