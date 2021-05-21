import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

const Calc = () => (
  <NumberProvider>
    <Calculator />
  </NumberProvider>
);

export default Calc;