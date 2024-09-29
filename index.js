const input = document.querySelector('.input-task')
const inputSearch = document.querySelector('.input-search')
const btnAdd = document.querySelector('.btn-add')
const btnSearch = document.querySelector('.btn-search')
const listTasks = document.querySelector('.container-result')

btnAdd.addEventListener('click', addTasks)
btnSearch.addEventListener('click', searchTask)

function addTasks() {
    let title = input.value

    if (title !== '') {
        const listItems = `<li class="result__list-item" data-id="${new Date().getTime()}>
        <h2 class="title">${title}</h2>
        <button class="btn btn-delete">Delete</button>
        <div class="line"></div>                     
    </li>`

        listTasks.insertAdjacentHTML('afterbegin', listItems)
        clearInput()
    } else {
        return
    }

    const btnDelete = document.querySelector('.btn-delete')

    btnDelete.addEventListener('click', function () {

        console.log(this.parentNode.dataset.id);
        const id = this.parentNode.dataset.id
        deleteTask(id)

    })
}

function clearInput() {
    input.value = '' 
    inputSearch.value = '' 
}

function deleteTask(id) {
    const li = document.querySelectorAll('li')
    li.forEach(el => el.dataset.id === id && el.remove())
}

function searchTask() {

    let title = input.value
    let title2 = inputSearch.value
    
    const li = document.querySelectorAll('li')

    // li.forEach(el => el.title === title2 && el.classList.add('show'));
    li.forEach(el => el.title !== title2 && el.classList.add('hide'))

    console.log(li.forEach(el => el.title !== title2 && el.classList.add('hide')));

    clearInput()
}