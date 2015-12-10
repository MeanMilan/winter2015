moment = require('moment')

function countSundays() {
  var dateFrom = moment('1901-01-01');
  var dateEnd = moment('2000-12-31');
  var count = 0;
  while(dateFrom.diff(dateEnd, 'months') < 0) {
    dateFrom = dateFrom.add(1, 'months');
    if( dateFrom.day()===6 ) {
      count++;
    }
  }
  return count;
}

module.exports = countSundays()
