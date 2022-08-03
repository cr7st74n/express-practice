const btnS = document.querySelector("#submit");
const todos_div = document.querySelector(".todos");
const messege = document.querySelector(".messege-bar");
let  todo_data;

function outputToDos(){

    todos_div.innerHTML = "";

    if (!todo_data.length) {
        todos_div.innerHTML = '<p>No ToDos Added Yet.</p>';
      }

      todo_data.forEach((obj) => {
        const html=`
        <div class="todo">
            <h3>${obj.words}</h3>
            <button data-id="${obj.id}">Delete</button>
        </div>
        `;

        todos_div.insertAdjacentHTML("beforeend",html);
    });
}

function getTodos(){
    fetch("/api/todos")
    .then(res => res.json())
    .then(data => {
        todo_data = data;
        outputToDos();
    });
}


function addTodo(event){
    const input = document.querySelector('input[name="something"]');
    const value =input.value;
    const new_todo = {
        words: value
    };

    event.preventDefault();

    fetch('/api/todos', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_todo)
    }).then(server_res => server_res.json())
    .then(info =>{
        show_messege(info.messege);
        new_todo.id = info.id
        todo_data.push(new_todo);
        input.value = "";
        outputToDos();
    });
}

function show_messege(mess){
    messege.innerText =mess;
    messege.classList.add("show");

    setTimeout(()=>{
        messege.classList.remove("show");
    },3500)
}


function deleteDoto(event){
    const el = event.target

    console.log(el.tagName);

    if(el.tagName === "BUTTON"){
        const id = el.dataset.id;
        const data = {
            id: parseInt(id)
        };

        fetch('/api/todos',{
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((info) => {
            show_messege(info.messege);
            const todo = todo_data.find(t=> t.id==id);
            const index = todo_data.indexOf(todo);
            todo_data.splice(index,1);
            outputToDos();
        });
    }

}

getTodos();

btnS.addEventListener("click",addTodo);
todos_div.addEventListener("click",deleteDoto);



