
function pageScroll() {
    window.scrollBy(0, 10); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()', 900); // scrolls every 100 milliseconds
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      clearTimeout(scrolldelay);
      scrolldelay = setTimeout('PageUp()', 2000);
    }
  
  }