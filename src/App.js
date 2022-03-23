import React, { useState } from "react";
/* import { Escena } from "./components/escena/escena"; */
import { data } from "./data";
import { Background } from "./styled";
import "./App.css";
import { TextContent } from "./styled";



function App() {
  // Hooks
  const [currentSentence, setCurrentSentence] = useState(0);

  // Methods
  function next() {
    if (currentSentence < 3) setCurrentSentence(currentSentence + 1);
  }

  function previous() {
    if (currentSentence > 0) setCurrentSentence(currentSentence - 1);
  }
  const Escena = ({ text, active }) => {
    return text.map((item, index) =>
      active === index ? 
        (<TextContent key={index} className={"active"}>{item.txt}</TextContent>) : 
        (<TextContent key={index} className={"no-active"} >{item.txt} </TextContent>)
    );
  };

  const [welcome, setWelcome] = useState(true);

  function start() {setWelcome(false) }

  return welcome ? (
    <main>
      <h1>INTRO REACT</h1>
      <p>
        Mostrarem una petita història de 4 passos, en la qual mitjançant dos
        botons els usuaris poden avançar i retrocedir el text, marcant el text i
        la imatge de fons.
      </p>
      <button onClick={start}>COMEÇAR!</button>
    </main>
  ) : (
    <Background img={data[currentSentence].img}>
      <header>
        <button onClick={previous}>Anterior</button>
        <button onClick={next}>Següent</button>
      </header>
      <Escena text={data} active={currentSentence} />
    </Background>
  );
}

export default App;
