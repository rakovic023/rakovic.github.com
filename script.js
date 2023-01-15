var attempt = 3;
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
    if ( username == "kamioni" && password == "sunajbolji"){
      alert ("Uspesno ste se pridruzili!");
      window.location = "page1.html";
      return false;
}
  else{
    attempt --;
    alert("Ostalo vam je jos "+attempt+" pokusaj");
    if( attempt == 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
    return false;
}
}
}
