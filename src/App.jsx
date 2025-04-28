import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
  import Home from './screens/Home';
  import About from './screens/About';
  import Projects from './screens/Projects';
  import Questions from './screens/Questions';
  */
 import Layout from './components/Layout/Layout';

/*
<BrowserRouter>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/About" element = { <About /> } />
        <Route path = "/Projects" element = { <Projects /> } />
        <Route path = "/Questions" element = { <Questions /> } />
      </Routes>
</BrowserRouter>
*/

function App() {

  return (

    <Layout/>
    
  );
}

export default App;
