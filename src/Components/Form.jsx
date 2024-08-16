// Form.jsx
import React, { useState } from 'react';
import Card from './Card';
import Message from './Message';

function Form () {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3 && !name.startsWith(' ') && color.length >= 6) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="name">Ingresa tu nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Ingresa tu color favorito</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <Message text={error} />}
      {submitted && <Card value1={name} value2={color} />}
    </div>
  );
};

export default Form;
