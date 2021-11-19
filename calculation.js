var symbol = Array('+','-','*','/');
var arr,sym;

//generate all combinations
function gen(input) {
    arr = new Array(24);
    sym = new Array(256)
    symbol = ["+", "-", "*", "/"]

    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(4);
    }
    for (var i = 0; i < sym.length; i++) {
        sym[i] = new Array(4);
    }
    var count = 0;
    var count2 = 0;
    for (var i = 0; i < 4 ; i++) {
        for (var j = 0; j < 4 ; j++) {
            for (var k = 0; k < 4 ; k++) {
                for (var l = 0; l < 4 ; l++) {
                    if (i != j && i != k && i != l && j != k && j != l && k != l) {
                        arr[count][0] = input[i];
                        arr[count][1] = input[j];
                        arr[count][2] = input[k];
                        arr[count][3] = input[l];
                        count++;
                    }
                    sym[count2][0] = symbol[i];
                    sym[count2][1] = symbol[j];
                    sym[count2][2] = symbol[k];
                    count2++;
                }
            }
        }
    }

}

//evaluate numbers
function calc(){
    ans = []
    sym.forEach(eq => {
        arr.forEach(num => {
            var text = num[0] + eq[0] + num [1] + eq[1] + num[2] + eq[2] + num[3]
            check(text)
            var text = "(" + num[0] + eq[0] + num [1] + ")" + eq[1] + num[2] + eq[2] + num[3]
            check(text)
            var text = "(" + num[0] + eq[0] + num [1] + eq[1] + num[2] + ")" + eq[2] + num[3]
            check(text)
        })
    })
    if(ans.length == 0){
        ans = ["no answer"]
        return ans
    }else{
        return ans
    }
}

//if 10, return output
var ans = []
function check(text){
    if(ans.length == 0){
        if (eval(text) == 10 && !ans.includes(text)) {
            ans.push(text)
        }
    }
}

module.exports = {gen, calc}