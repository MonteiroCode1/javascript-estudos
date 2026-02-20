const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // sempre melhor deixar no início

  const Velocidade_permitida = Number(frm.inVelocidade.value)
  const Velocidade_Condutor = Number(frm.inCondutor.value)

  const limiteLeve = Velocidade_permitida * 1.2

  if (Velocidade_Condutor <= Velocidade_permitida) {
    resp.innerText = "Sem Multa"
  } else if (Velocidade_Condutor <= limiteLeve) {
    resp.innerText = "Multa Leve"
  } else {
    resp.innerText = "Multa Grave"
  }
})
