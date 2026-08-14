// const tinderuser=new Object()
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="shasi"
tinderuser.isLoggedIn=false

// console.log(tinderuser.id);
const regularuser={
    email:"shaso@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shasi",
            lastname:"shasi"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

const user=[
    {
        id:1,
        email:"s@tech.com"
    },
    {
        id:1,
        email:"s@tech.com"
    },
     {
        id:1,
        email:"s@tech.com"
    },
     {
        id:1,
        email:"s@tech.com"
    }
]

// user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLogged'));

//de- structure
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
const {courseInstructor:instructor}=course
console.log(Instructor);


// const navbar=(company)=>{

// }
// navbar(company="shasi")
