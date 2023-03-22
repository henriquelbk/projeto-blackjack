if (confirm('Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?')) {

   //Primeira rodada

   let maoJogador = []
   let maoComputador = []

   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

   maoJogador.push(cartaUsuario1.valor, cartaUsuario2.valor)
   maoComputador.push(cartaComputador1.valor, cartaComputador2.valor)


   // Caso dos dois Ases

   /* while (pontuacaoUsuario === 22) {

      const cartaUsuario1 = comprarCarta()
      const cartaUsuario2 = comprarCarta()
      let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor

      return pontuacaoUsuario
   } */



   if (confirm(`As suas cartas são: ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto}\nDeseja comprar mais uma carta?`)) {

      //Segunda rodada

      const cartaUsuario3 = comprarCarta()
      pontuacaoUsuario = pontuacaoUsuario + cartaUsuario3.valor

      maoJogador.push(cartaUsuario3.valor)

      if (pontuacaoUsuario < 22) {

         if (confirm(`As suas cartas são: ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto}. A carta revelada do computador é ${cartaComputador1.texto}\nDeseja comprar mais uma carta?`)) {
            
            // Aqui o jogador puxa a 4ª carta
            const cartaUsuario4 = comprarCarta()
            pontuacaoUsuario = pontuacaoUsuario + cartaUsuario4.valor

            maoJogador.push(cartaUsuario4.valor)
         }


      } else {
         
         alert(`Usuário - Cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} - Pontuação: ${pontuacaoUsuario}\nComputador - Cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação: ${pontuacaoComputador}\nO computador ganhou!`)
      }

   } else

      //o computador puxará cartas até enquanto ele tiver uma pontuação menor do que o jogador porém, caso seja >= 20, ele para




      if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario < 21) {
         alert('O usuário ganhou!')
      } else if (pontuacaoUsuario === pontuacaoComputador) {
         alert('Empate!')
      } else if (pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador < 21)
         alert('O computador ganhou!')
} else {
   alert('O jogo acabou')
}
