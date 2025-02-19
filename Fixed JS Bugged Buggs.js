let todoItems = []; // Array to store to-do items

// Function to add a new item to the list
function addItem() {
    let newItem = document.getElementById("todoInput").value;
    if (newItem !== "") {
        todoItems.push(newItem);
        document.getElementById("todoInput").value = ""; // Clear input field
        updateList();
    } else {
        alert("Please enter a to-do item.");
    }
}

// Function to update the displayed list
function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = ""; // Clear current list
    for (let i = 0; i < todoItems.length; i++) { // Corrected: Should be < todoItems.length
        let listItem = document.createElement("li");
        listItem.textContent = todoItems[i];
        listItem.addEventListener("click", removeItem.bind(null, i)); // Corrected: Remove item properly
        list.appendChild(listItem);
    }
}

// Function to remove an item from the list
function removeItem(index) {
    todoItems.splice(index, 1); // Corrected: Directly using index
    updateList();
}

// Event listener for adding a new item
document.getElementById("addButton").addEventListener("click", addItem); // Ensure addButton exists
