// CONSTANTS

// TIME
const simDaysInAYear = 28;
const simDaysInASeason = 7;

// enter age they transition to each lifestate
const transition = {
  baby: 0,
  toddler: 1,
  child: 4,
  teen: 10,
  adult: 18,
  elder: 70
}


// FUNCTIONS //

function calculateDaysOld(ageState, daysUntilBirthday) {
  if (ageState === 'baby') {
    return (transition.toddler * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'toddler') {
    return (transition.child * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'child') {
    return (transition.teen * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'teen') {
    return (transition.adult * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'adult') {
    return (transition.elder * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'elder') {
    return 'elder'
  }
}

function calculateAge(daysOld) {
  if (daysOld === 'elder') {
    return 'You already know this sim\'s age in days!'
  }

  return parseInt(daysOld / simDaysInAYear);
}

// http://www.countdowntopregnancy.com/tools/age_fertility_calculator.php
function calculateAnnualFertility(age) {
  if (age <= 12) {
    return 0.00;
  }
  else if (age === 13) {
    return 0.20;
  }
  else if (age === 14) {
    return 0.30;
  }
  else if (age === 15) {
    return 0.45;
  }
  else if (age === 16) {
    return 0.65;
  }
  else if (age === 17) {
    return 0.80;
  }
  else if (age === 18) {
    return 0.90;
  }
  else if (age === 19) {
    return 0.96;
  }
  else if (age >= 20 && age <= 24) {
    return 0.96;
  }
  else if (age >= 25 && age <= 29) {
    return 0.93;
  }
  else if (age >= 30 && age <= 34) {
    return 0.85;
  }
  else if (age >= 35 && age <= 39) {
    return 0.71;
  }
  else if (age >= 40 && age <= 44) {
    return 0.45;
  }
  else if (age >= 45 && age <= 49) {
    return 0.14; // should be 11, but had to up it to reach 1% / day
  }
  else if (age >= 50) {
    return 0.00;
  }
}

function takeXthRoot(number, root) {
  return Math.pow(number, 1 / root);
}

function calculateDailyFertility(annualFertility) {
  let noPregChance = 1 - annualFertility;
  let dailyFertility = 1 - (takeXthRoot(noPregChance, simDaysInAYear));

  return dailyFertility.toFixed(2);
}

function calculateMiscarrChance(age) {
  if (age <= 12) {
    return 0.00;
  }
  else if (age === 13) {
    return 0.15;
  }
  else if (age >= 14 && age <= 29) {
    return 0.10;
  }
  else if (age >= 30 && age <= 34) {
    return 0.20;
  }
  else if (age >= 35 && age <= 39) {
    return 0.25;
  }
  else if (age >= 40 && age <= 44) {
    return 0.33;
  }
  else if (age >= 45 && age <= 49) {
    return 0.50;
  }
  else if (age >= 50) {
    return 0.00;
  }
}

function calculateMaternalDeathChance(age) {
  if (age <= 12) {
    return 0.00;
  }
  else if (age >= 13 && age <= 14) {
    return 0.015;
  }
  else if (age >= 15 && age <= 24) {
    return 0.010;
  }
  else if (age >= 25 && age <= 34) {
    return 0.015;
  }
  else if (age >= 35 && age <= 44) {
    return 0.020;
  }
  else if (age >= 45 && age <= 49) {
    return 0.025;
  }
  else if (age >= 50) {
    return 0.00;
  }
}

function calculateGrilledCheeseAspChance(age) {
  if (age <= 12) {
    return 0.00;
  }
  else if (age >= 13 && age <= 34) {
    return 0.01;
  }
  else if (age >= 35 && age <= 39) {
    return 0.02;
  }
  else if (age >= 40 && age <= 44) {
    return 0.3;
  }
  else if (age >= 45 && age <= 49) {
    return 0.10;
  }
  else if (age >= 50) {
    return 0.0;
  }
}

// example: 50% of chance of baby over 1 year. What is the chance each simday?

function calculateDailyChanceFromYearlyChance(yearlyChance) {
  let dailyChance = 1 - (takeXthRoot(1 - yearlyChance, simDaysInAYear));

  return dailyChance.toFixed(2);
}

function calculateDailyChanceFromSeasonalChance(seasonalChance) {
  let dailyChance = 1 - (takeXthRoot(1 - seasonalChance, simDaysInASeason));

  return dailyChance.toFixed(2)
}

function calculateSeasonalChanceFromYearlyChance(yearlyChance) {
  let seasonalChance = 1 - (takeXthRoot(1 - yearlyChance, simDaysInAYear));

  return seasonalChance.toFixed(2);
}

function calculateSeasonalChanceFromDailyChance(dailyChance) {

}

function calculateYearlyChanceFromSeasonalChance(seasonalChance) {

}

function calculateYearlyChanceFromDailyChance(dailyChance) {

}

// calculate bride value
function calculateBrideValue(sim) {
  let total = 0;
  total += sim.skills.
}
