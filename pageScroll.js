/* 
    ID and Class should be
    NAV contains ID
    Coantainer contains Class
 */
$(document).scroll(() => {
      if ($(document).scrollTop() >= $('.div1').position().top) {
        activateOnScroll('div1')
      }
      if ($(document).scrollTop() >= $('.div2').position().top) {
        activateOnScroll('div2')
      }
      if ($(document).scrollTop() >= $('.div3').position().top) {
        activateOnScroll('div3')
      }
      if ($(document).scrollTop() >= $('.div4').position().top) {
        activateOnScroll('div4')
      }
      if ($(document).scrollTop() >= $('.div5').position().top) {
        activateOnScroll('div5')
      }
      if ($(document).scrollTop() >= $('.div6').position().top) {
        activateOnScroll('div6')
      }
});
// This function works when PAGE SCROLL
let activateOnScroll =(idName) =>{
    let cls = '.' + idName;
    let id = '#' + idName;
     // ADD AND REMOVE CLASS INSTED OF CHANGING CSS EVERYTIME
    $("div[id^='div']").css({ 'background': 'black', 'color': 'white' });
    $(id).css({ 'background': 'white', 'color': 'black' });
}
// This function works on click ONLY
let navClick = (idName) => {
    let cls = '.' + idName;
    let id = '#' + idName;
    $('html, body').animate({
        scrollTop: $(cls).offset().top
    }, 1000);
    // ADD AND REMOVE CLASS INSTED OF CHANGING CSS EVERYTIME
    $("div[id^='div']").css({ 'background': 'black', 'color': 'white' });
    $(id).css({ 'background': 'white', 'color': 'black' });
}

