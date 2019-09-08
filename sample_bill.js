/*
Spectrum internet has three different subscription packages for customers.

Package A: For $19.95 per month 10 hours of access are provided. 
Additional hours are $2.00 per hour.

Package B: For $24.95 per month 20 hours of access are provided. 
Additional hours are $1.00 per hour.

Package C: For $29.95 per month unlimited access is provided.

Customers have complained that it is difficult for them to determine what they will 
have to pay when on the different plans. Corporate sales has decided to send 
potential customers a sample bill outlaying what they would pay under each different plan.

Write a program that will calculate and display a customer's monthly bill under
each plan. Assume the customer uses an average of 52 hours per month. 
For each of the plans show the amount of money they would pay under the plan.
For package A show how much money they would save if they purchased package B or C. 
For package B customers, show how much they would save if they purchased package C. 
If there would be no savings, no message should be printed.
*/

// Pseudocode
/*
--Variables and Constants--

Declare Constants for baseA, baseB, and baseC.
Declare Constants for overage prices for each package:
    overA = 32 * 2.00.
    overB = 22 * 1.00.
Declare variables for packATotal, packBTotal.
Declare variables for packBSavings, packCSavingsA, and packCSavingsB.

--Calculations--
Calculate each package total:
    packATotal = baseA + overA.
    packBTotal = baseB + overB.
Calculate Savings:
    packBSavings = packATotal - packBTotal.
    packCSavingsA = packATotal - baseC.
    packCSavingsB = packBTotal - baseC.
    
--Displaying Values--
Display "Your Spectrum Bill can be understood as such."
Display "**These totals assume an average of 52 hours of usage per month**"

if userPackage is A:
    Display `Monthly you would pay ${packATotal}`
    Display `You could be saving ${packBSavings} with Package B.`
    Display `You could be saving ${packCSavingsA} with Package C!`
if userPackage is B:
    Display `Monthly you would pay ${packBTotal}`
    Display `You could be saving #{packCSavingsB} with Package C!`
if userPackage is C:
    Display `Monthly you would pay ${baseC}`
    
Display "Thank you for being a valued customer!"
*/

// Variables and Constants
const baseA = 19.95;
const baseB = 24.95;
const baseC = 29.95;
const overA = 32 * 2.00;
const overB = 22 * 1.00;
var packATotal, packBTotal, packCTotal;
var packBSavings, packCSavingsA, packCSavingsB;

// Calculations
packATotal = baseA + overA;
packBTotal = baseB + overB;

packBSavings = packATotal - packBTotal;
packCSavingsA = packATotal - baseC;
packCSavingsB = packBTotal - baseC;

// Display Values
console.log("Your Spectrum bill can be understood as such.");
console.log("**These totals assume an average of 52 hours of usage per month**");

console.log("\nIf your Package is A:");
console.log(`\tMonthly you would pay \$${packATotal.toFixed(2)}`);
console.log(`\tYou could be saving \$${packBSavings.toFixed(2)} with Package B.`);
console.log(`\tYou could be saving \$${packCSavingsA.toFixed(2)} with Package C!`);

console.log("\nIf your Package is B:");
console.log(`\tMonthly you would pay \$${packBTotal.toFixed(2)}`);
console.log(`\tYou could be saving \$${packCSavingsB.toFixed(2)} with Package C!`);

console.log("\nIf your Package is C:");
console.log(`\tMonthly you would pay \$${baseC.toFixed(2)}`);

console.log("\nThank you for being a valued customer!");
