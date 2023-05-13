import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "jotai";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import AllRecipes from './components/body/AllRecipes';
import Recipe from './components/body/Recipe';
import IngredientsRecipes from './components/body/IngredientsRecipes';
import MainContent from './components/body/MainContent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path='/complexSearch' element={<AllRecipes />} />
            <Route path='/byIngredients' element={<IngredientsRecipes />} />
            <Route path='/recipe/:id' element={<Recipe />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
