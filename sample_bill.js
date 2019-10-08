/*global console*/
/*jshint esversion:6*/

(function () {
    'use strict';

    // Variables and Constants
    const baseA = 19.95;
    const baseB = 24.95;
    const baseC = 29.95;
    const overA = 32 * 2.00;
    const overB = 22 * 1.00;
    let userInput = 'A';
    let packATotal, packBTotal, packCTotal;
    let packBSavings, packCSavingsA, packCSavingsB;

    // Calculations
    packATotal = baseA + overA;
    packBTotal = baseB + overB;

    packBSavings = packATotal - packBTotal;
    packCSavingsA = packATotal - baseC;
    packCSavingsB = packBTotal - baseC;

    // Display Values
    console.log("Your Spectrum bill can be understood as such.\n");
    console.log("**These totals assume an average of 52 hours of usage per month**");

    if (userInput === 'a' || userInput === 'A') {
        console.log("\nIf your Package is A:");
        console.log(`\tMonthly you would pay \$${packATotal.toFixed(2)}`);
        console.log(`\tYou could be saving \$${packBSavings.toFixed(2)} with Package B.`);
        console.log(`\tYou could be saving \$${packCSavingsA.toFixed(2)} with Package C!`);
    } else if (userInput === 'b' || userInput === 'B') {
        console.log("\nIf your Package is B:");
        console.log(`\tMonthly you would pay \$${packBTotal.toFixed(2)}`);
        console.log(`\tYou could be saving \$${packCSavingsB.toFixed(2)} with Package C!`);
    } else if (userInput === 'c' || userInput === 'C') {
        console.log("\nIf your Package is C:");
        console.log(`\tMonthly you would pay \$${baseC.toFixed(2)}`);
    }

    console.log("\nThank you for being a valued customer!");
})();
