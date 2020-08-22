$( document ).ready(function(){
  let $uploadfile = $('#register .upload-profile-image input[type="file"]');

  $uploadfile.change(function(){
    readURL(this);
  });
  $("#reg-form").submit(function(event){
    let $password = $("#password");
    let $confirm = $("#password_pwd");
    let $error = $("#confirm_error");
    if($password.val() === $confirm.val()){
      return true;
    }else{
      $error.text("Passwords do not match");
      event.preventDefault();
    }
  });


});

function readURL(input) {
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload = function (e) {
            $("#register .upload-profile-image .img").attr('src', e.target.result);
            $("#register .upload-profile-image .camera-icon").css({display: "none"});
        }

        reader.readAsDataURL(input.files[0]);

    }
}
//let password = document.querySelector('#password');
//let confirm = document.querySelector('#password_pwd');
//let checkPasswordMatch = document.querySelector()

//function checkpassword () {
//  result.innerText = password.value == confirm.value ? 'Matching' : 'Not Matching';
//}

//password.addEventListener('keyup', ()=> {
//  if (pass2.value.length != 0) checkpassword();

//})
//
//confirm.addEventListener('keyup', ()=> {
//  if (confirm.value.length != 0) checkpassword();
//})
//function checkPasswordMatch() {
//  var password = $("#password").val();
//  var confirm_pwd = $("#password_pwd").val();
//
//  if (password != password_pwd)
//    $("#checkPasswordMatch").html("Passwords do not match").addClass('text-danger').removeClass('text-success');
//  else
//    $("#checkPasswordMatch").html("Passwords match").addClass('text-success').removeClass('text-danger');
//}
