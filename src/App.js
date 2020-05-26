import React, { useRef, useEffect } from 'react';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import "./App.css";

// Views
import Home from './views/Home';

const App = () => {

  const childRef = useRef();


  return (
    <Home/>
  );
}

export default App;
