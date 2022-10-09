//var a = prompt("neco");

/*function myFunction()
{
    document.getElementById("demo").innerHTML = "fungujefungujefunguje";
    document.getElementById("textInput").value="josh";
}*/

class equation{
    constructor(arr1, arr2, arr3){
        this.arr = arr1;
        this.ar_nums = arr2;
        this.ar_operators = arr3;
        this.number = 0;
    }
    
    seperate = function(){    
        var num = "";             //rozdělí na arr na čísla a operátory
        for(var i = 0; i < this.arr.length; i++)
        {
            if(isNaN(this.arr[i]) == false)
            {
                
                num += this.arr[i];
                console.log("A. index=" + this.arr[i]+ " num=" + num);
            }
            else
            {
                this.ar_nums.push(num);
                this.ar_operators.push(this.arr[i]);
                console.log("B. num=" + num + " ar_nums" + this.ar_nums + " at moment " + this.arr[i]);
                num = "";
            }
        }
        this.ar_nums.push(num);
        this.number += Number(this.ar_nums[0]);
        console.log("----ar_nums= " + this.ar_nums + " ar_operators= " + this.ar_operators + " ----");
    }
    erase = function(){
        this.arr.length = 0;
        this.ar_nums.length = 0;
        this.ar_operators.length = 0;
        this.number = 0;
    }
    er_arr = function(){
        this.arr.length = 0;
        this.ar_nums.length = 0;
        this.ar_operators.length = 0;
    }
}


var sekvence = new equation(new Array(), new Array(), new Array());

function fButton(val)
{
    var output = document.getElementById("textOutput");
    if((val !== '=')&&(val !== 'C'))
    {
        sekvence.arr.push(val);
        document.getElementById("textOutput").value=sekvence.arr.join('');
    }
    else if(val === '=')
    {
        if(isNaN(sekvence.arr[sekvence.arr.length-1]) !== true)
        {
            output.value=sekvence.arr.join('');
            output.value=result(sekvence);
        }
        else
        {
            output.value="Incorrect syntax";
            //console.log(sekvence.arr[]);
        }
    }
    else
    {
        sekvence.erase();
        output.value=sekvence.arr;
    }
}

function result(sekvence)
{
    var sum = 0;
    var num = "";
    console.log("?");
    sekvence.seperate();
    for(i = 0; i < sekvence.ar_operators.length; i++)
    {
        if(sekvence.ar_operators[i] == "+")
        {
            sekvence.number += Number(sekvence.ar_nums[i+1]);
        }
        else if(sekvence.ar_operators[i] == "-")
        {
            sekvence.number -= Number(sekvence.ar_nums[i+1]);
        }
        else if(sekvence.ar_operators[i] == "×")
        {
            sekvence.number *= Number(sekvence.ar_nums[i+1]);
        }
        else if(sekvence.ar_operators[i] == "/")
        {
            sekvence.number -= Number(sekvence.ar_nums[i+1]);
        }       
    }
    sekvence.er_arr();
    return sekvence.number;
}



/*if(isNaN(val) == false)
    {
        document.getElementById("textOutput").value=val;
        num += val;
    }
    else
    {
        document.getElementById("textOutput").value=val;
    }*/