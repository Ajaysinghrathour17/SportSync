import './App.css';
import { CiSearch } from 'react-icons/ci';
import SportsEvents from './SportsEvent';
import { useState } from 'react';

function App() {
  const [personImage, setPersonImage] = useState([
    'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQGHfORdVN4mbBgS85t6W7cG2rDM7wNQ5UfYI5R1hkffiUXKxmp_EZ1VJQDs8udlSVG0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hmjzyyGKcIocoHL7RbLb39f22wYtZfo5MG5Nxxi1-6YoAEh7uTSPZje2D6ZvF2vI1i8&usqp=CAU',
    'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
    'https://www.shutterstock.com/image-photo/photo-discontent-female-gloomy-expression-600nw-1094742386.jpg',
  ]);
  return (
    <>
      <header>
        <nav>
          <h1>Logo</h1>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#members">Community</a>
          </div>
          <div className="authentication-buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
        <h1>Find Your Perfect Match on the Field!</h1>
        <p>
          Tired of playing solo? We get it. <br /> Finding people to play sports
          with can be a challenge. <br /> That's where we come in!
        </p>
        <form>
          <input type="text" placeholder="Search Likeminded people" />
          <CiSearch />
        </form>
      </header>

      <main>
        <section className="member-section" name="members" id="members">
          <h2>Our Active Members</h2>
          <section className="container">
            <div className="member-card">
              <img src={personImage[0]} alt="" />
              <h3>Jhon Doe</h3>
              <p>
                <span className="age">30,</span> Cricket
              </p>
            </div>
            <div className="member-card">
              <img src={personImage[1]} alt="" />
              <h3>Alok</h3>
              <p>
                <span className="age">26,</span> Football
              </p>
            </div>
            <div className="member-card">
              <img src={personImage[2]} alt="" />
              <h3>Abhimanyu</h3>
              <p>
                <span className="age">36,</span> Cricket
              </p>
            </div>
            <div className="member-card">
              <img src={personImage[3]} alt="" />
              <h3>Jyotika</h3>
              <p>
                <span className="age">24,</span> Hockey
              </p>
            </div>
            <div className="member-card">
              <img src={personImage[4]} alt="" />
              <h3>Renuka</h3>
              <p>
                <span className="age">25,</span> Baseball
              </p>
            </div>
          </section>
        </section>

        <section className="events">
          <h2>Sports Events</h2>
          <div className="container">
            <SportsEvents></SportsEvents>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
