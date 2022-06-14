import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import OneBeer from './OneBeer';
import App from './App';
import Search from './Search';
import Panier from './Panier';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="biere-seule/:id/:name" element={<OneBeer />} />
        <Route path="/search/:search" element={<App />} />
        <Route path='/carts' element={<Panier />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Le React Router en version 6 n'est plus compatible avec les classes.
// Si on n'utilise pas les hooks, on doit donc utiliser cette fonction.
export function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    let navigate = useNavigate();

    return <Component {...props} router={{ params, navigate }} />;
  }

  return ComponentWithRouter;
}
