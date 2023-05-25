//12. extra practice
const getActualSleepHours = () => 5 + 5 + 5 + 5 + 5 + 5 + 5;
getActualSleepHours();
console.log(getActualSleepHours());

const getIdealSleepHours = idealHours => idealHours * 7;
console.log(getIdealSleepHours);

//getIdealSleepHours();

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(5);
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`Sleep ${idealSleepHours - actualSleepHours} hours more per week.`);
  } else {
    console.log(`Sleep ${actualSleepHours - idealSleepHours} hours less per week.`)
  }
};

calculateSleepDebt()