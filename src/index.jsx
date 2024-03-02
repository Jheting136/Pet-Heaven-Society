import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import FindAFriend from './components/FindaFriend';
import { Release } from './components/release';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';
import reportWebVitals from './reportWebVitals';


const nav = ReactDOM.createRoot(
  document.getElementById('nav')
);
const content = ReactDOM.createRoot(
  document.getElementById('content')
);

nav.render(
  <React.StrictMode>
    
      <Navbar />
    
  </React.StrictMode>
);

content.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findAFriend" element={<FindAFriend />} />
        <Route path="/release" element={<Release />} />
        <Route path="/details/:id" element={<PetDetails />}></Route>
        <Route path="/adoptions/:id" element={<PetAdoptionForm />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
