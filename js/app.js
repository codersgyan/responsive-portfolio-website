$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});

function sendEmail(){
  
  // let sender_email=document.getElementById("sender_email").value;
  // let sender_subject=document.getElementById("sender_subject").value;
  // let sender_message=document.getElementById("sender_message").value;
  let sender_email='Anurag@gmail.com';
  let sender_subject='time pass';
  let sender_message='sample body';
  console.log(sender_email,sender_subject,sender_message);
  event.preventDefault(); 
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "gunjanatyourservice@gmail.com",
      Password : "gygk heqy jfaa fjnw",
      To : 'anurag642001@gmail.com',
      From : sender_email,
      Subject : sender_subject,
      Body :sender_message
  }).then(
    message => alert(message)
  );
}