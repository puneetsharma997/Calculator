const allButton = document.querySelectorAll('#buttons');
const currentOperandText = document.querySelector('[data-current-operand]')

let sstring = '';


allButton.forEach(function(buttons)
{
    buttons.addEventListener('click', mainFunction)
})


// Function For Calculations
function mainFunction(event)
{
    if (event.target.innerText == '.' && sstring.includes('.'))  // for only one decimal 
    {
        return
    }

    if (event.target.innerText == '=')                          // performing calculations
    {
        sstring = eval(sstring).toString();
        // sstring = (eval(sstring).toFixed(2)).toString();
        currentOperandText.innerText = sstring;
    }

    else if (event.target.innerText == 'AC')                    // clear all
    {
        sstring = '';
        currentOperandText.innerText = sstring;
    }

    else if (event.target.innerText == 'DEL')                   // delete one character
    {
        sstring = sstring.substr(0, sstring.length - 1)
        currentOperandText.innerText = sstring;
    }

    else
    {
        sstring += event.target.innerText
        currentOperandText.innerText = sstring;
    }
}


