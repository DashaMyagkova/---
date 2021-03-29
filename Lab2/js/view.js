let input = document.querySelector('.input');
document.querySelector('.type').addEventListener('click', function(){
    if(document.querySelector('.type').textContent == 'deg'){
      this.textContent = 'rad';
    }
    else if(document.querySelector('.type').textContent == 'rad'){
      this.textContent = 'deg';
    }
})

function equal_view () {
  let expression = input.textContent;
  input.textContent = equal(expression)
};

function math_view (name) {
  let expression = input.textContent;
  input.textContent = math(name, expression)
};

function factorial_view (){
  let expression = input.textContent;
  input.textContent = factorial(expression)
}