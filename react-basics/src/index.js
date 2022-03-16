import React, {useState} from "react";
import ReactDOM from "react-dom";


// ************* COMPONENTS *************

import UserApp from "./components/UserApp";
import FormLogin from "./components/FormLogin";
// import Counter from "./components/CounterClass";
// import CounterF from "./components/CounterFunctional";
import Button from "./elements/Button";
import UseReducer from "./components/UseReducer";
import Blog from "./components/Blog";

// ************* CSS *************

import "./index.css";



const App = () => {
  const [session, changeSession] = useState(false);

  return (
    <div className="container">
      {session ? 
      <>
        <UserApp/>
        <Blog/>
        {/* <Counter/> */}
        <UseReducer/>
        {/* <CounterF quantityIncrease={100} quantityDecrease={20}/> */}
        <Button lenght marginTop onClick={()=> changeSession(false)}>Logout</Button>
        {/* <button onClick={()=> changeSession(false)}>Logout</button> */}
      </> 
      : 
      <>
        <FormLogin
          session={session}
          changeSession={changeSession}
        />
        {/* <button onClick={()=> changeSession(true)}>Login</button> */}
      </>
      }
    </div>
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
