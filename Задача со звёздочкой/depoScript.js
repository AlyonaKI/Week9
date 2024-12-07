const depositAmount = document.getElementById("depositAmount");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.onclick = function () {
  const deposit = Number(depositAmount.value);
  const interestRate = 7 / 100;
  const totalAmount = deposit + deposit * interestRate;
  result.textContent = `Через год у вас будет ${totalAmount} рублей на счету`;
};

/* Первично, я решила её так:)
 * Пока на созвоне Света не показала почти готовый код на CodePen.
 * Но по этой ссылке открывается инструкция к нему, а не задание
 * let depositAmount = Number(prompt("Введите сумму в рублях, которую Вы хотите внести на депозит"));
 * const interestRate = 7 / 100;
 * let totalAmount = depositAmount + (depositAmount * interestRate);
 * alert(`Через год у вас будет ${totalAmount} рублей на счету`);*/
