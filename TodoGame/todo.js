let todo = [];

let req = prompt("Please enter the req");
// console.log(req);

while (true) {
  if (req == "quit") {
    console.log("Quieting the app");
    break;
  }

  if (req == "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("task added successfully");
  } else if (req == "delete") {
    let idx = prompt("Please enter the task you want to delete");
    todo.splice(idx, 1);
    console.log("task deleted successfully");
  } else {
    prompt("Wrong task entered");
  }
  req = prompt("Please enter the req");
}
