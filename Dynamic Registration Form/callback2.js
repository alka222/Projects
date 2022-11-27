const posts = [
    { title : 'Post One' , body : 'This is Post One', createdAt : new Date().getTime()},
    { title : 'Post Two' , body : 'This is Post Two', createdAt : new Date().getTime() }
];

let intervalId = 0;

function getPosts(){

    clearInterval(intervalId);

    let output = '';
    setTimeout(() => {

        posts.forEach((post) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} second ago</li>`;
        });

        document.body.innerHTML = output;
    }, 1000)

}

getPosts();

function createPost(post, callback){
    setTimeout(() => {

        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    }, 2000)
}


function create4thPost(newPost, callback){

    setTimeout(() => {

        posts.push({...newPost,createdAt:new Date().getTime()});
        callback();
    }, 3000);
}

createPost({title : 'Post Three', body : 'This is Post Three'}, getPosts);
create4thPost({ title : 'Post Four', body : 'This Post Four'}, getPosts);