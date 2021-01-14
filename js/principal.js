const pacientes = document.querySelectorAll('.paciente')


for (i=0; i < pacientes.length; i++ ){
    let weight = pacientes[i].cells[1].innerHTML
    let height = pacientes[i].cells[2].innerHTML
    if (weight >= 300) {
        pacientes[i].cells[4].textContent = `Verifique o peso inserido.`
        // Adicionando uma nova classe ao paciente que está com a altura inválida
        // Ele precisa ser detectado pelo css
        pacientes[i].classList.add('paciente-invalido')
    } else {
        if (height >= 2.3) {
            pacientes[i].cells[4].textContent = `Verifique a altura inserida.`
            // Adicionando uma nova classe ao paciente que está com a altura inválida
            // Ele precisa ser detectado pelo css
            pacientes[i].classList.add('paciente-invalido')    
        } else {
            let bmi = (weight/Math.pow(height,2)).toFixed(2)
            pacientes[i].cells[4].textContent = bmi
        }
    }
}


