$(document).ready(function() {

  $(document).on("click", "#devourIt", updateBurger);

   function updateBurger(burger) {
      var burgerId = $(this).attr("data-burgerId");
      var devoured = $(this).attr("data-devoured");
      
      var burgerObject = {
        BurgerId: burgerId,
        Devoured: devoured
      };
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: burgerObject
    })
    .done(function() {
      console.log("index.js burger updated");
    });
  };

  