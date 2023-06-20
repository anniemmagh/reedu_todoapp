document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add-task button");
    const taskInput = document.querySelector(".add-task input");
    const taskSection = document.querySelector(".task-section");
  
    addButton.addEventListener("click", function() {
      const taskName = taskInput.value.trim();
      if (taskName !== "") {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
  
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = taskName;
  
        const taskIcons = document.createElement("div");
        taskIcons.classList.add("task-icons");
  
        const doneIcon = document.createElement("i");
        doneIcon.classList.add("fas", "fa-check");
        doneIcon.addEventListener("click", function() {
          taskItem.classList.toggle("completed");
        });
  
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteIcon.addEventListener("click", function() {
          taskSection.removeChild(taskItem);
        });
  
        taskIcons.appendChild(doneIcon);
        taskIcons.appendChild(deleteIcon);
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskIcons);
        taskSection.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  
    taskSection.addEventListener("click", function(event) {
      if (event.target.classList.contains("fa-trash")) {
        const taskItem = event.target.closest(".task-item");
        taskSection.removeChild(taskItem);
      }
    });
  });
  