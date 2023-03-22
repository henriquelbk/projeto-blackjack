if (confirm('Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?')) {
   
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
   
   if (pontuacaoUsuario > pontuacaoComputador) {
      alert(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}\nO usuário ganhou!`)
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      alert(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}\nEmpate!`)
   } else if (pontuacaoUsuario < pontuacaoComputador)
      alert(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}\nComputador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}\nO computador ganhou!`)
}  else {
   alert('O jogo acabou')
}