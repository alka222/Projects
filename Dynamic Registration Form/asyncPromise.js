const posts=[

    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]

function getposts(){

    setTimeout(()=>{
        let output=''
        for(var i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}</li>`
        }
        document.body.innerHTML=output
    },1000)
}


function createpost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },1000)
    })
 }


async function init(){

    await createpost({title:'post three',body:'this is post three'})
    getposts();
    await deletepost()
    getposts();

 }

 init()
 
 function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve()
            }else{
                reject('array is empty')
            }
        },2000)
    })
}