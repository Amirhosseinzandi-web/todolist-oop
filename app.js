const input = document.querySelector("#inp");
const btn = document.querySelector("button");
const list = document.querySelector("#list");



class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        const todosItem = {
            text: input.value,
            id: Date.now()
        }
        this.todos.push(todosItem);
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((item) => item.id !== id);
        this.render();
    }

    render() {
        list.innerHTML = "";
        this.todos.forEach((el) => {
            const _li = document.createElement("li");
            const _span = document.createElement("span");
            const _removeBtn = document.createElement("button");
            _span.textContent = el.text;
            _removeBtn.textContent = "*";
            _li.append(_span, _removeBtn);
            _removeBtn.addEventListener("click", () => {
                this.deleteTodo(el.id);
            })
            list.appendChild(_li);
        })
    }

}


const myTodoList = new TodoList();
btn.addEventListener("click", () => {
    myTodoList.addTodo();
})