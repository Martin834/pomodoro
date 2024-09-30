// Initialisation des variables

let m = 25
let s = 0
let m_travail = 25
let s_travail = 0
let m_pause = 5
let s_pause = 0
let travail = true
let alerte = document.getElementById("alerte")

let startBtn = document.getElementById("start")
// Detecte quand le bouton start est appuyé puis change se forme et lance le timer
startBtn.addEventListener("click", () => {
    startBtn.classList.remove("fa-play")
    startBtn.classList.add("fa-arrows-rotate")
    lanceTimer()
})

function lanceTimer() {
    
    // si le bouton reload est appuyé, la page est reload
    startBtn.addEventListener("click", () => {
        window.location.reload()
    })

    document.getElementById("moment_travail").textContent = "Travaille bien cher ami"

    // désactive les boutons de changement de temps
    document.getElementById("descend_travail").disabled = true
    document.getElementById("monte_travail").disabled = true
    document.getElementById("descend_pause").disabled = true
    document.getElementById("monte_pause").disabled = true

    // cette fonction se lance toutes les secondes
    const timer = setInterval(function() {
        
        document.getElementById("minutes").textContent = m
        document.getElementById("secondes").textContent = s

        if (m == 0 && s == 0) {
            // quand vient le moment de la pause :
            if (travail == true) {
                travail = false
                document.getElementById("moment_pause").textContent = "C'est la pause !"
                document.getElementById("moment_travail").textContent = ""
                m = m_pause
                s = s_pause
                alerte.play()
            }
            // quand vient le moment de travailler :
            else {
                travail = true
                document.getElementById("moment_travail").textContent = "Allez hop hop au boulot !"
                document.getElementById("moment_pause").textContent = ""
                m = m_travail
                s = s_travail
                alerte.play()
            }
        }

        // ici on décrémente les variables
        else if (s == 0) {
            m--
            s = 59
        }
        else {
            s--
        }
    }, 1000)
}

// fonction modifiant le temps avec les boutons de gauche
function changeTemps(nb_secondes, travail) {
    // si on modifie le temps de travail, on vient ici.
    if (travail == true) {
        m_travail = document.getElementById("set_minutes_travail").textContent
        s_travail = document.getElementById("set_secondes_travail").textContent
        // tests pour changer l'affichage des minutes / secondes
        if (nb_secondes < 0) {
            if (s_travail == 0) {
                s_travail = 30
                m_travail--
            }
            else {
                s_travail = 0
            }
        }
        else {
            if (s_travail == 30) {
                s_travail = 0
                m_travail++
            }
            else {
                s_travail = 30
            }
        }
        document.getElementById("set_minutes_travail").textContent = m_travail
        document.getElementById("set_secondes_travail").textContent = s_travail
        document.getElementById("minutes").textContent = m_travail
        document.getElementById("secondes").textContent = s_travail
    }
    // si on modifie le temps de pause, on vient ici.
    else {
        m_pause = document.getElementById("set_minutes_pause").textContent
        s_pause = document.getElementById("set_secondes_pause").textContent
        // tests pour changer l'affichage des minutes / secondes
        if (nb_secondes < 0) {
            if (s_pause == 0) {
                s_pause = 30
                m_pause--
            }
            else {
                s_pause = 0
            }
        }
        else {
            if (s_pause == 30) {
                s_pause = 0
                m_pause++
            }
            else {
                s_pause = 30
            }
        }
        document.getElementById("set_minutes_pause").textContent = m_pause
        document.getElementById("set_secondes_pause").textContent = s_pause
    }
    m = m_travail
    s = s_travail
}