import React, {useState} from "react";
import ReactDOM from "react-dom";
import UserApp from "./components/UserApp";
import FormLogin from "./components/FormLogin";


const App = () => {
  const [session, changeSession] = useState(false);

  return (
    <>
      {session ? 
      <>
        <UserApp/>
        <button onClick={()=> changeSession(false)}>Logout</button>
      </> 
      : 
      <>
        <p>You haven't started session</p>
        <FormLogin
          session={session}
          changeSession={changeSession}
        />
        {/* <button onClick={()=> changeSession(true)}>Login</button> */}
      </>
      }
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
