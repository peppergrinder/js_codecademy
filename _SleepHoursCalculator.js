const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday'){
      return 7;
    } else if (day === 'wedensday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 4;
    } else if (day === 'saturday') {
      return 3;
    } else if (day === 'sunday') {
      return 11;
    } else {
      console.log(`Please check your spelling.`)
    }
  } 
  //console.log(getSleepHours('sunday'));
   const getActualSleepHours = () => {
     const sleepSum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wedensday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
      console.log(sleepSum);
      return sleepSum;
   };
   
   getActualSleepHours();
  
   const getIdealSleepHours = () => {
     const idealHours = 7;
     console.log(idealHours *7);
     return idealHours * 7;
   };
   
   getIdealSleepHours();
  
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
     if (actualSleepHours === idealSleepHours) {
       console.log('Perfect amount of sleep.')
     } else if (actualSleepHours < idealSleepHours) {
       console.log(`Sleep ${idealSleepHours - actualSleepHours} hours more per week.`);
     } else {
       console.log(`Sleep ${actualSleepHours - idealSleepHours} hours less per week.`)
     }
   };
  
   calculateSleepDebt()