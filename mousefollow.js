// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//     scroll(event)
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 100, fill: "forwards" });
// }

var location_x = 0;
var location_y = 0;
var finalScroll = 0;
document.ready(function (event) {
   document.mousemove(
      (e) => {
         location_x = e.pageX;
         location_y = e.pageY;
         $("#location").text("X coordinate is - " + location_x + ", Y coordinate is - " + location_y);
      }
   );
      '#main'.scroll(function (event) {
         if (finalScroll != $('#main')
         .scrollTop()) {
            location_y -= finalScroll;
            finalScroll = $('#main')
            .scrollTop();
            location_y += finalScroll;
            $("#scroll").text("Scrolled coordinate is - " + location_x + ", Y coordinate is - " + location_y);
         }
      });
});