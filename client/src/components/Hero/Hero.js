import React from 'react';
import './stylesHero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <section className="hero container-fluid">
        <div className="row min-vh-100 align-items-center">
            <div className="col-md-8 ml-md-5 text-md-left text-center content">
                <h1>Women-In-Tech </h1>
                <h2>Get all yours questions answered here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus velit quaerat, minus atque eligendi voluptates quidem tempore, 
                    quibusdam consequatur sequi veniam provident quo praesentium officia eaque 
                    quam incidunt facilis? Ullam.
                </p>
            </div>
        </div>

        <div className="img-container">
        </div>

    </section>
  );
}

export default Hero;
