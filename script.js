let m = 25
let s = 0
let travail = true

let alerte = new Audio('sons/alerte.mp3')

function lanceTimer() {
    document.getElementById("lance").textContent = "RESET"
    document.getElementById("lance").addEventListener("mousedown", resetPage)

    document.getElementById("moment_travail").textContent = "Travaille bien cher ami"

    const timer = setInterval(function() {
        document.getElementById("minutes").textContent = m
        document.getElementById("secondes").textContent = s

        if (m == 0 && s == 0) {
            if (travail == true) {
                travail = false
                document.getElementById("moment_pause").textContent = "C'est la pause !"
                document.getElementById("moment_travail").textContent = ""
                m = 5
                s = 0
                alerte.play()
            }
            else {
                travail = true
                document.getElementById("moment_travail").textContent = "Allez hop hop au boulot !"
                document.getElementById("moment_pause").textContent = ""
                m = 25
                s = 0
                alerte.play()
            }
        }

        else if (s == 0) {
            m--
            s = 59
        }
        else {
            s--
        }
    }, 1)
}

function resetPage() {
    window.location.reload()
}