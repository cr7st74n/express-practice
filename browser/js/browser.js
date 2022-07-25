
function getTodos(){
    fetch("/api/todos")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

}

getTodos();