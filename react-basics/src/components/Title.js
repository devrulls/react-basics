import React from 'react';

const Title = () => {
    const name = "DevRulls";
    const color = "red";
    return (
        <h1 className="title" style={{ color: color }}>Hello World {name}</h1>
      );
}

const TitleOrange = (props) => {
    const name = props.user;
    const color = 'Orange';
    return (
        <h1 className="title" style={{ color: color }}>Hello World {name}</h1>
      );
}

const TitleBlue = ({user}) => {
    const name = user;
    const color = 'Blue';
    return (
        <h1 className="title" style={{ color: color }}>Hello World {name}</h1>
      );
}
 
export {Title, TitleOrange, TitleBlue} ;