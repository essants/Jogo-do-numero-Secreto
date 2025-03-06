alert('Bem-vindo ao jopo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 +1);
console.log(numeroSecreto);
let chute ;
let tentativa = 1;

// se chute for igual ao número secreto

while (chute != numeroSecreto){ 
   chute = prompt('Escolha um número entre 1 e 100');


        if (chute == numeroSecreto) {
           break;
        }  
        else {
            if (chute > numeroSecreto) {
            alert ('O número digitado é maior do que o número secreto');
        }
        else{
            alert ('O número digitado é menor do que o número secreto');
        }
       tentativa ++;
    }
 }



/* alert('Me diga qual é o dia da semana')
let  diaDigitado = prompt('Digite que dia é hoje')
let sabado = 'sabado' 
let domingo = 'domingo'

if (diaDigitado == sabado){
    alert('Hoje é sábado, tenha um bom final de semana!')
}
if  (diaDigitado == domingo){
    alert('Hoje é domingo, tenha um bom final de semana!')
}
else {alert('Hoje é' + diaDigitado + 'tenha um boa semana!')

}

alert('Bem-vindo!')
let digitado = prompt('Digite um número positivo ou negativo:')

if (digitado <0){
    alert ('O número é negativo')
}

else {
    alert('O número é positivo')
}


alert ('Bem vindo ao placar')
let pontos = prompt ('Informe quantos pontos o jogador obteve:')

if (pontos >= 100){
    alert('Parabéns, vocÊ pontuou o suficiente e venceu!')
}

 else {
    alert('Tente novamente e boa sorte')
}


alert ('Sistema de consulta de saldo para aprovação do crédito imobiliário')
let nome = prompt ('Por favor, digite seu nome:')
let saldo = prompt ('Agora digite seu saldo para verificação')

if (saldo >= 20000){
    alert ('Parabéns' + nome + ', seu saldo é suficiete para pré-aprovação')
}

 if (saldo >=10000){
    alert ('Puxa' + nome + 'seu saldo ainda não é suficiente para pré-aprovação, mas consulte a tabela para verificação de condições especiais para você')
}

else {
    alert ('Desta vez não será possivel a liberação para consulta, mas não desista, tente novamente após 3 meses.')
}
*/

