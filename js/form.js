$(document).ready(function () {

 $('#form').submit(function (event) {
   var formData = $('#form').serialize();
   $.ajax({
     url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2jLYmga5f8qNBfTM_EUXxmZ2ryzutymIet1XmukSnZrd7Iw/formResponse",
     data: formData,
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function () {
         $(".end-message").slideDown();
         $(".submit-btn").fadeOut();
         //window.location.href = "thanks.html";
       },
       200: function () {
         $(".false-message").slideDown();
       }
     }
   });
   event.preventDefault();
 });

});
