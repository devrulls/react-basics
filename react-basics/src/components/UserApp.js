import React from 'react';
import {Title} from './Title';
import styled from 'styled-components';

const UserApp = () => {
    
    const country = "Venezuela";
    const family = ["Mia", "Arya", "Yos", "Cecilia", "Raul"];
    
    return (
      <div>
        <Title user='Raul Alberto'color="orange"/>
        <Title user='Ruth'color='green'/>
        <Title/>
        {country && <p>I'm from {country}</p>}
        <Paragraphe>Your family list is:</Paragraphe>
        <ul>
          {family.map((family_member, index) => (<li key={index}>{family_member}</li>))}
        </ul>
      </div>
    );
  };


  //* TENGO QUE REMPLAZAR LA ETIQUETA P POR MI NUEVA CONST Paragraphe
  const Paragraphe = styled.p `
  margin: 20px 0;
  `;
  export default UserApp;