function calcular(event){
    event.preventDefault()

    let alcoolInput = document.getElementById('alcool').value
    let gasolinaInput = document.getElementById('gasolina').value
    let contentResult = document.getElementById('content-result');
    let textResult = document.getElementById('text-result2');
    let alcoolSpan = document.getElementById('alcool-result');
    let gasolinaSpan = document.getElementById('gasolina-result');

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7){
        // Compensa usar álcool
        textResult.innerHTML = 'Compensa usar Álcool';
    }    
    else{
        // Compensa usar gasolina
        textResult.innerHTML = 'Compensa usar Gasolina';
    }
    
    alcoolSpan.innerHTML = 'Álcool R$ ' + alcoolInput;
    gasolinaSpan.innerHTML = 'Gasolina R$ ' + gasolinaInput;
    contentResult.classList.remove('hide')

}