//   course validation
function validate(){
    var name = document.f1.name.value;
    var Phone = document.f1.Phone.value;
    var email = document.f1.email.value;

    var alphaExp = /^[A-Za-z ]+$/;
    var numExp = /^[0-9]+$/;
    var emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    // var subExp = /^[a-zA-Z0-9  ]+$/;

    status11 = status12 = status13  = false;
    if (name == "") {
        document.getElementById('nameNote').innerHTML = "Please enter your name";
        status11 = false;
      }
      else {
        if (name.match(alphaExp)) {
          document.getElementById('nameNote').innerHTML = "";
          status11 = true;
        }
        else {
          document.getElementById('nameNote').innerHTML = "Please enter characters only";
          status11 = false;
        }
      }
      if (Phone == "") {
        document.getElementById('PhoneNote').innerHTML = "Please enter phone number";
        status12 = false;
      }
      else {
        if (Phone.match(numExp)) {
          if (Phone.length == 10) {
            document.getElementById('PhoneNote').innerHTML = "";
            status12 = true;
          }
          else {
            document.getElementById('PhoneNote').innerHTML = "Please enter 10 digit number only";
            status12 = false;
          }
        }
        else {
          document.getElementById('PhoneNote').innerHTML = "Please enter digits only";
          status12 = false;
        }
      }
      if (email == "") {
        document.getElementById('emailNote').innerHTML = "Please enter email id"
        status13 = false;
      }
      else {
        if (email.match(emailExp)) {
          document.getElementById('emailNote').innerHTML = "";
          status13 = true;
        }
        else {
          document.getElementById('emailNote').innerHTML = "Please enter valid email id";
          status13 = false;
        }
      }
      if (status11 == true && status12 == true && status13 == true) {
        return true;
      }
      else {
        return false;
      }
}
