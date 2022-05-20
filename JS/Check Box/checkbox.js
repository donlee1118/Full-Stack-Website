document.getElementById("myButton").onclick = function() {
    
    const checkBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("masterBtn");
    const PayPalBtn = document.getElementById("PayPalBtn");
    if(checkBox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are NOT subscribed!");
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa Card!")
    }

    else if (masterBtn.checked){
        console.log("You are paying with a Master Card!")
    }

    else if (PayPalBtn.checked){
        console.log("You are paying with PayPal!")
    }

    else {
        console.log("Please choose a payment method")
    }

}