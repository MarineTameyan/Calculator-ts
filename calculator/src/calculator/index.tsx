import React, { useState } from 'react';
import "./style.css"

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState<string>('');
  const [secondValue, setSecondValue] = useState<string>('');
  const [action, setAction] = useState<string>('');
  const [resultValue, setResultValue] = useState<number | null>(null);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  const actions = ['+', '-', '*', '/'];

  const handleNumberClick = (value: number) => {
    if (action) {
      setSecondValue((prevValue) => prevValue + value);
    } else {
      setFirstValue((prevValue) => prevValue + value);
    }
  };

  const handleActionClick = (value: string) => {
    setAction(value);
  };

  const handleDeleteClick = () => {
    setFirstValue('');
    setSecondValue('');
    setAction('');
    setResultValue(null);
  };

  const handleEqualClick = () => {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (action === '+') {
      setResultValue(num1 + num2);
    } else if (action === '-') {
      setResultValue(num1 - num2);
    } else if (action === '*') {
      setResultValue(num1 * num2);
    } else if (action === '/') {
      setResultValue(num1 / num2);
    }
  };

  return (
    <div className='container'>
      <div className="result">{resultValue !== null ? resultValue : `${firstValue} ${action} ${secondValue}`}</div>
      <div className="calc-data">
        {numbers.map((number) => (
          <button key={number} className="calc-items num" onClick={() => handleNumberClick(number)}>{number}</button>
        ))}
        {actions.map((action) => (
          <button key={action} className=" calc-items action" onClick={() => handleActionClick(action)}>{action}</button>
        ))}
        <button className="calc-items equal" onClick={handleEqualClick}>=</button>
        <button className="calc-items delete" onClick={handleDeleteClick}>C</button>
      </div>
    </div>
  );
};

