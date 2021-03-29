let pow = "";

function equal (expression) {
    if(input.textContent.includes('^')){
      let a = input.textContent.split('^');
      let b = eval(pow);
      let c = +a[1];
      let result = Math.pow(b, c);
      pow = "";
      return result;
    }
    else
      return (eval(expression).toFixed(8));
     
}

function math (name, expression) {
  if(expression == 0)
    return ("");
  if(name == '%')
    return (eval(expression)/100);
  if(name == 'pi')
    return (expression + Math.PI.toFixed(8));
  if(name == 'e')
    return (expression + Math.E.toFixed(8));
  if(name == 'sqrt')
    return (Math.sqrt(eval(expression)));
  if(name == 'sqr')
    return (Math.pow(eval(expression), 2));
  if(name == '^-1')
    return (Math.pow(eval(expression), -1));
  if(name == '^'){
    pow = input.textContent;
    input.textContent += "^";
  }
  if(name == 'lg')
    return (Math.log10(eval(expression)).toFixed(8));
  if(name == 'ln')
    return (Math.log(eval(expression)).toFixed(8));
  if(name == 'sin'){
    if(document.querySelector('.type').textContent == 'deg')
      return (parseFloat(Math.sin(eval(expression)/180*Math.PI).toFixed(8).toString()));
    else 
      return (parseFloat(Math.sin(eval(expression)).toFixed(8).toString()));
  }
  if(name == 'cos'){
    if(document.querySelector('.type').textContent == 'deg')
      return (parseFloat(Math.cos(eval(expression)/180*Math.PI).toFixed(8).toString()));
    else 
      return (parseFloat(Math.cos(eval(expression)).toFixed(8).toString()));
  }
  if(name == 'tan'){
    if(document.querySelector('.type').textContent == 'deg')
      return (parseFloat(Math.tan(eval(expression)/180*Math.PI).toFixed(8).toString()));
    else 
      return (parseFloat(Math.tan(eval(expression)).toFixed(8).toString()));
  }
  if(name == 'ctg'){
    if(document.querySelector('.type').textContent == 'deg')
      return (parseFloat(1/Math.tan(eval(expression)/180*Math.PI).toFixed(8).toString()));
    else 
      return (parseFloat(1/Math.tan(eval(expression)).toFixed(8).toString()));
  }
}

function fact(n){
  return ((n != 1) ? n*fact(n-1) : 1);
}

function factorial(expression){
  return (fact(+eval(expression)));
}