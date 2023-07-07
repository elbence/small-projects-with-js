let homeDisplayEm = document.getElementById("home-display-em")
let guestDisplayEm = document.getElementById("guest-display-em")

let homeScore = 0
let guestScore = 0

console.log(homeDisplayEm)

// -----------------------------------------------------------------------------

function add1ToHome() {
    homeScore += 1
    renderHomeScore()
}

function add2ToHome() {
    homeScore += 2
    renderHomeScore()
}

function add3ToHome() {
    homeScore += 3
    renderHomeScore()
}

function renderHomeScore() {
    homeDisplayEm.textContent = homeScore
}

// -----------------------------------------------------------------------------

function add1ToGuest() {
    guestScore += 1
    renderGuestScore()
}

function add2ToGuest() {
    guestScore += 2
    renderGuestScore()
}

function add3ToGuest() {
    guestScore += 3
    renderGuestScore()
}

function renderGuestScore() {
    guestDisplayEm.textContent = guestScore
}

// -----------------------------------------------------------------------------


