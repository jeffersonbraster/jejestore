import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css';
import CartScreen from './screens/CartScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classNameList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classNameList.remove("open")
  }

  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
        </button>
          <Link to="/">JejeStore</Link>          
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Entrar</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categorias</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Calças</a>
          </li>

          <li>
            <a href="index.html">Camisas</a>
          </li>

        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>

      </main>
      <footer className="footer">
        Todos os direitos reservados, 2020.
    </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
