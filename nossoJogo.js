alert('Boas vindas ao jogo de BlackJack!')

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()

if (confirm('Quer iniciar uma nova rodada?')) {
   
   cartaUsuario1
   cartaUsuario2
   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   
   cartaComputador1
   cartaComputador2
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
  
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`)
   
   if (pontuacaoUsuario > pontuacaoComputador) {
      alert('O usuário ganhou!')
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      alert('Empate!')
   } else if (pontuacaoUsuario < pontuacaoComputador)
      alert('O computador ganhou!')
}  else {
   alert('O jogo acabou')
}