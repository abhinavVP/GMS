import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Loginpg.css'
import Header from '../components/Header';


const LoginPage = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setType] = useState('admin');
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        localStorage.clear();
        try {
            console.log('inside try')
            console.log(userType);
            const response = await axios.post('http://localhost:5000/auth/login',{ userType, email, password });
            console.log('after req')
            try {
                if(response.status===200){
                    if(response.data.token) {
                        window.localStorage.setItem('token', response.data.token);
                        window.localStorage.setItem('name', response.data.name);
                        window.localStorage.setItem('userID', response.data.userID);
                        if(userType==='admin') navigate('/admin'); 
                        if(userType==='citizen') navigate('/user');
                        if(userType==='worker') navigate('/worker');
                    }
                    else alert("invalid credentials");
                }
                else{
                    alert(response.data.message);
                }
            } catch (error) {
                alert(response.data.message);
            }
        } catch (error) {
            alert(error.response.data.message); 
           
        }
       

    }


    return (
        <div className='Login'>
            <Header/>
       <div className="wrapper">
            <form onSubmit={handleLogin}>
            <h1>Login </h1>
            <div className="usertype">
                <select name="userType" id="userType" value = {userType} required onChange={(u) => setType(u.target.value)}>
                    
                    <option value="admin">Admin</option>
                    <option value="citizen">Citizen</option>
                    <option value="worker">Worker</option>
                </select>
            </div>
            <div className="input-box">
                <input name='email' type="text" placeholder="email" value = {email} required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input-box">
                <input name ='password' type="Password" placeholder="Password" value={password} required onChange={(p)=> setPassword(p.target.value)}/>
            </div>
            <button name='submit'type="submit" className="btn">Login</button>

            <div className="register-link">
                <p>Don't have an account yet? <Link to="/register">Register</Link></p>
            </div>

            </form>
       </div>
       </div>
    )

}

export default LoginPage;