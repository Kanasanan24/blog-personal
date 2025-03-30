import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IFTheme } from './services/interfaceGlobal';

import './App.css';

function App({ theme }:IFTheme) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Home - Personal Website";
    navigate("/blogs");
  }, []);

  // render
  return (
    <div
      className={"App " + (theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : ""))}
    >
      
    </div>
  );
}

export default App
