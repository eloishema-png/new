const textbox= document.getElementById("textbox");
const toFahrenheit= document.getElementById("toFahrenheit");
const toCelsius= document.getElementById("toCelsius");
const result= document.getElementById("result");
let temp;
   
function convert(){
    if(toFahrenheit.checked){
        temp=Number(textbox.value);
        temp=temp*9/5 + 32;
        result.textContent=temp.toFixed(1) +"°F";
        result.style.color = "green"
    } 
    else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32) *(5/9);
        result.textContent = temp.toFixed(1) +"°C";
        result.style.color = "green"

    }
    else{
        result.textContent = "select a unit";
        result.style.color = "rgb(150, 3, 3)"
    }
}






const love = "real"


if(love =="real"){
    console.log("Welcome into my life")
}
else{
    console.log("Go a way")
}