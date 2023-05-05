// Autora: Aleny
import "../styles/BotonNG.css";

const BotonNG = (props) => {
  return (
    <button
      id={props.id}
      type={props.type ? props.type : "button"}
      className={
        "boton-ng " +
        (props.color === "gris" ? "gris " : "") +
        (props.className ? props.className : "")
      }
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
};

export default BotonNG;
