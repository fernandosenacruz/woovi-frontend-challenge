/**
 * Calculates the total amount with interest.
 *
 * @param {number} principal - The principal amount.
 * @param {number} monthlyCET - The monthly CET rate.
 * @param {number} numInstallments - The number of installments.
 * @return {string} The total amount with interest, formatted as a string with commas as the decimal separator.
 */
function calculateTotalAmountWithInterest(
  principal: number,
  monthlyCET: number,
  numInstallments: number
): string {
  const monthlyRate = monthlyCET / 100;
  const totalAmount = principal * (1 + monthlyRate) ** numInstallments;
  return totalAmount.toFixed(2).toString().replace('.', ',');
}

/**
 * Calculates the installment amount.
 *
 * @param {number} totalAmount - The total amount.
 * @param {number} numInstallments - The number of installments.
 * @return {string} The calculated installment amount.
 */
function calculateInstallmentAmount(
  totalAmount: number,
  numInstallments: number
): string {
  return (totalAmount / numInstallments).toFixed(2).replace('.', ',');
}

/**
 * Calculates the total price by adding the total amount and installment value.
 *
 * @param {number} price - The price of the item.
 * @param {number} numInstallments - The number of installments.
 * @param {number} cet - The monthly CET rate.
 * @return {object} An object containing the total amount and installment value.
 */
export default function calculateTotalPrice(
  price: number,
  numInstallments: number,
  cet: number
) {
  return {
    totalAmount: calculateTotalAmountWithInterest(price, cet, numInstallments),
    installmentValue: calculateInstallmentAmount(price, numInstallments),
  };
}
