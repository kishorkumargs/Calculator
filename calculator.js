let calculation = JSON.parse(localStorage.getItem('calculation'))|| "";
function removeAll(){
    calculation = "";
    console.log('Calculation is cleared.');
    document.getElementById('display-box').textContent = calculation;
}
function remove(){
    calculation = calculation.slice(0, -1);
    console.log('Last input is removed.');
    document.getElementById('display-box').textContent = calculation;
}
function calc(x){
    if(x == '<') calculation += "(";
    else if( x == '>') calculation += ")";
    else calculation += x;
    console.log(`Calculation is: ${calculation}`);
    document.getElementById('display-box').textContent = calculation;
}
function result(){
    let result = eval(calculation);
    console.log(`The result is: ${result}`);
    localStorage.setItem('calculation', JSON.stringify(result));
    calculation = String(result);
    document.getElementById('display-box').textContent = result;
}
document.addEventListener('keydown',function(event){
    switch(event.key){
        case "Backspace":
            remove();
            break;
        case "Enter":
            result();
            break;
        case "9":
            calc('9');
            break;
        case "8":
            calc('8');
            break;
        case "7":
            calc('7');
            break;
        case "6":
            calc('6');
            break;
        case "5":
            calc('5');
            break;
        case "4":
            calc('4');
            break;
        case "3":
            calc('3');
            break;
        case "2":
            calc('2');
            break;
        case "1":
            calc('1');
            break;
        case "0":
            calc('0');
            break;
        case "+":
            calc('+');
            break;
        case "-":
            calc('-');
            break;
        case "*":
            calc('*');
            break;
        case "/":
            calc('/');
            break;
    }
})