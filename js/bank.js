//step-1:add eventhandler listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    
//step-2: get the deposit amount from the deposit input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString); 

//step-3: Get the current deposit total
//for non-input(element other than than input,textarea) use innertext to get the text
const depositTotalElement = document.getElementById('deposit-total');
const PreviousDepositTotalString = depositTotalElement.innerText;
const PreviousDepositTotal = parseFloat(newDepositAmountString);


//step:4: add number to set the total deposit
const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
//set the deposit total
depositTotalElement.innerText = currentDepositTotal;

//step-5: Get balance current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//step-6: calculate current total balace 
const currentbalanceTotal = previousBalanceTotal + newDepositAmount;
//set the balace total
balanceTotalElement.innerText = currentDepositTotal;

//7 clear deposit field
depositField.value = '';

});