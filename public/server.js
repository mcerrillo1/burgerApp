$(() => {
    $(".change-eaten").on("click", function () {
      const id = $(this).data("id");
      const newEaten = $(this).data("newsEaten");
  
      const newEatenValue = { value: newEaten };
  
      $.ajax(`/api/burgers/${id}/eaten`, {
        type: "PUT",
        data: JSON.stringify(newEatenValue),
        contentType: "application/json; charset=UTF-8",
      }).then(() => {t
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
  
      const newBurger = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function () {
      const id = $(this).data("id");
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE",
      }).then(() => {
        location.reload();
      });
    });
  });
  