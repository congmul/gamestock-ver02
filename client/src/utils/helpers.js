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
  let today = (new Date().getDate()).toString();
  
  return (new Date(thisYear, thisMonth, today, 13, 7, 0));
}