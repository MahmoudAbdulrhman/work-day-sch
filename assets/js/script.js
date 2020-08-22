var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

//Today Date
var todayDate = document.querySelector("#currentDay");
var currentDate =moment();
todayDate.textContent = currentDate.format("dddd , MMMM Do");

//create task
$("#task").on("click","p",function() {
    var text =$(this)
    .text()
    .trim();
    var addText = $("<textarea>")
    .addClass("task-control")
    .val(text)
    $(this).replaceWith(addText);
 
    console.log(text);
});
// save task
$(".fa-save").on("click","textarea", function(){
    var text = $(this)
    .val()
    .trim();

    var status = $(this)
    .closest(".textarea")
    .attr("id")
    .replace("list-","");


    task[status].text = text;
    
    var taskP = $("<p>")
    .addClass("task-control")
    .text(text);
  
    $(this).replaceWith(taskP);
console.log(this)
})