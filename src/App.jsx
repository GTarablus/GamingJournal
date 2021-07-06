import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { GameDetails } from './cmps/GameDetails';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section className="main-app-container">
        <header>
          <Header />
        </header>
        <main className="main-page-container">
          <Switch>
            <Route component={GameDetails} path="/games/:gameId" />
            <Route component={Games} path="/games" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </Router>
  );
}

export default App;
