$(document).ready(function() {
  var tags = ["h1", "p" , "img"];
  
  tags.forEach(function(tag) {
    $(tag).click(function() {
      if (tag === "h1") {
        alert("This is a header");
      } else if (tag === "p") {
        alert("This is a paragraph!");
      } else if (tag === "img") {
        alert("This is an image!!!");
      } else {
        alert("This is a different tag!");
      }
    });
  });



  /* $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  }); */
});