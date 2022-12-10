const myForm = document.getElementById('my-form');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');

const btn = document.getElementById('btn');


window.addEventListener('DOMContentLoaded', () => {

    axios.get('https://crudcrud.com/api/95117bf6ef7e46998ebb434928e5394a/expenseData')
    .then((response) => {
        console.log(response);

        for(let i=0; i< response.data.length; i++){
            showExpenses(response.data[i]);
        }
    })
    .catch((err) => console.log(err));
})


myForm.addEventListener('submit', addForm)

function addForm(e){
    e.preventDefault();

    let myExpenses = {
        amount : amountInput.value,
        description : descriptionInput.value,
        category : categoryInput.value
    }

    console.log(myExpenses);
    let serilized_Obj = JSON.stringify(myExpenses);

    axios.post('https://crudcrud.com/api/95117bf6ef7e46998ebb434928e5394a/expenseData',myExpenses)
    .then((response) => {
        console.log(response)
        showExpenses(response.data);
    })
    .catch((err) => console.log(err))

    amountInput.value ='';
    descriptionInput.value= '';
    categoryInput.value= '';

}

function showExpenses(user){

    console.log(user);

    const parentEle = document.getElementById('expenses');
    const childEle = `<li id='${user._id}'> ${user.amount} : ${user.description} : ${user.category}
                        <button onclick = updateExpense('${user.amount}','${user.description}','${user.category}','${user._id}')>Edit</button>
                        <button onclick = deleteExpense('${user._id}')> Delete </button>
                        </li>`

    parentEle.innerHTML = parentEle.innerHTML + childEle;

}

function deleteExpense(userId){
    axios.delete(`https://crudcrud.com/api/95117bf6ef7e46998ebb434928e5394a/expenseData/${userId}`)
    .then(() => {
        removeExpenseFromScreen(userId);
    })
    .catch((err) => console.log(err));
}


function removeExpenseFromScreen(userId){

    let parentNode = document.getElementById('expenses');
    let childNodeToBeDeleted = document.getElementById(userId);

    console.log(childNodeToBeDeleted);
    if(childNodeToBeDeleted){

        parentNode.removeChild(childNodeToBeDeleted);
     }
}


function updateExpense(amount, description, category, userId){

    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;

    deleteExpense(userId);
}