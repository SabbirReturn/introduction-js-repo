const price = 500;

if (price>=4500){
    // 10% discount
    const discountPrice = price * 10 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if(price>=3000){
    // 5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price<= 1200){
    // 2% discount
    const discount = price * 2/100;
    const payAmount = price- discount;
    console.log(payAmount);
}
else{
    console.log('No Discount')
}