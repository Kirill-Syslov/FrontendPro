// Переделать ToDo-list с использованием Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list,
// яке по кліку на завдання буде показувати вікно з його текстом. Наприклад:

$(document).ready(function () {
  $("#add-task").click(function () {
    const taskText = $("#new-task").val();
    if (taskText !== "") {
      $("#task-list").append("<li>" + taskText + "</li>");
      $("#new-task").val("");
    }
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  $(document).on("click", "li", function () {
    const taskText = $(this).text();
    $("#modal-text").text(taskText);
    $("#modal").show();
  });

  $(".close").click(function () {
    $("#modal").hide();
  });

  $(window).click(function (event) {
    if ($(event.target).is("#modal")) {
      $("#modal").hide();
    }
  });
});
