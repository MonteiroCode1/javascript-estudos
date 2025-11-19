const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const Hora_Brasil = Number(frm.inHoraBrasil.value)
    let HoraFrança = Hora_Brasil + 5
    if (HoraFrança > 24) {
        HoraFrança -= 24 
    }
    resp.innerText = `Hora na França  ${HoraFrança.toFixed(2)}`
    resp.style.color = "green"
})