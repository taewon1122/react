import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Questions from './screens/Questions';
  
import Layout from './components/Layout/Layout';

/*

*/

function App() {

  return (
    
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/About" element = { <About /> } />
          <Route path = "/Projects" element = { <Projects /> } />
          <Route path = "/Questions" element = { <Questions /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
      
  );
}

export default App;
