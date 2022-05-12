function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);


    //compound interest formula
    let compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))
		
    //validate the principal. If negative or 0 alert user and focus on principal
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    //display result
    document.getElementById("result").innerHTML = "<br>If you deposit  <mark>"+principal+"</mark>,<br> at an interest rate of" +
    "<mark>"+rate+"</mark>.<br>You will receive an amount of <mark>"+interest.toFixed(2)+"</mark>,<br>in the year <mark>"+year+"</mark><br>" +
    "<br>With monthly compounded interest your balance would instead be <mark>"+ compounded.toFixed(2)+"</mark>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}