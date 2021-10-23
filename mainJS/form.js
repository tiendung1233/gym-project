document.querySelector('#submit_form').onsubmit = function(e) {
    e.preventDefault();;
    
    // try cap vao html
    let nameOj = document.querySelector('input[name="name"]');
    let emailOj = document.querySelector('input[name="email"]');
    let phoneOj = document.querySelector('input[name="phone"]');
    let messageOj = document.querySelector('input[name="message"]');
    // lay gt
    
    let name = nameOj.value;
    let email = emailOj.value;
    let message = messageOj.value;
    let phone = phoneOj.value;
    // validate form

    // reset

    let requiredOj = document.querySelectorAll('.required')

    if(requiredOj.length > 0) {
        requiredOj.forEach(function(item){
            item.innerText = '';
        })
    }
    let errors = {};

    if (name.trim() == ''){
        errors['fullname'] ='họ và tên không được để trống';
        nameOj.parentElement.querySelector('.required ').innerText =  errors['fullname'] 
    }

    if (email.trim() == ''){
        errors['email'] ='Email không được để trống';
        emailOj.parentElement.querySelector('.required1').innerText =  errors['email'] 
    }

    if (phone.trim() == ''){
        errors['phone'] ='Số điện thoại không được để trống';
        phoneOj.parentElement.querySelector('.required2').innerText =  errors['phone'] 
    }
    if(Object.keys(errors).length == 0){
        let data = {
            'entry.1020004212': name,
            'entry.318259503': email,
            'entry.38293836': phone,
            'entry.1614286212': message,
        }
        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();
        console.log(queryString);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1kuS2PKHB__haJXRD8ULA5gtO6EGSjQy34t3V7ps36JOvXQ/formResponse', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(queryString);
    }
}