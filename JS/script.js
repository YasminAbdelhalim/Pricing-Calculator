const unitPrice = document.querySelector("#unit-price");
const quantity = document.querySelector("#quantity");
const taxRate = document.querySelector("#tax-rate");
const form = document.querySelector("form");


function calculateSubtotal(unitPrice , quantity){
    return unitPrice * quantity ;
}


const subtotal = document.querySelector("#subtotal");
const discount = document.querySelector("#discount");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");

function updateCalculator (){
    const unitPriceValue = Number(unitPrice.value)
    const quantityValue = Number(quantity.value)
    const taxRateValue = Number(taxRate.value)

    const subtotalValue = calculateSubtotal( 
        unitPriceValue ,
         quantityValue );
    subtotal.textContent = subtotalValue.toFixed(2);

    const discountRate = calculateDiscount(quantityValue);
    const discountAmount = calculateDiscountAmount(
        subtotalValue, 
        discountRate);
    discount.textContent = discountAmount.toFixed(2)

    const discountedSubtotal = calculateDiscountedSubtotal(
        subtotalValue ,
        discountAmount
    )

    const taxValue = calculateTax(
        discountedSubtotal, 
        taxRateValue);
    tax.textContent = taxValue.toFixed(2) ;

    const totalValue = calculateTotal(
        discountedSubtotal, 
        taxValue);
    total.textContent = totalValue.toFixed(2)
}

function calculateDiscount(quantity){
    if(quantity >= 10){
      return  0.10
    }
    else if(quantity >= 5){
       return  0.05
    }
    else{
        return 0
    }
}

function calculateDiscountAmount(subtotal , discountRate){
    return subtotal * discountRate ;
}

function calculateDiscountedSubtotal(subtotal , discountAmount){
    return subtotal - discountAmount ;
}

function calculateTax(discountedSubtotal, taxRate) {
    return discountedSubtotal * (taxRate / 100)
}

function calculateTotal(discountedSubtotal, tax) {
    return discountedSubtotal + tax
}

unitPrice.addEventListener("input", updateCalculator)
quantity.addEventListener("input", updateCalculator)
taxRate.addEventListener("input", updateCalculator )

form.addEventListener("submit", (event) => {
    event.preventDefault();
}); 