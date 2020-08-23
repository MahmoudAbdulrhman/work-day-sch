var tasks = {};



//Today Date
var todayDate = document.querySelector("#currentDay");
var currentDate =moment();
todayDate.textContent = currentDate.format("dddd , MMMM Do");

//create task

$(".list-group").on("click","p", function(){
  var text = $(this)
  .text()
  .trim();
  var textInput = $("<textarea>")
  .addClass("textarea")
  .val(text);
  $(this).replaceWith(textInput); 
  textInput.trigger("focus");
  console.log(this);
});

//save task

$(".saveBtn").click(".textarea",function(){
  var taskText = $(".textarea")
  .val()
  .trim();

 //get the parent ul`s id attribute
 var status = $("textarea")
 .closest(".list-group")
 .attr("id")
 .replace("list-","");

 //get the task`s position in the list of other li elements
 var index = $(".textarea")
 .closest(".list-group-item")
 .index();
 



  var taskP =$("<p>")
  .text(taskText);

  $(".textarea").replaceWith(taskP);;
});
  



