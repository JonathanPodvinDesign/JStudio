$(document).ready(function(){
  
  //////////////////////////
  // HAMBURGER ANIMATION  //
  //////////////////////////
  
  // FIRST SPAN
  $('.hamburger').click(function(){
    $('.hamburger__span--first').toggleClass('hamburger-cross-span-first')
  });
  // SECOND SPAN
  $('.hamburger').click(function(){
    $('.hamburger__span--second').toggleClass('hamburger-cross-span-second')
  });
  // THIRD SPAN
  $('.hamburger').click(function(){
    $('.hamburger__span--third').toggleClass('hamburger-cross-span-third')
  });
  // REMOVE SHADOW
 $('.hamburger').click(function(){
   $('.hamburger__span').toggleClass('hamburger-shadow-removed')
  });
  
  ///////////////////////
  // BG MENU ANIMATED  //
  ///////////////////////
  
  $('.hamburger').click(function(){
    $('.menu').toggleClass('menu-open');
  });
  
  // FIRST DIV
 $('.hamburger').click(function(){
    $('.bg-menu-animated__div-first').toggleClass('bg-menu-animated__div-first-open');
  });
  // SECOND DIV
  $('.hamburger').click(function(){
    $('.bg-menu-animated__div-second').toggleClass('bg-menu-animated__div-second-open');
  });
  // THIRD DIV
  $('.hamburger').click(function(){
    $('.bg-menu-animated__div-third').toggleClass('bg-menu-animated__div-third-open');
  });
  
  /////////////////////
  // MENU ANIMATION  //
  /////////////////////
  
  $('.hamburger').click(function(){
    $('.menu__li--first').toggleClass('menu__li--first-open');
  });
  
  $('.hamburger').click(function(){
    $('.menu__li--second').toggleClass('menu__li--second-open');
  });
  
  $('.hamburger').click(function(){
    $('.menu__li--third').toggleClass('menu__li--third-open');
  });
  
  $('.hamburger').click(function(){
    $('.menu__li--fourth').toggleClass('menu__li--fourth-open');
  });
  
});

  ///////////////////////////
  // IMG POP UP ANIMATION  //
  ///////////////////////////