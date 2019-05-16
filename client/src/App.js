import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './login/Login';

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/login'>Login</NavLink>
        </nav>
      </header>

      <main>
        <Route path='/login' component={Login} />
      </main>
    </>
  );
}

export default App;
