/*
1. add event hanlder witht the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw Total
4.Caluculat total withdaraw amount 
4.5 Set total withdraw amounnt
5. get the balance total
6.calculate new blance total
6.5 set the new balance toal

//7: clear the infield filed
*/

//step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){

//step-2:
const withdrawField = document.getElementById('withdraw-field');
const newWithDrawAmountString = withdrawField.value;
const newWithDrawAmount = parseFloat(newWithDrawAmountString);


 //step-7
 withdrawField.value = '';
if(isNaN(newWithDrawAmount)){
    alert('please provide a valid number');
    return;
}


//step-3:
 const withdrawTotalElement = document.getElementById('withdraw-total');
 const previousWithdrawTotalString = withdrawTotalElement.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

 

//step-5; balace set
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


 //step-7
 withdrawField.value = '';

if(newWithDrawAmount > previousBalanceTotal){
    alert('You have insuffiecient balance');
    return;
}

//step-4:
const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
//step-4.5:
withdrawTotalElement.innerText = currentWithdrawTotal;

//step-6:
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

 //step-7
withdrawField.value = '';


});