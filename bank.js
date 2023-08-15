// step 01:add Eventlistener deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   get the deposit amount from input field
  const depositField = document.getElementById("deposit-amount");
  const newDepositAmountString = depositField.value;
  //   convert string to number
  const newDepositAmount = parseFloat(newDepositAmountString);
  //   deposit total amount
  const depositTotalElement = document.getElementById("update");
  const previousDepositTotalString = depositTotalElement.innerText;
  //   convert string to number
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //   summetion of total amount
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  //   clear the deposit field
  depositField.value = "";

  //   upgrate balance
  const upgradeBalace = document.getElementById("calculation");
  const previousBalaceTotalString = upgradeBalace.innerText;
  const previousBalaceTotal = parseFloat(previousBalaceTotalString);
  //   calculate current total balance
  const currentBalanceTotal = previousBalaceTotal + newDepositAmount;
  upgradeBalace.innerText = currentBalanceTotal;
});

// withdraw amount functionality

document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   withdraw amount input section
  const withdrawField = document.getElementById("withdraw-amount");
  const withdrawAmountString = withdrawField.value;
  //   convert value string to float
  const withdrawAmountTotal = parseFloat(withdrawAmountString);
  withdrawField.value = "";

  //   withdraw amout box calculation
  const withdrawAmount = document.getElementById("diduction");
  const withdrawStringBox = withdrawAmount.innerText;
  const withdrawFloat = parseFloat(withdrawStringBox);

  //   withdraw amount adding
  const currentWithdrawAmount = withdrawFloat + withdrawAmountTotal;
  withdrawAmount.innerText = currentWithdrawAmount;

  //   banace section calculation
  const balaceTotalElement = document.getElementById("calculation");
  const balaceTotalElementString = balaceTotalElement.innerText;
  const totalAmountOfBalance = parseFloat(balaceTotalElementString);

  const newBalanceTotal = totalAmountOfBalance - withdrawAmountTotal;
  balaceTotalElement.innerText = newBalanceTotal;
});
