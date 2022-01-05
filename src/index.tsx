import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import ArticleList from './pages/ArticleList';

ReactDOM.render((
  <div>
    <BrowserRouter>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/detail">detail</Link></li>
        <li><Link to="/list">list</Link></li>
      </ul>
      <Routes>
        <Route path="home" element={Home()} />
        <Route path="detail" element={ArticleDetail()} />
        <Route path="list" element={ArticleList()} />
        <Route path="*" element={<div>1</div>} />
      </Routes>
    </BrowserRouter>
  </div>
), document.querySelector('#root'))