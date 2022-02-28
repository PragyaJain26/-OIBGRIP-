
// this is my js file
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let inputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('Button text is ', btnText);
        if (btnText == 'X') {
            btnText = '*';
            inputValue += btnText;
            screen.value = inputValue;
        }
        else if (btnText == 'C') {
            inputValue = "";
            screen.value = inputValue;
        }
        else if (btnText == '=') {
            screen.value = eval(inputValue);
        }
        else {
            inputValue += btnText;
            screen.value = inputValue;
        }

    })
}