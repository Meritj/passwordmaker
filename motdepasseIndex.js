const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase(); 
const dataNumber = "1234567890";
const dataSymbol = "$*€£%&§!()-_``éè";
const rangeValue = document.getElementById('password-length'); 
const passwordOutput = document.getElementById('password-output');

const generatePassword = () => {
    let data = [];
    let password = "";
    if (lowercase.checked) {
        data.push(...dataLowerCase)
    }
    if (uppercase.checked) {
        data.push(...dataUpperCase)
    }
    if (number.checked) {
        data.push(...dataNumber)
    }
    if (symbols.checked) {
        data.push(...dataSymbol)
    }
    if (data.length === 0){
        alert("Veuillez sélectionner des critères");
        return;
    }
    for(i = 0; i < rangeValue.value; i ++){
        password += data[Math.floor(Math.random() * data.length)];
        console.log(password)
    }
    passwordOutput.value= password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié";

    setTimeout(()=>{
        generateButton.textContent="Générer un MDP";
    },2000);
}

generateButton.addEventListener('click', generatePassword);
