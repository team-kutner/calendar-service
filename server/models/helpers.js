const moment = require('moment');


var enumerateDaysBetweenDates = (dates) => {
  var unavailable = [];
  for (let i = 0; i < dates.length; i++) {
    var currDate = moment(dates[i].checkin).startOf('day');
    var lastDate = moment(dates[i].checkout).startOf('day');
    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      unavailable.push(currDate.clone().toDate());
    }
  }
  const unique = new Set;
  for (let i = 0; i < unavailable.length; i++) {
    let newDate = unavailable[i].toISOString().substring(0, 10);
    unique.add(newDate);
  }
  return Array.from(unique).sort();
};

module.exports = {
  enumerateDaysBetweenDates
}