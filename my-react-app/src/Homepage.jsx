import React from 'react'
import softwareImage from './software.png';
import "./software.css";
import { useNavigate} from 'react-router-dom';

export const Homepage = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('../login')
    }

    const handleSubmit2=(e)=>{
        e.preventDefault();
        navigate('../register')
    }

  return (
    <div>
        <div className="container">
        <img src={softwareImage} className="software" alt="Software"/>
        <h2>Manage your stocks with best inventory management system! Add and remove automatically!</h2>

    </div>
    <div className="btnContainer">
    <button className="btn1" onClick={handleSubmit}>Sign in</button>
    <button className="btn2" onClick={handleSubmit2}>Sign Up</button>
    </div>
    </div>
  )
}
