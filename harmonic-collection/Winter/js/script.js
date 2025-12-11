// CLICK RIPPLE EFFECT
$(document).on("click", function(e) {
  let ripple = $("<div class='ripple'></div>");
  $("body").append(ripple);

  ripple.css({
    left: e.pageX,
    top: e.pageY
  });

  setTimeout(() => {
    ripple.remove();
  }, 700);
});

// HEADER HOVER EFFECT
$("h1").hover(
  function() {
    $(this).css("color", "white");
  },
  function() {
    $(this).css("color", "var(--accent-color)");
  }
);
