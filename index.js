function validation(){
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Formfill.Username.value.length<6)
    {
        document.getElementById("result").innerHTML="Atleast 6 characters";
        return false;
    }
    else if(document.Formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }
    else if(document.Formfill.Password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6)
    {
        document.getElementById("result").innerHTML="password should have more than 6 characters";
        return false;
    }
    else if(document.Formfill.CPassword.value=="")
    {
        document.getElementById("result").innerHTML="Enter the confirmation password";
        return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value)
    {
        document.getElementById("result").innerHTML="Password does not match";
        return false;
    }
    else if(document.Formfill.Password.value == document.Formfill.CPassword.value)
    {
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById("popup");
function CloseSlide(){
    popup.classList.remove('open-slide');
}