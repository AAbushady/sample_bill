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

Declare Constants A, B, and C.
Declare Constants for baseA, baseB, and baseC.
Declare Constants for overage prices for each package:
    overA = 42 * 2.00.
    overB = 32 * 1.00.
Declare variable userPackage.
Declare variables for packATotal, packBTotal, and packCTotal.
Declare variables for packBSavings, packCSavingsA, and packCSavingsB.

--Calculations--
Calculate each package total:
    packATotal = baseA + overA.
    packBTotal = baseB + overB.
    packCTotal = baseC.
Calculate Savings:
    packBSavings = packATotal - packBTotal.
    packCSavingsA = packATotal - packCTotal.
    packCSavingsB = packBTotal - packCTotal.
    
--Displaying Values--
Display "Your Spectrum Bill can be broken down as such."
Display "**These totals assume an average of 52 hours of usage per month**"

Display "Which Package type do you have? Please enter the letter of your package!"
Input userPackage.

if userPackage is a or A:
    Display `Monthly you would pay ${packATotal}`
    Display `You could be saving ${packBSavings} with Package B.`
    Display `You could be saving ${packCSavingsA} with Package C!`
if userPackage is b or B:
    Display `Monthly you would pay ${packBTotal}`
    Display `You could be saving #{packCSavingsB} with Package C!`
if userPackage is c or C:
    Display `Monthly you would pay ${$packCTotal}`
    
Display "Thank you for being a valued customer!"
*/