import React, { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  });

  return (
    <div className="App">
      <span>Foo</span>
    </div>
  );
}

export default App;
