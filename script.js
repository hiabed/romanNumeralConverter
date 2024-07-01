const inputText = document.querySelector("#number");
const button = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

function convert()
{
    if (inputText.value === "")
        output.innerHTML = "Please enter a valid number."
    else if (parseInt(inputText.value, 10) <= 0)
        output.innerHTML = "Please enter a number greater than or equal to 1.";
    else if (parseInt(inputText.value, 10) > 3999)
        output.innerHTML = "Please enter a number less than or equal to 3999";

    let rCharacters = ["I", "V", "X", "L", "C", "D", "M"];
    let input = inputText.value.split('').reverse().join('');
    let result = "";
    for (let i = 0; i < input.length; i++)
    {
        if (parseInt(input[i], 10) <= 3)
        {
            for (let j = 0; j < parseInt(input[i], 10); j++)
                result += rCharacters[0];
        }
        else if (parseInt(input[i], 10) === 4)
            result += rCharacters[1] + rCharacters[0];
        else if (parseInt(input[i], 10) === 5)
            result += rCharacters[1];
        else if (parseInt(input[i], 10) === 6)
            result +=  rCharacters[0] + rCharacters[1];
            else if (parseInt(input[i], 10) === 7)
            result += rCharacters[0] + rCharacters[1] + rCharacters[1];
        else if (parseInt(input[i], 10) === 8)
            result += rCharacters[0] + rCharacters[1] + rCharacters[1] + rCharacters[1];
        else if (parseInt(input[i], 10) === 9)
            result += rCharacters[2] + rCharacters[0];
        rCharacters.splice(0, 2);
    }
    result = result.split('').reverse().join('');
    output.innerHTML = result;
}

function keyPress(event)
{
    if (event.key === 'Enter')
        convert();
}

button.addEventListener('click', convert);
inputText.addEventListener('keydown', keyPress);