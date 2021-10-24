function getInputValue(){
    const addedDeposit = document.getElementById('added-deposit');
    const addedDepositAmount = addedDeposit.value;
    const DepositAmmount = parseFloat(addedDepositAmount);
    addedDeposit.value = '';
    return DepositAmmount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
    const DepositAmmount = getInputValue();
    /* const addedDeposit = document.getElementById('added-deposit');
    const addedDepositAmount = addedDeposit.value;
    const DepositAmmount = parseFloat(addedDepositAmount); */

    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositText);

    totalDeposit.innerText = DepositAmmount + totalDepositAmount;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceAmount + DepositAmmount;
    // addedDeposit.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const addedWithdraw = document.getElementById('added-withdraw');
    const addedWithdrawAmount = addedWithdraw.value;
    const withdrawAmount = parseFloat(addedWithdrawAmount);
    

    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawText = totalWithdraw.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawText);

    totalWithdraw.innerText = totalWithdrawAmount + withdrawAmount;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceAmount - withdrawAmount;
    addedWithdraw.value = '';
})