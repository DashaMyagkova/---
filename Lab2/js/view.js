document.querySelector('.type').addEventListener('click', function(){
    if(document.querySelector('.type').textContent == 'deg'){
      this.textContent = 'rad';
    }
    else if(document.querySelector('.type').textContent == 'rad'){
      this.textContent = 'deg';
    }
})

function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }