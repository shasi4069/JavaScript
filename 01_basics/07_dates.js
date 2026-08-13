//Dates
// let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.getDate());
// console.log(mydate.toLocaleDateString());

// console.log(typeof mydate);

// let mycreatedDate=new Date(2026,0,13)
// console.log(mycreatedDate.toDateString());

// let mycreatedDate=new Date(2026,0,13 , 9,7)
// console.log(mycreatedDate.toLocaleString());
let mycreatedDate=new Date("01-14-2026")
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"long"}))




