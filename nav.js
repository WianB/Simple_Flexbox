function openNav() {
   $("#mySidenav").css('width', '250px');
   $("#main").css('marginLeft', '250px');
   $(".box-container").css('width', '100%').css('width', '-=250px');
   $('.box-container').css('margin', '0');

}

function closeNav() {
   $("#mySidenav").css('width', '0px');
   $("#main").css('margin-left', '0px');
   $(".box-container").css('width', '100%');
   $('.box-container').css('margin', '0 auto');
}
