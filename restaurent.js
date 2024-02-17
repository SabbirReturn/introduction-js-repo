const age = 25;
const price= 500;

if (age<= 12){
    console.log('Free Food')
}
else if(age<=22){
    // 2% discount
    const discount = price * 2/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age>22){
    // 2% add vat
    const vat = price *2/100;
    const payAmount = price + vat;
    console.log(payAmount);
}
else{
    console.log('Pay the bill')
}
