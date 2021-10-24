function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const addedInputAmount = inputField.value;
    const totalAmmount = parseFloat(addedInputAmount);
    inputField.value = '';
    return totalAmmount;
}

function updateField(totalFieldId, Ammount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = Ammount + previousTotal;
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;
}

function updateBalance(Ammount, isAdd){
    const totalBalance = document.getElementById('total-balance');
   /*  const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText); */
    const totalBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = totalBalanceAmount + Ammount;
    }
    else{
        totalBalance.innerText = totalBalanceAmount - Ammount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function(){
    const DepositAmmount = getInputValue('added-deposit');
    if(DepositAmmount > 0){
        updateField('total-deposit', DepositAmmount);
        updateBalance(DepositAmmount, true);
    }
    
    /* 
    const addedDeposit = document.getElementById('added-deposit');
    const addedDepositAmount = addedDeposit.value;
    const DepositAmmount = parseFloat(addedDepositAmount); 
    */

    /* const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositText);
    totalDeposit.innerText = DepositAmmount + totalDepositAmount;
    */

    /*
     const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceAmount + DepositAmmount;
    */
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('added-withdraw');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateField('total-withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        alert("you can't withdraw more amount what you have in your accont!!");
    }
    
    /*
    const addedWithdraw = document.getElementById('added-withdraw');
    const addedWithdrawAmount = addedWithdraw.value;
    const withdrawAmount = parseFloat(addedWithdrawAmount);
    */

    /* 
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawText = totalWithdraw.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawText);
    totalWithdraw.innerText = totalWithdrawAmount + withdrawAmount;*/


    /*
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceAmount - withdrawAmount; 
    */
})