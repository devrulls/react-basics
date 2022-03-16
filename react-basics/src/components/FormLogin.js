import React, {useState} from 'react';
import styles from "./formLogin.module.css";
import Button from '../elements/Button';

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
        <form action='' onSubmit={onSubmit} className={styles.form}>
            <h1>You haven't started a session</h1>
            {/* <p>User:{user}</p>
            <p>Password:{password}</p> */}
            <div>
                <label htmlFor='user' className={styles.label}>User</label>
                <input 
                    type="text" 
                    name='user' 
                    placeholder='User Login..' 
                    id='user'
                    value ={user}
                    onChange = {onChange}
                    className={styles.input}
                />
                <label htmlFor='password' className={styles.label}>Password:</label>
                <input 
                    type="password" 
                    name='password' 
                    placeholder='Pwd..' 
                    id='password'
                    value={password}
                    onChange = {onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <Button lenght type='submit'>Login</Button>
                {/* <button type='submit' className={styles.button}>Login</button> */}
            </div>
        </form>
     );
}
 
export default FormLogin;