//button event handelr
document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');const userEmail = emailField.value;
// get password
    const passwordField = document.getElementById('user-pass');const userPass = passwordField.value;
//check validation
    if (userEmail == 'hi@bank.com' && userPass == "455") {
        window.location.href ="banking.html"
    } 
});
