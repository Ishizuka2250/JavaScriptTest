console.log("問題1");
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter((value, index) => {return array.indexOf(value) == index});
console.log(result);

console.log("問題2");
leapYear = function(year) {
  if(year % 4 == 0) {
    if(year % 400 == 0) {
      return true;
    }else if(year % 100 == 0) {
      return false;
    }else {
      return true;
    }
  }else{
    return false;
  }
};
year1 = 2020;
year2 = 2021;
console.log(`leapYear -- ${year1}:${leapYear(year1)}`);
console.log(`leapYear -- ${year2}:${leapYear(year2)}`);

