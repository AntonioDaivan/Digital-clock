// Variáveis 
const screen = document.getElementById("screen")
const screenDesbloqueio = document.getElementById("screen-desbloqueio")
const body = document.querySelector('body')
const screenDate = document.getElementById("screenDate")
const screenTime = document.getElementById("screenTime")
const themeIcon = document.querySelector('.bx')

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

// Alterar para tema claro e escuro
const changeTheme = _ => {
    body.classList.toggle('dark')
    themeIcon.classList.toggle('bxs-moon')
    themeIcon.classList.toggle('bxs-sun')
}

themeIcon.addEventListener('click', changeTheme)