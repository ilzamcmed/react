import React, { Component } from 'react';
import './App.css';
import Contador from './componets/Contador/Contador'
import SectionFood from './componets/SectionFood/SectionFood'
import Comment from './componets/Comment/Comment';

function App() {
  return (
    <div>
       <Contador />
       <SectionFood />
       <Comment />

    </div>
  );
}

export default App;
