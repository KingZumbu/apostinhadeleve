document.addEventListener("DOMContentLoaded", function () {

       let valorAtual = 0

       document.getElementById('btnNome').addEventListener('click', function mostarNome(){
              const nomeSalvo = document.getElementById('login123').value;
              const resultElement = document.getElementById('nome');
              resultElement.innerHTML = `Oi ${nomeSalvo}!`
       })
       
       function mostraValor(){ 
              document.getElementById('valorAtual').innerHTML = valorAtual  
              mostrarNome()
       }

       document.getElementById('btnCredito').addEventListener('click', function (){
              const valorAdicionado = parseInt(document.getElementById('input__valor').value);
              valorAtual = valorAtual + valorAdicionado
              document.getElementById('credito_jogar').innerHTML = `Você adicionou ${valorAdicionado} Doligoros`
              mostraValor();
              
       })

       function sorteia() {

              return (Math.floor(Math.random() * 10)+1);
       }

       function ganhou (encremento){
              valorAtual = valorAtual + encremento
              mostraValor()
       }

       function perdeu (encremento){
              valorAtual = valorAtual - encremento
              mostraValor()
       }
       
       const botao__acerta = document.getElementById('btnAcerte')
       botao__acerta.addEventListener('click', function (){
              let numeroSorteado = sorteia()
                     
              let palpite = parseInt(document.getElementById ('PalpiteAcerte').value);
                     
              let valorAposta = parseInt(document.getElementById('valorAcerte').value);
                     
              if (isNaN(palpite)){
                     document.getElementById('resultadoAcerte').innerHTML = `Palpite um número!`

              } else if (palpite === numeroSorteado){
                     document.getElementById('resultadoAcerte').innerHTML = `Parabéns!!! Você acertou.`
                     ganhou((9*valorAposta))

              }else {
                     document.getElementById('resultadoAcerte').innerHTML = `Que pena você perdeu. O número sorteado foi ${numeroSorteado}.`
                     perdeu(valorAposta)
              }
              })

       const botao__regra3 = document.getElementById('btnRegra3')
       botao__regra3.addEventListener('click', function (){
              let palpite = parseInt(document.getElementById('PalpiteRegra3__1').value)
                     
              let numerosorteado1 = Math.round((sorteia() - 0.5)/2)
                     
              let numerosorteado2 = Math.round((sorteia() - 0.5)/2)
                     
              let valorAposta = parseInt(document.getElementById('valorRegra3').value)
                     
              while (numerosorteado2 === numerosorteado1){
                     numerosorteado2 = Math.round((sorteia())/2)
              }
                     
              if (isNaN(palpite)){
                     document.getElementById('resultadoRegra3').innerHTML = `Palpite um número!`
                            
              } else if (palpite === numerosorteado1 || palpite === numerosorteado2){
                            
                     document.getElementById('resultadoRegra3').innerHTML = `Parabéns!!! Você acertou. Os números sorteados foram ${numerosorteado1} e ${numerosorteado2}.`
                     ganhou((1.9*valorAposta))
                            
              } else {
                            
                     document.getElementById('resultadoRegra3').innerHTML = `Que pena você perdeu. Os números sorteados foram ${numerosorteado1} e ${numerosorteado2}.`
                     perdeu(valorAposta)
              }
                     
       })
       
       const btn__multiplicador = document.getElementById('btnMultiplicador')
       btn__multiplicador.addEventListener ('click', function () {
              let palpite = parseFloat(document.getElementById('PalpiteMultiplicador').value)
                     
              let numerosorteado = (Math.random()*3)
              numerosort = parseFloat(numerosorteado.toFixed(1))
                     
              let valorAposta = parseInt(document.getElementById('valorMultiplicador').value)
              console.log(valorAposta)
                     
              if (isNaN(palpite)){
                     document.getElementById('resultadoMultiplicador').innerHTML = `Palpite um número!`
                            
              }else if (palpite < numerosort || palpite === numerosort){
                     document.getElementById('resultadoMultiplicador').innerHTML = `Parabéns!!! Você ganhou. O número sorteado foi ${numerosort}`
                     ganhou(valorAposta*(palpite - 1))
                            
              } else {
                     document.getElementById('resultadoMultiplicador').innerHTML = `Que pena!!! Você perdeu. O número sorteado foi ${numerosort}`
                     perdeu(valorAposta)
              }
       })    
       
})
       
