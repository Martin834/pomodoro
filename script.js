let m = 25
let s = 0
let travail = true

let reset = document.createElement("button")
reset.textContent = "RESET"
reset.addEventListener("mousedown", resetPage)

function lanceTimer() {
    document.getElementById("lance").remove()
    document.body.appendChild(reset)
    document.getElementById("moment_travail").textContent = "ALLER AU BOULOT PETITE LARVE JE TE SURVAILLE"

    const timer = setInterval(function() {
        document.getElementById("minutes").textContent = m
        document.getElementById("secondes").textContent = s

        if (m == 0 && s == 0) {
            if (travail == true) {
                travail = false
                document.getElementById("moment_pause").textContent = "VA EN PAUSE LA"
                document.getElementById("moment_travail").textContent = ""
                m = 5
                s = 0
            }
            else {
                travail = true
                document.getElementById("moment_travail").textContent = "ALLER AU BOULOT PETITE LARVE JE TE SURVAILLE"
                document.getElementById("moment_pause").textContent = ""
                m = 25
                s = 0
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