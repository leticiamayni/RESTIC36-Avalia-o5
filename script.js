var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var selectedGender = '';
var imc = '';

const inputGender = document.querySelectorAll('input[name="gender"');
inputGender.forEach((input) => {
    input.addEventListener('change', function(){
        selectedGender = this.value;
        console.log(selectedGender);
    });
});

function result() {
    const resultElement = document.getElementById('imc-result');
    let resultText = '';

    if (imc <= 18.5) {
        console.log('baixo peso');
        resultText = 'Classificação: Baixo peso';
    }
    if (imc >= 18.5 && imc <= 24.9) {
        console.log('peso ideal');
        resultText = 'Classificação: Sobrepeso';
    }
    if (imc >= 25 && imc <= 29.9) {
        console.log('sobrepeso');
        resultText = 'Classificação: Sobrepeso';
    }
    if (imc >= 30 && imc <= 34.9) {
        console.log('obs 1');
        resultText = 'Classificação: Obesidade grau 1';
    }
    if (imc >= 35 && imc <= 39.9) {
        console.log('obs 2');
        resultText = 'Classificação: Obesidade grau 2';
    }
    if (imc >= 40) {
        console.log('obs extrema');
        resultText = 'Classificação: Obesidade grau 3 (obesidade extrema)';
    }

    resultElement.textContent = resultText;
}

function calculate() {
    var heightValue = parseFloat(height.value) / 100;
    var weightValue = parseFloat(weight.value);

    imc = (weightValue / (heightValue * heightValue)).toFixed(2);

    console.log(imc);
    result();
}
