let plus = document.getElementById("plusFirst");
plus.addEventListener("click", function(){
    let firstClass = document.getElementById("fClassTicket").value ;
    let firstClassNumber = parseInt(firstClass);
    let increaseTicket = firstClassNumber + 1;
    document.getElementById("fClassTicket").value = increaseTicket;

    costCount();
    totalTax();
    finalCost();
})

let minus = document.getElementById("minusFirst");
minus.addEventListener("click", function(){
    let firstClass = document.getElementById("fClassTicket").value ;
    let firstClassNumber = parseInt(firstClass);
    let decreaseTicket = firstClassNumber - 1;
    document.getElementById("fClassTicket").value = Math.abs(decreaseTicket);

    costCount();
    totalTax();
    finalCost();
})

let ecoPlus = document.getElementById("plusEco");
ecoPlus.addEventListener("click",function(){
    let ecoClass = document.getElementById("eClassTicket").value;
    let ecoClassNumber = parseInt(ecoClass);
    let increaseTicketEco = ecoClassNumber + 1;
    document.getElementById("eClassTicket").value = increaseTicketEco;

    costCount();
    totalTax();
    finalCost();
})

let ecoMinus = document.getElementById("minusEco");
ecoMinus.addEventListener("click",function(){
    let ecoClass = document.getElementById("eClassTicket").value;
    let ecoClassNumber = parseInt(ecoClass);
    let decreaseTicketEco = ecoClassNumber - 1;
    document.getElementById("eClassTicket").value = Math.abs(decreaseTicketEco);

    costCount();
    totalTax();
    finalCost();
})

function costCount (){
    let firstClass = document.getElementById("fClassTicket").value ;
    let firstClassNumber = parseInt(firstClass);
    let ecoClass = document.getElementById("eClassTicket").value;
    let ecoClassNumber = parseInt(ecoClass);

    let finalSubtotal = (firstClassNumber*150) + (ecoClassNumber*100);
    document.getElementById("subtotalAmount").innerText = finalSubtotal;
    return finalSubtotal;

}

function totalTax (){
    let finalSubtotal = document.getElementById("subtotalAmount").innerText;
    let finalSubtotalNum = parseInt(finalSubtotal);
    let taxAmount = finalSubtotalNum * 0.1;
    document.getElementById("taxCount").innerText = taxAmount;
    return taxAmount;
}

function finalCost (){
    let finalSubtotal = document.getElementById("subtotalAmount").innerText;
    let finalSubtotalNum = parseInt(finalSubtotal);
    let taxAmount = document.getElementById("taxCount").innerText;
    let taxAmountNum = parseInt(taxAmount);
    let final = finalSubtotalNum + taxAmountNum;
    document.getElementById("totalPay").innerText = final;
    return final;
}

let bookingBtn = document.getElementById("bookingDone");
bookingBtn.addEventListener("click",function(){
    let beforeBook = document.getElementById("beforeBooking");
    beforeBook.style.display = "none";
    let afterBook = document.getElementById("afterBooking");

    let final = document.getElementById("totalPay").innerText;
    afterBook.innerText = `Your Booking was confirmed and your Total cost is : ${final}`
    afterBook.style.display = "block";
})


