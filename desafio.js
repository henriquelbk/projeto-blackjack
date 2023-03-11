//alert('Boas vindas ao jogo de BlackJack!')

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()
  
   if (confirm('Quer iniciar uma nova rodada?')) {
       
      function rodadaUsuario1 () {
      cartaUsuario1
      cartaUsuario2
      let pontuacaoUsuario1 = cartaUsuario1.valor + cartaUsuario2.valor
      return pontuacaoUsuario1
      }
      rodadaUsuario1()

      /* while (pontuacaoUsuario1 === 22){
         rodadaUsuario1()
      }
      */
      
      function rodadaComputador1 () {
      cartaComputador1
      cartaComputador2
      let pontuacaoComputador1 = cartaComputador1.valor + cartaComputador2.valor
      return pontuacaoComputador1
      
      }
      rodadaComputador1()

      while (pontuacaoComputador1 === 22) {
         rodadaComputador1()
      }
      

      if (confirm(`As suas cartas são: ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto} Deseja comprar mais uma carta?`)) {
         
      /* Racional da sequencia
      if confirm deseja comprar uma nova carta?    
      cartaUsuario3
      cartaComputador3

      pontuação = pontuacaoUsuario1 + cartaUsuario3.valor

      caso o computador puxe algo < 20, ele compra outra carta, caso seja >= 20, ele para
      */

      }
      

      if (pontuacaoUsuario1 > pontuacaoComputador1 && pontuacaoUsuario1 < 21) {
         alert('O usuário ganhou!')
      } else if (pontuacaoUsuario1 === pontuacaoComputador1) {
         alert('Empate!')
      } else if (pontuacaoUsuario1 < pontuacaoComputador1 && pontuacaoComputador1 < 21)
         alert('O computador ganhou!')
   }  else {
      alert('O jogo acabou')
   }