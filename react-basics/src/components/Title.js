import React from 'react';

const Title = ({user= 'user_default', color='gray'}) => {
    const name = user;
    return (
        <h1 className="title" style={{ color: color }}>Hello World {name}</h1>
      );
}
 
export {Title} ;