console.log('01 -', 1=='1') // is 1 equals 1? true!
console.log('02 -', 1==='1') // is 1 100% equals '1'? false!
console.log('03 -', 1!='1') // is 1 different from 1? false

console.log('04 -', 3 < 2) // is 3 less than 2? false
console.log('05 -', 3 > 2) // is 3 more than 2? true
console.log('06 -', 3 <= 2) // is 3 less or equals 2? false
console.log('07 -', 3 >= 2) // is 3 more or equals 2? true
console.log('08 -', 3 >= 3) // is 3 more or equals 3? true

const d1 = new Date()
const d2 = new Date()
console.log('09 -', d1==d2) //is const d1 equals const d2? false
console.log('10 -', d1.getTime()==d2.getTime()) //is those function's props equals each other? true
