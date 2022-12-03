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

let[popcorn,butter,coke]= await Promise.all([getPopcorn,addButter,getColdDrink]);

   console.log(`${popcorn},${butter},${coke}`)
   return ticket;
}

preMovie().then((m)=>{
    console.log(`person3:shows ${m}`);
})

console.log('person4:shows ticket');
console.log('person5:shows ticket');