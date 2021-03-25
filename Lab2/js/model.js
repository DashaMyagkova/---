let input = document.querySelector('.input');
let pow = "";

function equal () {
    let expression = input.textContent;

    if(input.textContent.includes('^')){
      let a = input.textContent.split('^');
      let b = eval(pow);
      let c = +a[1];
      input.textContent = Math.pow(b, c);
      pow = "";
      return;
    }
    if(expression)
      input.textContent = eval(expression).toFixed(8);
}

function math (name) {
  let expression = input.textContent;
  if(expression == 0)
    input.textContent = "";

  if(name == '%')
    input.textContent = eval(expression)/100;
  if(name == 'pi')
    input.textContent = expression + Math.PI.toFixed(8);
  if(name == 'e')
    input.textContent = expression + Math.E.toFixed(8);
  if(name == 'sqrt')
    input.textContent = Math.sqrt(eval(expression));
  if(name == 'sqr')
    input.textContent = Math.pow(eval(expression), 2);
  if(name == '^-1')
    input.textContent = Math.pow(eval(expression), -1);
  if(name == '^'){
    pow = input.textContent;
    input.textContent += "^";
  }
  if(name == 'lg')
    input.textContent = Math.log10(eval(expression)).toFixed(8);
  if(name == 'ln')
    input.textContent = Math.log(eval(expression)).toFixed(8);
  if(name == 'sin'){
    if(document.querySelector('.type').textContent == 'deg')
      input.textContent = parseFloat(Math.sin(eval(expression)/180*Math.PI).toFixed(8).toString());
    else 
      input.textContent = parseFloat(Math.sin(eval(expression)).toFixed(8).toString());
  }
  if(name == 'cos'){
    if(document.querySelector('.type').textContent == 'deg')
      input.textContent = parseFloat(Math.cos(eval(expression)/180*Math.PI).toFixed(8).toString());
    else 
      input.textContent = parseFloat(Math.cos(eval(expression)).toFixed(8).toString());
  }
  if(name == 'tan'){
    if(document.querySelector('.type').textContent == 'deg')
      input.textContent = parseFloat(Math.tan(eval(expression)/180*Math.PI).toFixed(8).toString());
    else 
      input.textContent = parseFloat(Math.tan(eval(expression)).toFixed(8).toString());
  }
  if(name == 'ctg'){
    if(document.querySelector('.type').textContent == 'deg')
      input.textContent = parseFloat(1/Math.tan(eval(expression)/180*Math.PI).toFixed(8).toString());
    else 
      input.textContent = parseFloat(1/Math.tan(eval(expression)).toFixed(8).toString());
  }
}

function fact(n){
  return ((n != 1) ? n*fact(n-1) : 1);
}

function factorial(){
  input.textContent = fact(+eval(input.textContent));
}

