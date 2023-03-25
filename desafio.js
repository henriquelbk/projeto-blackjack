const blackjack = () => {

   if (confirm('Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?')) {

      // Primeira rodada
      let maoJogador = [comprarCarta(), comprarCarta()]
      let maoComputador = [comprarCarta(), comprarCarta()]

      let pontuacaoUsuario = maoJogador[0].valor + maoJogador[1].valor
      let pontuacaoComputador = maoComputador[0].valor + maoComputador[1].valor

      // Caso dos dois Ases
      if (pontuacaoUsuario === 22 || pontuacaoComputador === 22) {
         blackjack()
         return
      }

      // Segunda Rodada
      let querComprar = confirm(`As suas cartas são: ${maoJogador[0].texto} ${maoJogador[1].texto}. A carta revelada do computador é ${maoComputador[0].texto}\nDeseja comprar mais uma carta?`)

      while (querComprar) {
         const cartaNova = comprarCarta()
         pontuacaoUsuario += cartaNova.valor
         maoJogador.push(cartaNova)

         if (pontuacaoUsuario > 21) {
            break
         }

         querComprar = confirm(`As suas cartas são: ${maoJogador.map(carta => carta.texto).join(' ')}. A carta revelada do computador é ${maoComputador[0].texto}\nDeseja comprar mais uma carta?`)
      }
      while (pontuacaoComputador < pontuacaoUsuario && pontuacaoComputador < 21) {
         if (pontuacaoUsuario > 21) {
            break
         }

         const cartaNova = comprarCarta()
         pontuacaoComputador += cartaNova.valor
         maoComputador.push(cartaNova)
      }
      //o computador puxará cartas até enquanto ele tiver uma pontuação menor do que o jogador
      if (pontuacaoUsuario > 21) {
         alert(`Usuário - cartas: ${maoJogador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${maoComputador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoComputador}\nO computador ganhou!`)
      } else if (pontuacaoComputador > 21) {
         alert(`Usuário - cartas: ${maoJogador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${maoComputador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoComputador}\nO usuário ganhou!`)
      } else if (pontuacaoUsuario > pontuacaoComputador) {
         alert(`Usuário - cartas: ${maoJogador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${maoComputador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoComputador}\nO usuário ganhou!`)
      } else if (pontuacaoUsuario === pontuacaoComputador) {
         alert(`Usuário - cartas: ${maoJogador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${maoComputador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoComputador}\nEmpate`)
      } else {
         alert(`Usuário - cartas: ${maoJogador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${maoComputador.map(carta => carta.texto).join(' ')} - pontuação ${pontuacaoComputador}\nO computador ganhou!`)
      }
   } else {
      alert('O jogo acabou')
   }
}
blackjack()