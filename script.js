// Variáveis 
const screenDate = document.getElementById("screenDate")
const screenTime = document.getElementById("screenTime")
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const weekDay = ['Domingo','Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira','Sábado']

// Gera todo o relógio.
function gerateClock() {

    // Adiciona o '0' na frente caso o numero seja menor 10.  
    function addZero(numero){
        if(numero < 10){
            return "0" + numero
        }else{
            return numero
        }        
    }

    let ndata = new Date() // Pega a data atual.
    let time = ndata.toLocaleTimeString() // Retorna uma string com a hora local.
    let data = ((weekDay[ndata.getDay()]) + ", " + (addZero((ndata.getDate()).toString()) + " " + "de " + (months[ndata.getMonth()]) + " de " + (ndata.getFullYear()) + ".")) // Retorna a data completa.


    screenDate.textContent = data // Add a data na tela
    screenTime.textContent = time // Add a hora na tela
}

const displayClock = setInterval(gerateClock, 1000) // Chama a função gerateClick a cada 1 segundo