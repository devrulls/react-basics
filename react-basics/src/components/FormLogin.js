import React, {useState} from 'react';

const FormLogin = ({session ,changeSession}) => {
    const [user, changeUser] = useState('');
    const [password, changePassword] = useState('');

    // const onChangeUser = (e) =>{
    //     changeUser(e.target.value)
    // };
    // const onChangePassword = (e) =>{
    //     changePassword(e.target.value)
    // };

    const onChange = (e) =>{
        if(e.target.name === 'user'){
            changeUser(e.target.value)
        }else if(e.target.name === 'password'){
            changePassword(e.target.value)
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if (user === 'mia' && password === '123'){
            changeSession(true);
        }else{
            changeUser('');
            changePassword('');
        }
    }
    return ( 
        <form action='' onSubmit={onSubmit}>
            <p>User:{user}</p>
            <p>Password:{password}</p>
            <div>
                <label htmlFor='user'>User</label>
                <input 
                    type="text" 
                    name='user' 
                    placeholder='User Login..' 
                    id='user'
                    value ={user}
                    onChange = {onChange}
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type="password" 
                    name='password' 
                    placeholder='Pwd..' 
                    id='password'
                    value={password}
                    onChange = {onChange}
                />
                <button 
                    type='submit'   
                >
                    Login</button>
            </div>
        </form>
     );
}
 
export default FormLogin;