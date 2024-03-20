import inquirer from "inquirer";
const ourCalculator = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select only one operator to calculate the number",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Square", "Sin"],
    },
]);
if (ourCalculator.Operator === "Addition") {
    console.log(`The Addition is : ${ourCalculator.FirstNumber + ourCalculator.SecondNumber}`);
}
else if (ourCalculator.Operator === "Subtraction") {
    console.log(`The Subtraction is : ${ourCalculator.FirstNumber - ourCalculator.SecondNumber}`);
}
else if (ourCalculator.Operator === "Multiplication") {
    console.log(`The Multiplication is : ${ourCalculator.FirstNumber * ourCalculator.SecondNumber}`);
}
else if (ourCalculator.Operator === "Division") {
    console.log(`The Division is : ${ourCalculator.FirstNumber / ourCalculator.SecondNumber}`);
}
else if (ourCalculator.Operator === "Square") {
    if (ourCalculator.SecondNumber === 2) {
        console.log(`The Square of ${ourCalculator.FirstNumber} is : ${ourCalculator.FirstNumber ** ourCalculator.SecondNumber}`);
    }
    else {
        console.log('Please Enter the second number equal to 2.');
    }
}
else if (ourCalculator.Operator === "Sin") {
    let anglValue = ourCalculator.FirstNumber / ourCalculator.SecondNumber;
    console.log(`The Sin of ${anglValue} degree is : ${Math.sin((anglValue * Math.PI) / 180)}`);
}
else {
    console.log("Please select a valid operator");
}
