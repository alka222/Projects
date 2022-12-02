const posts = [
    { title : 'Post One' , body : 'This is Post One', createdAt : new Date().getTime()},
    { title : 'Post Two' , body : 'This is Post Two', createdAt : new Date().getTime() }
];

let intervalId = 0;

function getPosts(){

    clearInterval(intervalId);

    let output = '';
    intervalId = setTimeout(() => {

        posts.forEach((post) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        });

        document.body.innerHTML = output;
    }, 1000)

}

getPosts();

function createPost(post){

    return new Promise((resolve, reject) => {
    setTimeout(() => {

        posts.push({...post, createdAt:new Date().getTime()});
        
        const error = false;

        if(!error){
            resolve(`${posts[posts.length-1].title}`);
        }

        else{
            reject('Error: Something went wrong');
        }
    }, 2000);
});
    
}


    const user={
        username:'John',
        lastActivityTime: '30th of november'
    }


function userLastActivityTime(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
    
        },1000);
    });
}

function deletePost(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(posts.length>0){

                resolve(posts.pop());

            }else{
                reject('Error: array is empty');
            }
        },1000);
    });
}

// function create4thPost(newPost, callback){

//     setTimeout(() => {

//         posts.push({...newPost,createdAt:new Date().getTime()});
//         callback();
//     }, 3000);
// }

createPost({title : 'Post Three', body : 'This is Post Three'})
// .then(getPosts)
// .catch(err => console.log('array is empty now'))
// .catch(err => console.log('Something went wrong'))
// .then(deletePost);

// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'))
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

// const post4 = {title : 'Post Four', body : 'This is Post Four'};
// Promise.all([createPost(post4),userLastActivityTime()]).then((values)=>{console.log(values)})

createPost({title : 'Post Four', body : 'This is Post Four'})
.then(() => {
        
    getPosts();
    deletePost().then(() => {
        getPosts();

        deletePost().then(() => {
            getPosts();

            deletePost().then(() => {
                getPosts();
    
                deletePost().then(() => {  })
                getPosts();

                    deletePost().then(() => {  })
                    .catch((err) => {
                        console.log("Invalid :", err);
                    })
                    
                })

            })

        })

    })
.catch(err => console.log('Something went wrong'))


var timer;
var count;

function lastEditedInSecondsAgo(){
    count = 0;

    clearInterval(timer);
    
    timer = setInterval(() => {
        count++;
        console.log(count);
    }, 3000)
}
