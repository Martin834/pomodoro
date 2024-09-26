

let m = 25
let s = 0
let m_travail = 25
let s_travail = 0
let m_pause = 5
let s_pause = 0
let travail = true
let alerte = document.getElementById("alerte")

function lanceTimer() {

    document.getElementById("moment_travail").textContent = "Travaille bien cher ami"

    document.getElementById("descend_travail").disabled = true
    document.getElementById("monte_travail").disabled = true
    document.getElementById("descend_pause").disabled = true
    document.getElementById("monte_pause").disabled = true

    const timer = setInterval(function() {
        
        document.getElementById("minutes").textContent = m
        document.getElementById("secondes").textContent = s

        if (m == 0 && s == 0) {
            if (travail == true) {
                travail = false
                document.getElementById("moment_pause").textContent = "C'est la pause !"
                document.getElementById("moment_travail").textContent = ""
                m = m_pause
                s = s_pause
                alerte.play()
            }
            else {
                travail = true
                document.getElementById("moment_travail").textContent = "Allez hop hop au boulot !"
                document.getElementById("moment_pause").textContent = ""
                m = m_travail
                s = s_travail
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
    }, 1000)
}

function resetPage() {
    window.location.reload()
}

function changeTemps(nb_secondes, travail) {
    if (travail == true) {
        m_travail = document.getElementById("set_minutes_travail").textContent
        s_travail = document.getElementById("set_secondes_travail").textContent
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
    else {
        m_pause = document.getElementById("set_minutes_pause").textContent
        s_pause = document.getElementById("set_secondes_pause").textContent
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