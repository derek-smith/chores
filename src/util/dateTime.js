export const START_DAY = 6; // Saturday
export const END_DAY = 5; // Friday

export const getCurrentWeek = () => {
  const today = new Date();
  console.log('today:', today);
  const start = new Date(today.getTime());
  const end = new Date(today.getTime());
  
  while (start.getDay() !== START_DAY) {
    start.setDate(start.getDate() - 1);
  }
  while (end.getDay() !== END_DAY) {
    end.setDate(end.getDate() + 1);
  }

  const currentWeek = {start, end, today};
  console.log('currentWeek:', currentWeek);
  return currentWeek;
};