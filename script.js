let m_travail
let s_travail
let m_pause
let s_pause
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

function changeTemps(nb_secondes, travail) {
    if (travail == true) {
        m = document.getElementById("set_minutes_travail").textContent
        s = document.getElementById("set_secondes_travail").textContent
        if (nb_secondes < 0) {
            if (s == 0) {
                s = 30
                m--
            }
            else {
                s = 0
            }
        }
        else {
            if (s == 30) {
                s = 0
                m++
            }
            else {
                s = 30
            }
        }
        document.getElementById("set_minutes_travail").textContent = m
        document.getElementById("set_secondes_travail").textContent = s
    }
    else {
        m = document.getElementById("set_secondes_pause").textContent
        s = document.getElementById("set_secondes_pause").textContent
        if (nb_secondes < 0) {
            if (s == 0) {
                s = 30
                m--
            }
            else {
                s = 0
            }
        }
        else {
            if (s == 30) {
                s = 0
                m++
            }
            else {
                s = 30
            }
        }
    }

}