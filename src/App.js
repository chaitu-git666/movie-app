import {Route,Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/home';
import Search from './components/serach';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
