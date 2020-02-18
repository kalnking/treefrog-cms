function initButtons() {
  $("#home").click(function(e) {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");
    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());
    $(".get-started").off("click");
    addGetStartedListener();
  });
  $(".closeModal").click(function() {
    closeModal();
  });
}

function addCreateMNListener() {
  $("#createMainNav").click(function(e) {
    $(".modal").css("display", "flex");
    $(".alert-box").html(TREEFROG_SERVICE.getGetStartedContent());
  });
}

function closeModal() {
  $(".modal").css("display", "none");
}

function addGetStartedListener() {
  $(".get-started").click(function(e) {
    console.log("hello");
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    // $("#home div").off("click");

    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateMainNavContent());

    addCreateMNListener();
  });

  $(document).ready(function() {
    initButtons();
    addGetStartedListener();
  });
}
