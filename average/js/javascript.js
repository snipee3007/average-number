var avg = [];
var sum = 0;

function reset(){
	avg = [];
	sum = 0;
	document.getElementById('cout').innerHTML = "Sum of: " + avg;
	document.getElementById('Avg').innerHTML = "Average is: " + avg;
}

function cauchui(){
	var randnum = Math.floor((Math.random()*5) + 1);
	switch (randnum)
	{
		case 1:
			return "Mày bị Khánh à, này có phải số loz đâu, sao mày có thể ngu hơn cả thằng Khánh thế?";
			break;
		case 2:
			return "Ugh... Can you read?";
			break;
		case 3:
			return "bruh, khuyết tật gì chứ khuyết tật não thế này thì chịu...";
			break;
		case 4:
			return "Cốc cốc... bên trong đầu m có gì không đấy?";
			break;
		case 5:
			return "Dùng cái não mày mà nghĩ xem cần phải điền gì vào đây, à quên có quái đâu mà dùng.";
			break;
	}
}

function isNumber(n){
	return Number(n) === n;
}

function average(){
	var ans = prompt("Add a number: ");
	ans /= 1;
	if (isNumber(ans) == true)
	{
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
	else
	{
		alert(cauchui());
	}
	
}
