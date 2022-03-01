let minimumIncome = 300000;
const for05percent = 100000;
const for10percent = 300000;
const for15percent = 400000;
const for20percent = 500000;

document.getElementById('button-input').addEventListener('click', () => {
    showTaxResult('');
    const input = document.getElementById('income-input');
    const taxType = document.getElementById('inputGroupSelect');

    if (taxType.value === '0') {
        showTaxResult('Please choose your tax type and input your tax payable income in number');
    }
    else {

        if (isNaN(input.value)) {   // input not number
            showTaxResult('Income should be a number');
            return;
        }
        else if (input.value < 0) { // input is negative
            showTaxResult("Income should be positive");
            return;
        }
        else if (isNaN(parseFloat(input.value))) {  // input empty
            showTaxResult("Input is Empty");
            return;
        }
        else {
            const income = parseFloat(input.value);

            taxType.value === '1' ? minimumIncome = 300000 : minimumIncome = 350000;
            // debugger;
            showTaxResult(`For ${income} total tax is ${calculateTax(income)}`);
        }
    }

});

const calculateTax = income => {
    let tax = 0;
    // >1600000
    if (income > (minimumIncome + for05percent + for10percent + for15percent + for20percent)) {
        tax += (income - (minimumIncome + for05percent + for10percent + for15percent + for20percent)) * 0.25;
        income = (minimumIncome + for05percent + for10percent + for15percent + for20percent);
    }
    // >1100000
    if (income > (minimumIncome + for05percent + for10percent + for15percent)) {
        tax += (income - (minimumIncome + for05percent + for10percent + for15percent)) * 0.2;
        income = (minimumIncome + for05percent + for10percent + for15percent);
    }
    // >700000
    if (income > (minimumIncome + for05percent + for10percent)) {
        tax += (income - (minimumIncome + for05percent + for10percent)) * 0.15;
        income = (minimumIncome + for05percent + for10percent);
    }
    // >400000
    if (income > (minimumIncome + for05percent)) {
        tax += (income - (minimumIncome + for05percent)) * 0.10;
        income = (minimumIncome + for05percent);
    }
    // >300000
    if (income > (minimumIncome)) {
        tax += (income - (minimumIncome)) * 0.05;
    }
    return tax;
};

const showTaxResult = messages => {
    document.getElementById('tax-result').innerText = messages;
}

