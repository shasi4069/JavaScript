// const coding=["js","ruby","java","python","cpp"]
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter( (num) => num>5 )
// const newNums=myNums.filter( (num) => {
//     return num>5
// })

// const newNums=[]
// myNums.forEach( (num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books=[
{title:'book one', genre:'fiction',publish:1981, edition:2004},
{title:'book two', genre:'Non-fiction',publish:1982, edition:2008},
{title:'book three', genre:'history',publish:1983, edition:2007},
{title:'book four', genre:'science',publish:1984, edition:2010},
{title:'book five', genre:'fiction',publish:2000, edition:2014},
    
];
let userBooks=books.filter( (bk)=>bk.genre=='history')

 userBooks=books.filter( (bk)=>{ 
    return bk.publish>=1980 && bk.genre=="history"})
console.log(userBooks);

