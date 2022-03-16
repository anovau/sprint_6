import { TextContent } from "../../styled";  

export const Escena = (props) => {
  return (
    <> 
    
      {props.text.map((frase) => (
        <TextContent>{frase}</TextContent> 
      ))}
      
    </>
  );
};



