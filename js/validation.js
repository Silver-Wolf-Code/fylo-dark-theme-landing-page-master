function validation()
{
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern))
    {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your email address in valid";
      text.style.color = "#8eff42";
      text.style.fontFamily = "'Open Sans', sans-serif";
    }
  else
  {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "#ff4242";
    text.style.fontFamily = "'Open Sans', sans-serif";
  }

  if(email == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#fff";
  }
}

