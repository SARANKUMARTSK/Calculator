let display=document.createElement('div');
display.innerHTML="";
display.setAttribute('class','display');
let input = document.createElement('input');
input.innerHTML="";
input.setAttribute('class','inputbox')
display.append(input);
document.body.append(display);
let Keyboard=document.createElement('div')
Keyboard.innerHTML="";
Keyboard.setAttribute('class','Keyboard')
let buttonGroup=document.createElement('div');
buttonGroup.innerHTML="";
buttonGroup.setAttribute('class',"buttonGroup")
let button3 = document.createElement('button');
button3.setAttribute('class','button');
button3.innerHTML="%";
button3.setAttribute('value','%');
let button4 = document.createElement('button');
button4.setAttribute('class','button');
button4.innerHTML="AC";
button4.setAttribute('value','AC');
let button5 = document.createElement('button');
button5.setAttribute('class','button');
button5.innerHTML="7";
button5.setAttribute('value','7');
let button6 = document.createElement('button');
button6.setAttribute('class','button');
button6.innerHTML="8";
button6.setAttribute('value','8');
let button7 = document.createElement('button');
button7.setAttribute('class','button');
button7.innerHTML="9";
button7.setAttribute('value','9');
let button8 = document.createElement('button');
button8.setAttribute('class','button');
button8.innerHTML="÷";
button8.setAttribute('value','/');
let button9 = document.createElement('button');
button9.setAttribute('class','button');
button9.innerHTML="4";
button9.setAttribute('value','4');
let button10 = document.createElement('button');
button10.setAttribute('class','button');
button10.innerHTML="5";
button10.setAttribute('value','5');
let button11 = document.createElement('button');
button11.setAttribute('class','button');
button11.innerHTML="6";
button11.setAttribute('value','6');
let button12 = document.createElement('button');
button12.setAttribute('class','button');
button12.innerHTML="*";
button12.setAttribute('value','*');
let button13 = document.createElement('button');
button13.setAttribute('class','button');
button13.innerHTML="1";
button13.setAttribute('value','1');
let button14 = document.createElement('button');
button14.setAttribute('class','button');
button14.innerHTML="2";
button14.setAttribute('value','2');
let button15 = document.createElement('button');
button15.setAttribute('class','button');
button15.innerHTML="3";
button15.setAttribute('value','3');
let button16 = document.createElement('button');
button16.setAttribute('class','button');
button16.innerHTML="-";
button16.setAttribute('value','-');
let button17 = document.createElement('button');
button17.setAttribute('class','button');
button17.innerHTML="0";
button17.setAttribute('value','0');
let button18 = document.createElement('button');
button18.setAttribute('class','button');
button18.innerHTML=".";
button18.setAttribute('value','.');
let button19 = document.createElement('button');
button19.setAttribute('class','button');
button19.innerHTML="=";
button19.setAttribute('value','=');
let button20 = document.createElement('button');
button20.setAttribute('class','button');
button20.innerHTML="+";
button20.setAttribute('value','+');
buttonGroup.append(button4);
buttonGroup.append(button19);
buttonGroup.append(button5);
buttonGroup.append(button6);
buttonGroup.append(button7);
buttonGroup.append(button3);
buttonGroup.append(button9);
buttonGroup.append(button10);
buttonGroup.append(button11);
buttonGroup.append(button8);
buttonGroup.append(button13);
buttonGroup.append(button14);
buttonGroup.append(button15);
buttonGroup.append(button16);
buttonGroup.append(button17);
buttonGroup.append(button12);
buttonGroup.append(button18);
buttonGroup.append(button20);
Keyboard.append(buttonGroup);
document.body.append(Keyboard);

var resultShown = false;
function operations(currentValue){
    console.log(resultShown, 'result shown');
    let inputValue = input.value;
    let lastChar = inputValue[inputValue.length - 1];
    if(currentValue === '+' || currentValue === '-' ||currentValue === '*' ||currentValue === '%' ||currentValue === '÷' || currentValue === '.') {
         if(lastChar === '+' || lastChar === '-' ||lastChar === '*' ||lastChar === '%' ||lastChar === '÷' || lastChar === '.'){
            input.value = inputValue.substring(0, inputValue.length - 1) + currentValue;
            return;
        }
    }
    if(inputValue == ''){
        console.log(Number(currentValue).toString() == 'NaN', Number(currentValue));
        if(Number(currentValue).toString() == 'NaN'){
            alert('enter a number first');
            return;
        }
    }
    if(currentValue === 'AC'){
        input.value='';
    }
    else if(currentValue === 'Backspace'){
        input.value = input.value.substring(0, input.value.length - 1);
    }
    else if(currentValue === '='){
        console.log('equals', inputValue);
        input.value = math.evaluate(inputValue);
        resultShown = true;
    }
    else {
        if(resultShown) {
            input.value = currentValue;
            resultShown = false;
        }
        else {
            // let test = input.value + event.target.value;
            input.value = inputValue + currentValue;
        }
    }
}

buttonGroup.addEventListener('click', (e) => {
    let val = e.target.value;
    operations(val);
});

document.addEventListener('keydown', (event) => {
    var name = event.key;
    console.log(document.getElementsByTagName('input').value);
    let input = document.getElementsByTagName('input');

    if(name=='Enter'){
        operations('=');
        resultShown=true;
    }
    else if(!(name == '0' || name == '1' || name == '2' || name == '3' || name == '4' || name == '5' || name == '6' || name == '7' || name == '8' || name == '9' || name == '+' || name == '-' || name == '*' || name == '/' || name == '%' || name == '.'  || name == 'Backspace')){
        alert('only numbers allowed');
        event.preventDefault();
    }
    else {
        console.log(input.value,'value');
        operations(name);
        event.preventDefault();
        // input.value = (input.value ? input.value : '') + name;
    }
  });



