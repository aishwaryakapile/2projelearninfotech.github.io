// $(document).ready(function(){
//   $('#btun1').click(function(){
//     $('#div1').fadeOut();
//     $('#div2').fadeOut(2000);
//     $('#div3').fadeOut(3000);
//     $('#div4').fadeOut();
//     $('#div5').fadeOut();


//   })
 
// })

function validate() {
    var cname = document.f1.cname.value;
    var name = document.f1.name.value;
    var Phone = document.f1.Phone.value;
    var email = document.f1.email.value;
    var subject = document.f1.subject.value;

    var alphaExp = /^[A-Za-z ]+$/;
    var numExp = /^[0-9]+$/;
    var emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    // var subExp = /^[a-zA-Z0-9  ]+$/;

    status1 = status2 = status3 = status4 = status5 = false;

    if (cname == "") {
      document.getElementById('cnameNote').innerHTML = "Please enter Course name";
      status1 = false;
    }
    else {
      if (cname.match(alphaExp)) {
        document.getElementById('cnameNote').innerHTML = "";
        status1 = true;
      }
      else {
        document.getElementById('cnameNote').innerHTML = "Please enter characters only";
        status1 = false;
      }
    }
    if (name == "") {
      document.getElementById('nameNote').innerHTML = "Please enter your name";
      status2 = false;
    }
    else {
      if (name.match(alphaExp)) {
        document.getElementById('nameNote').innerHTML = "";
        status2 = true;
      }
      else {
        document.getElementById('nameNote').innerHTML = "Please enter characters only";
        status2 = false;
      }
    }
    if (Phone == "") {
      document.getElementById('PhoneNote').innerHTML = "Please enter phone number";
      status3 = false;
    }
    else {
      if (Phone.match(numExp)) {
        if (Phone.length == 10) {
          document.getElementById('PhoneNote').innerHTML = "";
          status3 = true;
        }
        else {
          document.getElementById('PhoneNote').innerHTML = "Please enter 10 digit number only";
          status3 = false;
        }
      }
      else {
        document.getElementById('PhoneNote').innerHTML = "Please enter digits only";
        status3 = false;
      }
    }
    if (email == "") {
      document.getElementById('emailNote').innerHTML = "Please enter email id"
      status4 = false;
    }
    else {
      if (email.match(emailExp)) {
        document.getElementById('emailNote').innerHTML = "";
        status4 = true;
      }
      else {
        document.getElementById('emailNote').innerHTML = "Please enter valid email id";
        status4 = false;
      }
    }
    if (subject == "") {
      document.getElementById('subjectNote').innerHTML = "Please enter subject"
      status5 = false;
    }
    else {
      if (subject.match(alphaExp)) {
        document.getElementById('subjectNote').innerHTML = ""
        status5 = true;
      }
      else {
        document.getElementById('subjectNote').innerHTML = "Please enter valid subject"
        status5 = false;
      }
    }


    if (status1 == true && status2 == true && status3 == true && status4 == true && status5 == true) {
      return true;
    }
    else {
      return false;
    }

  }
  function book(){
    var x=confirm('Do You Want To Proceed')
    if(x){
      return true;
    }
    else{
      return false;
    }
  }

  
