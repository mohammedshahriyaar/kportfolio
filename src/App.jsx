import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import p1 from './components/assests/p1'

const App = () => {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${p1})` }}

    >
      <Header />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
