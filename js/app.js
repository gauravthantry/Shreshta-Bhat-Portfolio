var aboutContent = "<h2 class=\"ui header\">About Me</h2><p>Ex laboris ad est incididunt. Ex labore sint nisi sunt quis do aute dolor laboris quis commodo dolore est. Proident tempor tempor ea minim minim elit ea officia. Duis veniam eiusmod est aliquip consectetur aliquip cupidatat nulla elit. Cupidatat sint consectetur eu consectetur magna ad nisi adipisicing duis elit et. Nisi laboris sunt do adipisicing anim adipisicing. Cupidatat aliqua est veniam fugiat nulla amet nisi commodo veniam irure deserunt magna mollit dolore. Qui tempor laboris laborum ipsum sint irure incididunt. Veniam et deserunt fugiat et aliqua et elit ut. Labore veniam consequat adipisicing sit aliqua quis magna aute ad proident commodo. Consectetur nostrud ea consequat laborum mollit nulla duis amet.</p><p>Ex laboris ad est incididunt. Ex labore sint nisi sunt quis do aute dolor laboris quis commodo dolore est. Proident tempor tempor ea minim minim elit ea officia. Duis veniam eiusmod est aliquip consectetur aliquip cupidatat nulla elit. Cupidatat sint consectetur eu consectetur magna ad nisi adipisicing duis elit et. Nisi laboris sunt do adipisicing anim adipisicing. Cupidatat aliqua est veniam fugiat nulla amet nisi commodo veniam irure deserunt magna mollit dolore. Qui tempor laboris laborum ipsum sint irure incididunt. Veniam et deserunt fugiat et aliqua et elit ut. Labore veniam consequat adipisicing sit aliqua quis magna aute ad proident commodo. Consectetur nostrud ea consequat laborum mollit nulla duis amet.</p><p>Ex laboris ad est incididunt. Ex labore sint nisi sunt quis do aute dolor laboris quis commodo dolore est. Proident tempor tempor ea minim minim elit ea officia. Duis veniam eiusmod est aliquip consectetur aliquip cupidatat nulla elit. Cupidatat sint consectetur eu consectetur magna ad nisi adipisicing duis elit et. Nisi laboris sunt do adipisicing anim adipisicing. Cupidatat aliqua est veniam fugiat nulla amet nisi commodo veniam irure deserunt magna mollit dolore. Qui tempor laboris laborum ipsum sint irure incididunt. Veniam et deserunt fugiat et aliqua et elit ut. Labore veniam consequat adipisicing sit aliqua quis magna aute ad proident commodo. Consectetur nostrud ea consequat laborum mollit nulla duis amet.</p>";
var contactform = "<form class= \"ui form \"><div class= \"field \"><label>Name</label><input type= \"text \" name= \"name \" placeholder= \"Name \" required /></div><div class= \"field \"><label>Email</label><input type= \"email \" name= \"email \" placeholder= \"Email Address \" required /></div><div class= \"field \"><label>Phone Number (Optional)</label><input type= \"text \" name= \"phNumber \" placeholder= \"Phone number \" pattern= \"[1-9]{1}[0-9]{9} \" title= \"Please provide a valid phone Number \" /></div><div class=\"field\"><label>Message</label><textarea rows= \"5 \" cols= \"26 \" name= \"message \"  required></textarea> </div><button type= \"submit \" class= \"ui yellow button \" >Send</button></form>";
$(document).ready(function(){
   $("#home").click(function(){
       $(".specificContent").empty();
       $(".specificContent").append(aboutContent);
   });
   $("#contact").click(function(){
       $(".specificContent").empty();
       $(".specificContent").append(contactform);
   });
});

menu = {};

// ready event
menu.ready = function() {

  // selector cache
  var
    $menuItem = $('.menu a.item, .menu .link.item'),
    // alias
    handler = {
      activate: function() {
        $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
        .not($(this))
        .removeClass('active');
      }
    }
  ;

  $menuItem
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document).ready(menu.ready);