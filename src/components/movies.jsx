import React from 'react';

const Movies = (props) => {
    return ( 
        <div  id='con'>
            <div className='card '>
            <img className="card-img-top" src={(props.url === "N/A") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" : props.url} alt="" />
            <div className='card-body'>
               <h4 className='card-title'>Title:-  {props.name}</h4>
               <p className='card-text'>Year:-  {props.year}</p>
               <p className='card-text'>Type:-  {props.type}</p>
            </div>
            </div>
        </div>
     );
}
 
export default Movies;