import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import '../App.css';

function Login(){
    const [gametag, setGameTag] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    var [text1, setText]= useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Login', {gametag, password})
        .then(res => {
            showDialog(res.data);
            if(res.data.Status === "Success") {
                    
                    navigate('/')
            }
        }).catch(err => console.log(err))
    }

    
    const [dialogState, setDialogState] = useState(0);

    const showDialog = (text2) => {
        setText(()=> text2);
        setDialogState(1);


    };
  
    return(
    <div>
        <div className="bg"></div>
        <div id = "logintab">
            <div className="login-form">
                <h3 className="login-heading">Login</h3>
                <form className="login" onSubmit={handleSubmit}>
                    <input type="text" id="gametag" name="gametag" required placeholder="Gamertag" onChange={(e) => setGameTag(e.target.value)}></input>
                    <br></br>
                    <input type="password" id="password" name="password" required placeholder="Password"  onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <div className="rememberme" style={{marginLeft: '10px', paddingLeft: '70px'}}>
                        <input type="checkbox" id="remember" name="rememberme"></input>
                        <label htmlFor="rememberme" style={{padding: '10px'}}>Remember Me</label>
                        <div className={`alert-box ${dialogState === 1 ? 'visible' : 'hidden'}`}>{text1}</div>
                    </div>
                    <label htmlFor="forgotpass" style={{paddingLeft: '12px'}}><br></br>Forgot Password?</label>
                    <button type="submit">Login</button>
                    
                </form>
                <h4>Or</h4>
                <Link to= "/Create"><button className="createbutton">Create an Account</button></Link>
                <br></br>
            </div>
            
        </div>
    </div>
    
    );
}

export default Login;