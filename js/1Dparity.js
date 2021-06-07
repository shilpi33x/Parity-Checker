var input = document.getElementById("input");
var outputData = document.getElementById("output-data");
var outputBit =  document.getElementById("output-bit");
var outputCheck = document.getElementById("output-check");

var goButton = document.getElementById("go-button");
goButton.addEventListener('click', ParityOperation);

var evenOddMenu = document.getElementById("even-odd-menu");

var switchButton = document.getElementById("switch-mode");
switchButton.addEventListener('click', SwitchParityMode);

var generator = document.getElementById("generator");
var checker = document.getElementById("checker");
var generatorText = document.getElementById("generator-text");
var checkerText = document.getElementById("checker-text");

function SwitchParityMode()
{
	if(generator.classList.contains("hide"))
	{
		generator.classList.remove("hide");
		checker.classList.add("hide");
		generatorText.classList.add("focus");;
		checkerText.classList.remove("focus");
		goButton.innerHTML = "Compute!";
	}
	else
	{
		checker.classList.remove("hide");
		generator.classList.add("hide");
		checkerText.classList.add("focus");
		generatorText.classList.remove("focus");
		goButton.innerHTML = "Check!";
	}
}

function CountOnes(inputVal)
{
	var count = 0, i;
	if(inputVal.length <= 0)
	{
		alert("No Input: Please enter a binary number");
		return -1;
	}
	for(i=0; i<inputVal.length; i++)
	{	
		if(inputVal[i] == 1)
			count++;
		else if(inputVal[i] != 0)
		{
			alert("Incorrect Input: not a binary number\nOnly 0s and 1s accepted.");
			return -1;
		}
	}
	return count;
}

function GenerateParity(inputVal, count)
{
	var parityBit = 0;
	var evenOdd = evenOddMenu.value;
	
	if(count != -1)
	{
		if(evenOdd == "even" && count%2 == 0)
			parityBit = 0;
		else if(evenOdd == "even")
			parityBit = 1;
		else if(count%2 != 0)
			parityBit = 0;
		else
			parityBit = 1;
		
		outputData.innerHTML = inputVal + parityBit;
		outputBit.innerHTML = parityBit;	
	}
}

function CheckParity(count)
{
	var evenOdd = evenOddMenu.value;

	if(count != -1)
	{
		if(evenOdd == "even" && count%2 == 0)
			outputCheck.innerHTML = "No Error: Data transmitted correctly";
		else if(evenOdd == "even")
			outputCheck.innerHTML = "Error in data transmission";
		else if(count%2 != 0)
			outputCheck.innerHTML = "No Error: Data transmitted correctly";
		else
			outputCheck.innerHTML = "Error in data transmission";			
	}
}

function ParityOperation()
{
	var inputVal = input.value;
	var count = CountOnes(inputVal);
	
	GenerateParity(inputVal, count);
	CheckParity(count);
}