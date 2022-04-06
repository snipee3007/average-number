var avg = [];
var sum = 0;

function reset(){
	avg = [];
	sum = 0;
	document.getElementById('cout').innerHTML = "Sum of: " + avg;
	document.getElementById('Avg').innerHTML = "Average is: " + avg;
}

function average(){
	var ans = prompt("Add a number: ");

	if (ans.length != 0)
	{
		avg.push(" " + ans);
		sum += ans / 1;
		document.getElementById('cout').innerHTML = "Sum of " + avg.length +" number(s): "+ avg;
		var a = ans;
		if (avg.length > 1)
		{
			a = sum / (avg.length);
		}
		document.getElementById('Avg').innerHTML = "Average is: " + a;
	}
}
