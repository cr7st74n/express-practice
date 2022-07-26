const btnS = document.querySelector("#submit");
function getTodos(){
    fetch("/api/todos")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

}

function addTodo(event){
    const input = document.querySelector('input[name="something"]');
    const value =input.value;
    const data = {
        noodles: value
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
    .then(res =>{
        console.log(res)
    })
}

getTodos();
btnS.addEventListener("click",addTodo);
