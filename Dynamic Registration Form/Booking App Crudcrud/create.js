const myForm = document.querySelector('#my-form');

const msg = document.querySelector('.msg');


const submitButton = document.getElementById("submit");

// window.addEventListener("DOMContentLoaded", () => {

//     const localStorageObj = localStorage;
//     const localStorageKeys = Object.keys(localStorage);

//     for(var i=0; i<localStorageKeys.length; i++){

//         const key = localStorageKeys[i];
//         const userDetailsString =  localStorageObj[key];
//         const userDetailsObj = JSON.parse(userDetailsString);
//         showUserOnScreen(userDetailsObj);

//     }

// });



    myForm.addEventListener('submit', onSubmit);



    function onSubmit(e){

        e.preventDefault();

        const nameInput= document.querySelector('#name');
        const emailInput = document.querySelector('#email');


        if(nameInput.value === '' || emailInput.value === ''){

            // alert('Please enter all fields');

            msg.classList.add('error');
            msg.innerHTML = 'Please enter all fields';
            setTimeout(() => msg.remove(), 3000);

        }

        else {

            let myObj = {
                name : nameInput.value,
                email : emailInput.value
            }

            axios.post("https://crudcrud.com/api/13ae3d759bc5477c905693dfee284c22/appointmentData", myObj)
            .then((response) => {

                showUserOnScreen(response.data);
                console.log(response);
            })
            .catch(err => {

                document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
                console.log(err)
            })


            // localStorage.setItem(myObj.email, JSON.stringify(myObj));
            // // const obj = JSON.parse(localStorage.getItem('myObj'));

            // showUserOnScreen(myObj);

            nameInput.value ='';
            emailInput.value= '';

        }

    }


    function showUserOnScreen(user){

            // if(localStorage.getItem(user.email) !== null){

            //     removeUserFromScreen(user.email);
            // }

            const parentNode = document.querySelector('#users');

            const childNode = `<li id='${user.email}'> ${user.name} ${user.email}
                                <button onclick = updateUser('${user.name}','${user.email}')>Edit</button>
                                
                                <button onclick = deleteUser('${user.email}')>Delete</button>
                                </li>`

            parentNode.innerHTML = parentNode.innerHTML +  childNode;

    }

    // function updateUser(name, email){
    //     // console.log(email);

    //    document.getElementById('name').value = name;
    //    document.getElementById('email').value = email;
       
    //    deleteUser(email);
    // }


    // function deleteUser(email){
    //     // console.log(email);
    //     localStorage.removeItem(email);

    //     removeUserFromScreen(email);
    // }

    // function removeUserFromScreen(email){

    //      const parentNode = document.getElementById('users');
    //      const childNodeToBeDeleted = document.getElementById(email);

    //      if(childNodeToBeDeleted){

    //         parentNode.removeChild(childNodeToBeDeleted);
    //      }
    // }