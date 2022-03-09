import React from "react";
import ReactDOM from "react-dom";
import UserApp from "./components/UserApp";

const session = true;



const App = () => {
  return (
    <>
      {session ? 
      <>
      <UserApp/>
      </> 
      : 
      <p>You haven't started session</p>}
    </>
  );
};


// const checkSession = (session) =>{
//     if (session){
//       return JSX;
//     }else{
//       return <h1 className='title'>You have not logged in</h1>
//     }
// };

// ReactDOM.render(checkSession(session),document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById("root"));
