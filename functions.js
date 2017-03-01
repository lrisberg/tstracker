// CONSTANTS

const simDaysInAYear = 28;

const lifespans = {
  baby: 1,      // 0
  toddler: 3,   // 1 - 3
  child: 8,     // 4 - 11
  teen: 8,      // 12 - 19
  adult: 50,    // 20 - 69
  elder: '70+'  // 70+
}


function calculateDaysOld(ageState, daysUntilBirthday) {
  if (ageState === 'baby') {
    return (lifespans.baby * simDaysInAYear) - daysUntilBirthday;
  }
  else if (ageState === 'toddler') {
    let lifeStateTotalDays = (lifespans.baby + lifespans.toddler) * simDaysInAYear;
    return lifeStateTotalDays - daysUntilBirthday;
  }
  else if (ageState === 'child') {
    let lifeStateTotalDays = (lifespans.baby + lifespans.toddler + lifespans.child) * simDaysInAYear;
    return lifeStateTotalDays - daysUntilBirthday;
  }
  else if (ageState === 'teen') {
    let lifeStateTotalDays = (lifespans.baby + lifespans.toddler + lifespans.child + lifespans.teen) * simDaysInAYear;
    return lifeStateTotalDays - daysUntilBirthday;
  }
  else if (ageState === 'adult') {
    let lifeStateTotalDays = (lifespans.baby + lifespans.toddler + lifespans.child + lifespans.teen + lifespans.adult) * simDaysInAYear;
    return lifeStateTotalDays - daysUntilBirthday;
  }
  else if (ageState === 'elder') {
    return 'You already know this!'
  }
}

function calculateAge(daysOld) {
  return parseInt(daysOld / simDaysInAYear);
}

console.log(calculateDaysOld('toddler', 28));

// http://www.countdowntopregnancy.com/tools/age_fertility_calculator.php
// returns [pregchance, miscarrchance, trisomy21chance]
function calculateAnnualFertility(age) {
  if (age <= 12) {
    return 0;
  }
  else if (age === 13) {
    return 20;
  }
  else if (age === 14) {
    return 30;
  }
  else if (age === 15) {
    return 45;
  }
  else if (age === 16) {
    return 65;
  }
  else if (age === 17) {
    return 80;
  }
  else if (age === 18) {
    return 90;
  }
  else if (age === 19) {
    return 96;
  }
  else if (age >= 20 && age <= 24) {
    return 96;
  }
  else if (age >= 25 && age <= 29) {
    return 93;
  }
  else if (age >= 30 && age <= 34) {
    return 85;
  }
  else if (age >= 35 && age <= 39) {
    return 71;
  }
  else if (age >= 40 && age <= 44) {
    return 45;
  }
  else if (age >= 45 && age <= 49) {
    return 14; // should be 11, but had to up it to reach 1% / day
  }
  else if (age >= 50) {
    return 0;
  }
}

function takeXthRoot(number, root) {
  return Math.pow(number, 1 / root);
}

function calculateDailyFertility(annualFertility) {
  let pregChance = annualFertility / 100;
  let noPregChance = 1 - pregChance;
  let dailyFertility = 1 - (takeXthRoot(noPregChance, simDaysInAYear));

  return dailyFertility.toFixed(2);
}

console.log(calculateDailyFertility(calculateAnnualFertility(45), 28));

function calculateMiscarrChance(age) {
  if (age <= 12) {
    return 0;
  }
  else if (age === 13) {
    return 15;
  }
  else if (age >= 14 && age <= 29) {
    return 10;
  }
  else if (age >= 30 && age <= 34) {
    return 20;
  }
  else if (age >= 35 && age <= 39) {
    return 25;
  }
  else if (age >= 40 && age <= 44) {
    return 33;
  }
  else if (age >= 45 && age <= 49) {
    return 50;
  }
  else if (age >= 50) {
    return 0;
  }
}

function calculateGrilledCheeseAspChance(age) {
  if (age <= 12) {
    return 0;
  }
  else if (age >= 13 && age <= 34) {
    return 1;
  }
  else if (age >= 35 && age <= 39) {
    return 2;
  }
  else if (age >= 40 && age <= 44) {
    return 3;
  }
  else if (age >= 45 && age <= 49) {
    return 10;
  }
  else if (age >= 50) {
    return 0;
  }
}
