//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ value1, value2 }) {
  return (
    <div className="card">
      <h2>Hola {value1}, sabemos que este es tu color favorito</h2>
      <div className="color-box" style={{ backgroundColor: value2 }}>
        <p>{value2}</p>
      </div>
    </div>
  );
}

export default Card;
