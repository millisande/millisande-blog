var wrap = $("#wrap");
var windowHeight = $(window).height();

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var diff = scroll - windowHeight / 10;
  var endOfHeader = windowHeight / 2 - 74;
  console.log(scroll, endOfHeader);
  if (diff > 0 && scroll < endOfHeader) {
    wrap.css({ top: windowHeight / 10 + diff });
  } else if (diff > 0) {
    wrap.css({ top: endOfHeader });
  } else {
    wrap.css({ top: windowHeight / 10 });
  }
});
