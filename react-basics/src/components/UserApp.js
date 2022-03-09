import React from 'react';
import {Title} from './Title';

const UserApp = () => {
    
    const country = "Venezuela";
    const family = ["Mia", "Arya", "Yos", "Cecilia", "Raul"];
    
    return (
      <div>
        <Title user='Raul Alberto'color="orange"/>
        <Title user='Ruth'color='green'/>
        <Title/>
        {country && <p>I'm from {country}</p>}
        <ul>
          {family.map((family_member, index) => (<li key={index}>{family_member}</li>))}
        </ul>
      </div>
    );
  };

  export default UserApp;