// let price = 500;
// const isLeader = true;

// if(isLeader===true){
//     price= 0;
// }
// else{
//     price= price+100;
// }
// console.log(price)

// simple ternary

//  price = isLeader === true ? 0 : price +100;
//  console.log(price)

// const age = 22;

// vote=age>=18 ? 'vote dao': 'muri khaw';
// console.log(vote)

// semi-advance-ternary
let price= 500;
const isLeader = false;
const vat = price *2/100;
// if ( isLeader==true){
//     if (price>1000){
//         price= price /2 +vat;
//     }
//     else{
//         price = price+vat;
//     }
// }
// else{
//     price= price+vat;
// }
// console.log(price);
price = isLeader===true ? price>1000 ? price/2+vat : price +vat : price+ vat;

console.log(price)