import { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../App.css';

function Create(){
    const [gametag, setGameTag] = useState()
    const [password, setPassword] = useState()
    const [password2, checkPassword] = useState()
    const [dialogState, setDialogState] = useState(0);


      

    var text1 = "Passwords dont match"
    var text2 = "Gamertag already exists"
    var text3 = "Success"
    var text4 = "Password not strong enough"
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Create', {gametag, password, password2})
        .then(res => {
            if(res.data === "Gamertag already exists")setDialogState(2);
                else if(res.data === "Password not strong enough")setDialogState(4);
                    else if(res.data === "Passwords do not match")setDialogState(1);
                        else setDialogState(3);
        }).catch(err => console.log(err))       

    }

        
    


    return(
        
        <div style={{overflowY: 'hidden'}}>
            <div className="bg"></div>
            <div id = "createtab">
                <div className="login-form" style={{paddingBottom: '210px'}}>
                    <h3 className="login-heading">Create Account</h3>
                    <form className="login"onSubmit={handleSubmit}>
                        <input type="text" id="gametag" name="gametag" required placeholder="Gamertag" onChange={(e) => setGameTag(e.target.value)}></input>
                        <br></br>
                        <input type="password" id="password" name="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <br></br>
                        <input type="password" id="passwordcheck" name="passwordcheck" required placeholder="Confirm Password" onChange={(e)=> checkPassword(e.target.value)}></input>
                        <div className={`alert-box2 ${dialogState === 1 ? 'visible' : 'hidden'}`}>{text1}</div>
                        <div className={`alert-box2 ${dialogState === 2 ? 'visible' : 'hidden'}`}>{text2}</div>
                        <div className={`alert-box3 ${dialogState === 3 ? 'visible' : 'hidden'}`}>{text3}</div>
                        <div className={`alert-box2 ${dialogState === 4 ? 'visible' : 'hidden'}`}>{text4}</div>
                        <button type="submit">Create</button>
                    </form>
                    <Link to="/"><button className="createbutton" style={{marginTop: '30px', marginRight: '16px'}}>Back</button></Link>
                </div>
            </div>
        </div>
    
    );
}

export default Create;