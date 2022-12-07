// Variáveis 
const screen = document.getElementById("screen")
const screenDesbloqueio = document.getElementById("screen-desbloqueio")
const body = document.getElementsByTagName("body")[0]
const screenDate = document.getElementById("screenDate")
const screenTime = document.getElementById("screenTime")

// Gera todo o relógio.
function gerateClock() {

    let ndata = new Date() // Pega a data atual.
    let time = ndata.toLocaleTimeString("pt-br") // Retorna uma string com a hora local.
    let data = new Intl.DateTimeFormat("pt-br", {
        dateStyle: "full"
    }).format(ndata) + "." // Retorna a data

    screenDate.textContent = data // Add a data na tela
    screenTime.textContent = time // Add a hora na tela
}

const displayClock = setInterval(gerateClock, 1000) // Chama a função gerateClick a cada 1 segundo