import React  from 'react';
import MovieIcon from '../assets/images/movie-icon-3.png';
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    document.body.style.background="#a8c0ff"
    return ( 
        <div className='home'>
            <div className='title'>
               <h1 className='text'>Welcome to Movie Data App</h1>
            </div>
            <div>
               <img  id='logo' src={MovieIcon} alt="" />
            </div>
            <button 
            type="button" 
            className="btn btn-primary" 
            id='button' 
            onClick={() => navigate("/search")}>Get Started</button>
        </div>
     );
}
 
    // componentDidMount() {
    //     document.body.style.backgroundColor = "#51dee0"
    // }
export default Home;
