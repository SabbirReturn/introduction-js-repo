
const weight = 32;
const height = 1.79832;
const bmi=  weight / (height)^2;
if(bmi < 18.5){
    console.log('you are underweight');
 }
 else if(bmi >= 18.5 & bmi <=24.9){
   console.log('you are normal');
 }
 else if(bmi >=25 & bmi <= 29.9){
   console.log('you are normal');
 }
 else{
   console.log('You are obese')
 }
