class Todo {
  constructor(item) {
    this.item = item;
    this.completed = false;
    this.render();

  }

  render() {
    let toDoList = document.querySelector("#toDoList");
    let div = document.createElement("div");
    div.classList.add("todoEntry");
    div.textContent = this.item;
    toDoList.appendChild(div);

    //vv this is where brain stopped, should probably be in markComplete() vv
    div.addEventListener("click", function(e){
      if(this.classList.contains("completed")){
        this.classList.remove("completed");
      }else{
        this.classList.add("completed");
      }
    });
  }

  // markComplete() {
  //   let todoEntries = document.querySelectorAll(".todoEntry");
  //   todoEntries.forEach(function(entry) {
  // if (this.completed) {
  //     todoEntry.classlist.add("completed");
  //   }
  // }
}

export default Todo;
