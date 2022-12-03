//  console.log('person1:shoes ticket');
//  console.log('person2:shoes ticket');
   
// const promiseWifeBringingTicket=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })


//   let wifeHungry = promiseWifeBringingTicket.then((t)=>{
//     console.log('wife bring ticket');
//     console.log('husbund:shoud we go in');
//     console.log('wife:im hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
//   })


//   let wifeWantButter = wifeHungry.then((t)=>{
//     console.log('she want butter');
// return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })

// wifeWantButter.then((t)=>console.log(t))


// using async await

console.log('Person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);

    })

  const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
  const addButter = new Promise((resolve,reject)=>resolve(`Butter`));
  const getColdDrink = new Promise((resolve,reject)=>resolve(`ColdDrinks`));

let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');

let popcorn = await getPopcorn;
console.log(`husband:i got some ${popcorn}`);
console.log('husband:we should go in');
console.log('wife: i need butter on my popcorn');

let butter = await addButter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log(`husband:anything else darling`);
console.log(`wife:we are getting late`);
console.log(`husband:thank you for the reminder *grins*`);

let ColdDrinks = await getColdDrink;
console.log(`husband: you want ColdDrink darling`);
console.log(`husband:i got some ${ColdDrinks}`);
console.log(`wife:lets go we have enough`);
console.log(`husband:that's great we should go now*`);

    return ticket;
}

preMovie().then((m)=>{
    console.log(`person3:shows ${m}`);
})
console.log('person4:shows ticket');
console.log('person5:shows ticket');