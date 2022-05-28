import React, { Component } from 'react';
import Movies from './movies';
import MovieImage from '../assets/images/2041376.gif';
class Search extends Component {

    state = { 
        movies:[],
        clicked:false,
        response:"",
        movieName:"",
     } 
     handleSubmit = (e) =>
     {
        e.preventDefault();
        let name=e.target.movieName.value;
        if(name === "")
          this.setState({clicked:false})
        else
           this.setState({clicked:true})
           console.log(this.state.clicked)
        this.componentDidMount(name)
        this.setState({movieName:name})
     }
    componentDidMount(props)
     {
       let  movieNameBySearch = props;
       (movieNameBySearch === undefined) ? movieNameBySearch="" : movieNameBySearch = props;
       console.log(movieNameBySearch)
         fetch(`https://www.omdbapi.com/?s=${movieNameBySearch}&apikey=c3e01bc4`).then(res => res.json()).then(data => {
             this.setState({movies: data.Search,response:data.Response})
         })
     }
    render() { 
        document.body.style.background="#a8c0ff"
        let movieList = (this.state.response === "False") ? <h1 id='message'><i className="fa-solid fa-earth-americas"></i> Oops, No Results For  {this.state.movieName}</h1> : this.state.movies.map(data => {
            return <Movies 
                      key={data.imdbID} 
                      name={data.Title} 
                      url={data.Poster} 
                      year={data.Year} 
                      type={data.Type}
                    />
        }) 
        return (
            <React.Fragment>
               <h1 className='text text2'>Search Movie By Name <i id='icon' className="fa-solid fa-magnifying-glass"></i></h1>
               <form action="" onSubmit={ this.handleSubmit}>
                   <div className='input-group input-group-sm mb-3'>
                   <input 
                   type="text" 
                   name='movieName'
                   placeholder='movie name'
                   />
                   <button type='submit'  className="btn btn-primary btn-sm" >Submit</button>
                   </div>
               </form>
               {(this.state.clicked) ? movieList : 
               <div>
                 {/* <p id='message'>Go Ahead, Make My Day</p> */}
                 <img src={MovieImage} id="search-img" alt="" />
               </div> }
            </React.Fragment>
        );
    }
}
 
export default Search;