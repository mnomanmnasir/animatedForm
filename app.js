const username = document.getElementById('username')
const password = document.getElementById('password')

document.getElementById('form').addEventListener('submit', (event) =>
{
    event.preventDefault();
    valid = true ;

    const username_value = username.value;
    const password_value = password.value;

    if(username_value.length < 5 || password_value.length < 12)
    {
        alert("The form has not been submitted : \n - A field is not valid.")
        valid = false;
    }
    if(valid)
    {
        // event.target.submit();
        alert("The form has been completed. \n We will proceed with the sending")

    }

})


let reg = document.getElementById('register')

reg.addEventListener('click', function(){

    alert(" First off All! \n You Dont Have Any Acount");

})