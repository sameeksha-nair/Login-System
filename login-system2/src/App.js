import React from 'react';

import Login from './Components/Login';
import Home from './Components/Home';
import Create from './Components/Create';

import { Routes, Route } from 'react-router-dom';

function App() {
    
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Create" element={<Create />} />           
           
        </Routes>

        </div>
    );
}

export default App;
