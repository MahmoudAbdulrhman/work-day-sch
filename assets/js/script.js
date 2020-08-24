var todayDate = document.querySelector("#currentDay");
var currentDate =moment();
todayDate.textContent = currentDate.format("dddd , MMMM Do");

var tasks = [];

// load information from localstorge
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if local storage is empty, create new array
  if (!tasks) {
      tasks = [];
  }

  // Loop through localStorage
  for (i = 0; i < tasks.length; i++) {
      
      var taskId = tasks[i].taskSpan;
      var taskEntry = $("#" + taskId);
      taskEntry.val(tasks[i].text);
  }
};

// save in to the localstorge
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// create task
$(".row").on("click", ".saveBtn", function() {
  // Grab the text from the task input
  newTask = $(this).prev();
  taskId = newTask.attr("id");
  
  tasks.push({
      text: newTask.val().trim(),
      taskSpan: taskId
  });

  saveTasks();
});

// Color Code Time Blocks 
var auditTask = function() {
  
  for (i = 1; i < 10; i++){
  
  var timeSpen = $("#row" + i).find("p").html();
  
  var timeColm = moment(timeSpen, "HHA");
  
  var wTime = timeColm.format("HH");
  var actTime = moment().format("HH");

  var timeDef= actTime - wTime;

  var changeColor = $("#row" + i).find("textarea");

  if (actTime === wTime) {
      changeColor.removeClass("past future");
      changeColor.addClass("present");
  } 
  else if (timeDef> 0) {
      changeColor.removeClass("future present");
      changeColor.addClass("past");
  } 
  else if (timeDef< 0){
      changeColor.removeClass("past present");
      changeColor.addClass("future");
  } 
}
};

$(".trash").on("click",function(){
  localStorage.clear();
  location.reload()
})

// Check task statuses every 5 minutes
setInterval(function() {
  auditTask();
}, 10);

loadTasks();
auditTask();