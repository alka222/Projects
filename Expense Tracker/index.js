const myForm = document.getElementById('my-form');

const btn = document.getElementById('btn');

const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');

window.addEventListener("DOMContentLoaded", () => {

    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorage);

    for(var i=0; i<localStorageKeys.length; i++){

        const key = localStorageKeys[i];
        const expenseDetailsString =  localStorageObj[key];
        const expenseDetailsObj = JSON.parse(expenseDetailsString);
        showExpenseOnScreen(expenseDetailsObj);

    }

});



myForm.addEventListener('submit', addForm);

function addForm(e) {

    e.preventDefault();

    let myObj = {

            amount : amountInput.value,
            description : descriptionInput.value,
            category : categoryInput.value
    }

    // console.log(amountInput);
    // console.log(descriptionInput);
    // console.log(categoryInput);

    localStorage.setItem(myObj.category, JSON.stringify(myObj));
    // let myobj_deserialized = JSON.parse(localStorage.getItem("myObj"))

    showExpenseOnScreen(myObj);

    amount ='';
    description ='';
    category ='';

}

    function showExpenseOnScreen(expense){

        if(localStorage.getItem(expense.category) !== null){

            removeExpenseFromScreen(expense.category);
        }

        const usersList = document.getElementById('users');

        const li = `<li id = '${expense.category}'> ${expense.amount} : ${expense.description} : ${expense.category}
                    <button onclick = updateExpense('${expense.amount}','${expense.description}','${expense.category}')>Edit</button>
                        <button onclick= deleteExpense('${expense.category}')> Delete </button>
                    </li>`;


        usersList.innerHTML = usersList.innerHTML + li;
    }


    function updateExpense(amount, description, category){

        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('category').value = category;
    }

    function deleteExpense(category){

        localStorage.removeItem(category);
        removeExpenseFromScreen(category);
    }

    function removeExpenseFromScreen(category){

        const usersList = document.getElementById('users');
        const childNodeToBeDeleted = document.getElementById(category);

        if(childNodeToBeDeleted){
            usersList.removeChild(childNodeToBeDeleted);
        }
    }

