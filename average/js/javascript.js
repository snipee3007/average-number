var avg = [];

function average(){
	var ans = prompt("Add a number: ");
	var sum = 0;
	if (ans.length != 0)
	{
		avg.push(ans);
	}
    document.getElementById('cout').innerHTML = avg;
	for (i = 0; i < avg.length; ++i)
	{
		sum += avg[i] / 1;
	}
	if (avg.length > 1)
	{
		sum = sum / (avg.length);
	}
	document.getElementById('Avg').innerHTML = sum;
}
