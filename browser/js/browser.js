const btnS = document.querySelector("#submit");
const todos_div = document.querySelector(".todos");

function outputToDos(data){

    todos_div.innerHTML = "";
    data.forEach((obj) => {
        const html=`
        <div class="todo">
            <h3>${obj.text}</h3>
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
        outputToDos(data);
    });
}


function addTodo(event){
    const input = document.querySelector('input[name="something"]');
    const value =input.value;
    const data = {
        text: value
    };

    event.preventDefault();

    fetch('/api/todos', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(todos =>{
        getTodos();
        console.log(todos);
    })
}
function deleteDoto(event){
    const el = event.target

    console.log(el.tagName);

    if(el.tagName === "BUTTON"){
        const id = el.dataset.id;
        const data = {
            id: parseInt(id),
            
        }

        fetch("/api/todos",{
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(todos => outputToDos(todos));
    }

}

getTodos();
btnS.addEventListener("click",addTodo);
todos_div.addEventListener("click",deleteDoto);