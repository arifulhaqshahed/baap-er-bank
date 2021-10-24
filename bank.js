// Enter to the bank site
document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email == 'shahed@gmail.com' && password == 'shahed'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please enter correct email and password');
    }
})

// Deposit Section
