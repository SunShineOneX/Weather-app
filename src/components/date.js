// var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');;
// console.log(utc);

// let fullDate = new Date()
// let prettyDate = (num) => {
//     num.toString().slice(0,10)
//     return num;
// }
// let fullDate = new Date()
// let prettyDate = fullDate.toString().slice(0,10);
// console.log(prettyDate);
// console.log(fullDate);
// console.log(prettyDate(fullDate));

// let minToday = today.slice(0,10);
// console.log(minToday);

// let date = new Date().toString().slice(0,10);

// console.log(prettyDate);

// let curr = new Date 
// let week = []

// for (let i = 1; i <= 7; i++) {
//   let first = curr.getDate() - curr.getDay() + i 
//   let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
//   week.push(day)
// }

// console.log(fullDate);

// console.log(prettyDate);

// console.log(Math.floor(((298.38-273.15)*1.8)+32));

getCurrentDay = (num) => {
    let unix_timestamp = num;
    // console.log(unix_timestamp);
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // console.log(date);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
      return date.toString().slice(0,10);
  };

  console.log(getCurrentDay(1595786400)) 

  getCurrentDay = (num) => {
    let unix_timestamp = num;
    var date = new Date(unix_timestamp * 1000);
    return date.toString().slice(0,10);
  }