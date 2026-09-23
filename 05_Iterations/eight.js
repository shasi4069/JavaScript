const myNums=[1,2,3,4,5]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval : ${currval}`);
//     let sum = 0
//     sum=acc+currval
//     console.log(`sum:${sum}`);
//     return sum
    
// },0)
// const myTotal=myNums.reduce( (acc , curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemNAme:"js course",
        price:299
    },
     {
        itemNAme:"py course",
        price:2999
    },
     {
        itemNAme:"data science course",
        price:599
    },
]

const priceToPay= shoppingCart.reduce( (acc,item)=>acc + item.price,0)
console.log(priceToPay);


