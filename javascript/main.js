$(window).on("load", function () {
  if (/Edge\/\d./i.test(navigator.userAgent)) {
    jQuery("html").addClass("ie");
  };

  objectFitImages();
});