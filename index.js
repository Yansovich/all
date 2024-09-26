const input = document.querySelector('.input-task')
const btnAdd = document.querySelector('.btn_add')
const listTasks = document.querySelector('.container-result')
const btnDelete = document.querySelector('.btn__delete')

btnAdd.addEventListener('click', addTasks)
btnDelete.addEventListener('click', function() {
 console.log(100000000000)
})
 
function addTasks () {
    let title = input.value

    const listItems = `<li class="result__list-item">
                <h2 class="title">${title}</h2>
                <button class="btn btn_delete">Delete</button>               
            </li>`

        listTasks.insertAdjacentHTML('afterbegin', listItems)
}

// function deleteTask (e) {
//     if (e.target.classList.contains('.btn_delete')) {
//         listItems.remove()
//     }
// }