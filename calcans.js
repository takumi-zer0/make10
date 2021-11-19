var calc = 
{
	n1 : "1", n2 : "3", n3 : "3", n4 : "7"}
function calculate () 
	{
		var number = Array(calc.n1, calc.n2, calc.n3, calc.n4);
		var usedNumber;
		var tmp = "";
		var n1, n2, n3, n4;
		var len;
		var kotae = new Array();
		var countN1 = getCount(number, calc.n1);
		var countN2 = getCount(number, calc.n2);
		var countN3 = getCount(number, calc.n3);
		var countN4 = getCount(number, calc.n4);
		for (var i = 0, len = number.length; i < len; i++) 
		{
			n1 = number[i];
			usedNumber = new Array(4);
			usedNumber[0] = n1;
			for (var j = 0; j < len; j++) 
			{
				n2 = number[j];
				usedNumber[1] = n2;
				for (var k = 0; k < len; k++) 
				{
					n3 = number[k];
					usedNumber[2] = n3;
					for (var l = 0; l < len; l++) 
					{
						n4 = number[l];
						usedNumber[3] = n4;
						if (getCount(usedNumber, calc.n1) === countN1) 
						{
							if (getCount(usedNumber, calc.n2) === countN2) 
							{
								if (getCount(usedNumber, calc.n3) === countN3) {
									if (getCount(usedNumber, calc.n4) === countN4) {
										tmp += calculateEx(n1, n2, n3, n4, kotae);
									}
								}
							}
						}
					}
				}
			}
		}
		tmp = "";
		for (var i =0, len = kotae.length; i<len; i++) {
			tmp += kotae[i];
		}
		return tmp;
		
		function getCount(array, x) 
		{
			var count = 0;
			for (var i = 0, len = array.length; i < len; i++) {
				if (array[i] === x) {
					count++;
				}
			}
			return count;
		}
		
		function calculateEx(n1, n2, n3, n4, kotae) 
		{
			var enzanshi = Array("+", "-", "*", "/");
			var opt1, opt2, opt3, shiki, answer;
			var tmp = "";
			for (var i = 0, len = enzanshi.length; i < len; i++)
			{
				opt1 = enzanshi[i];
				for (var j = 0; j < len; j++) 
				{
					opt2 = enzanshi[j];
					for (var k = 0; k < len; k++) 
					{
						opt3 = enzanshi[k];
						// ((a op1 b) op2 c) op3 d
						shiki = "((" + n1 + opt1 + n2 + ")" + opt2 + n3 + ")" + opt3 + n4;
						console.log(shiki)
						answer = eval(shiki);
						if (answer === 10) {
							tmp += answer + " = " + shiki + "<br>";
							PushKotaeArray(answer + " = " + shiki + "<br>", kotae);
						}
						// (a op1 b) op2 (c op3 d)
						shiki = "(" + n1 + opt1 + n2 + ")" + opt2 + "(" + n3 + opt3 + n4 + ")";
						answer = eval(shiki);
						if (answer === 10) {
							tmp += answer + " = " + shiki + "<br>";
							PushKotaeArray(answer + " = " + shiki + "<br>", kotae);
						}
						// (a op1 (b op2 c)) op3 d
						shiki = "(" + n1 + opt1 + "(" + n2 + opt2 + n3 + "))" + opt3 + n4;
						answer = eval(shiki);
						if (answer === 10) {
							tmp += answer + " = " + shiki + "<br>";
							PushKotaeArray(answer + " = " + shiki + "<br>", kotae);
						}
						// a op1 ((b op2 c) op3 d)
						shiki = n1 + opt1 + "((" + n2 + opt2 + n3 + ")" + opt3 + n4 + ")";
						answer = eval(shiki);
						if (answer === 10) {
							tmp += answer + " = " + shiki + "<br>";
							PushKotaeArray(answer + " = " + shiki + "<br>", kotae);
						}
						// a op1 (b op2 (c op3 d))
						shiki = n1 + opt1 + "(" + n2 + opt2 + "(" + n3 + opt3 + n4 + "))";
						answer = eval(shiki);
						if (answer === 10) {
							tmp += answer + " = " + shiki + "<br>";
							PushKotaeArray(answer + " = " + shiki + "<br>", kotae);
						}
					}
				}
			}
			return tmp;
		}
	}


function checkDuplicate(array, str) {
	for(var i =0; i < array.length; i++) {
		if(str == array[i]){
			return true;
		}
	}
	return false;
};

function PushKotaeArray(val, array) {
	if(!checkDuplicate(array, val)) {
		array.push(val);
		console.log(array)
	}
}

calculate()

console.log(eval((1+7/3)*3))
