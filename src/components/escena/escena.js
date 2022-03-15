export const Escena = (props) => {
  return (
    <>
      {props.text.map((frase) => (
        <p>{frase}</p>
      ))}
    </>
  );
};
