import styled from "styled-components";

export let TextContent = styled.div`
  border-style: solid;
  border-radius: 35px;
  width: auto;
  margin: 2rem;
  padding: 1rem;
  text-align: center;
`;

export let Boton = styled.button`
  width: 50%;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 0px;
  font-size: 20px;
`;

export let Background = styled.div`
  background-image: url("${({ img }) => img}");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 900px;
`;
