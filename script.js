// Variáveis 
const screen = document.getElementById("screen")
const screenDesbloqueio = document.getElementById("screen-desbloqueio")
const body = document.getElementsByTagName("body")[0]
const screenDate = document.getElementById("screenDate")
const screenTime = document.getElementById("screenTime")

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

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

function desbloqueioScreen (e){
    if(e.which == "13"){
        screen.classList.toggle("desbloqueio")
        screenDesbloqueio.classList.toggle("reset")
        screenDesbloqueio.classList.toggle("desbloqueio")

        document.getElementById("password").value = ""
    }
}

// body.addEventListener("click", desbloqueioScreen)
body.addEventListener("keypress", desbloqueioScreen)