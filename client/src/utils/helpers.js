// Create dot(.) every third numbers
// ex) if receiving 123123, then return 123.123
export function NumberComma( num ) {
    // console.log("In currencyComma")
    var str = num.toString().split('.');
    // console.log(str);
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    // console.log(str);
    if(!str[1]){
        str[1] = '00';
    }
    return str.join('.');
}

export function capitalizeFirstLetter(string) {
    let newStrArr = string.split(" ")
    if(newStrArr.length > 1){
        let newStr = '';
        newStrArr.forEach(str => newStr += str.charAt(0).toUpperCase() + str.slice(1) + " ");
        return newStr.trim();
    }else{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export function GetFakeDate() {
  // This is for Presentation (Manupulating DATE)
  //It is always This Year / This Month / Today (date) / 13:07:00
  // ex) 2021 / 9 / 4 / 13:07:00
  let thisYear = (new Date().getFullYear()).toString();
  let thisMonth = (new Date().getMonth()).toString();
  // Get Stockdata from previous day.
  let today = (new Date().getDate() - 1).toString();
  let hour = 13;
  let minute = 7;
  let second = 0;  
  
  // During Weekend, Display Stock data on last Friday.
  // SUN: 1 / MON: 2 / TUE: 3 / ..... / SAT: -1 
  let currentDay = (new Date().getDay() - 1).toString();
//   console.log(currentDay);
  if(currentDay === '-1'){
    today = parseInt(today) - 1;
    today = today.toString();
    hour = 18;
    minute = 0;
  }
  if(currentDay === '1'){
    today = parseInt(today) - 2;
    today = today.toString();
    hour = 18;
    minute = 0;
  }
//   console.log(today);
  return (new Date(thisYear, thisMonth, today, hour, minute, second));
}