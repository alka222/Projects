const posts = [
    { title : 'Post One' , body : 'This is Post One' },
    { title : 'Post Two' , body : 'This is Post Two' }
];

function getPosts(){

    let output = '';

    setTimeout(() => {

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000)

}

getPosts();

function createPost(post, callback){
    setTimeout(() => {

        posts.push(post);
        callback();
    }, 2000)
}

createPost({title : 'Post Three', body : 'This is Post Three'}, getPosts);

function create4thPost(newPost, callback1, callback2){

    setTimeout(() => {

        posts.push(newPost);
        callback1(newPost, callback2);
    }, 3000);
}

function createNewPost(newPost, callback1, callback2){

    setTimeout(() => {

        posts.push(newPost);
        callback1(newPost, callback2);
    }, 3000);
}

create4thPost({ title : 'Post Four', body : 'This Post Four'} , createPost, getPosts);
createNewPost({ title : 'Post Five', body : 'This Post Five'} , createPost, getPosts);