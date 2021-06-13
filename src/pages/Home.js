import React from 'react';
import './Styles.css';

function Home() {

  return (
    <main>

      <div className="main-cover">
        <div className="cover-image">
          <img src="/home/cover.jpg" alt="Cover"/>
        </div>

        <div className="main-cover-content">
          <div className="cover-content">
            <div className="profile-picture">
              <img src="/home/juan_quiroz.png" alt="Dr. Juan Quiroz"/>
            </div>
          </div>

          <div className="cover-description">
            <div className="profile-title">
              <p>Dr. Juan Eduardo Quiroz</p>
            </div>
            <div className="profile-subtitle">
              <p>MÉDICO CIRUJANO</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="main-content">

        <div className="main-info-card">

          <div className="info-card"> </div>

          <div className="info-card">

            <div className="info-card-body-1">

              <div className="social-element">
                <a href="tel:915241745" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="social-image">
                    <img src="/social/phone.png" alt="Llamar"/>
                  </div>
                  <div className="social-text">
                    <p>Llamar</p>
                  </div>
                </a>
              </div>

              <div className="social-element">
                <a href="https://api.whatsapp.com/send?phone=+51%20915241745&text=&source=&data=&app_absent=" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="social-image">
                    <img src="/social/whatsapp.png" alt="Whatsapp"/>
                  </div>
                  <div className="social-text">
                    <p>Whatsapp</p>
                  </div>
                </a>
              </div>

              <div className="social-element">
                <a href="https://goo.gl/maps/99sX3bJUrQVbiSGL8" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="social-image">
                    <img src="/social/map.png" alt="Ubicación"/>
                  </div>
                  <div className="social-text">
                    <p>Ubicación</p>
                  </div>
                </a>
              </div>

            </div>

            <div className="info-card-body-2">

              <div className="social-element">
                <a href="https://www.facebook.com/CMedFam" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="social-image">
                    <img src="/social/facebook.png" alt="Facebook"/>
                  </div>
                  <div className="social-text">
                    <p>Facebook</p>
                  </div>
                </a>
              </div>

              <div className="social-element">
                <a href="https://www.instagram.com/consultoriomedicofamiliar_/" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="social-image">
                    <img src="/social/instagram.png" alt="Instagram"/>
                  </div>
                  <div className="social-text">
                    <p>Instagram</p>
                  </div>
                </a>
              </div>

              <div className="social-element">
                <div className="social-image">
                  <img src="/social/gmail.png" alt="Correo"/>
                </div>
                <div className="social-text">
                  <p>Correo</p>
                </div>
              </div>

            </div>

          </div>
          
          <div className="info-card">
            <div className="info-card-title">

              <div className="card">
                <div className="card-title">
                  <h3>FORMACIÓN ACADÉMICA</h3>
                </div>
                <div className="card-content">
                  <p>Médico egresado de la Universidad Nacional de Trujillo y formado en el Hospital MINSA Chepén.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-title">
                  <h3>EXPERIENCIA LABORAL</h3>
                </div>
                <div className="card-content">
                  <h4>Hospital MINSA Chepén</h4>
                  <p>Médico en el área de Tuberculosis.</p>
                  <h4>Consultorio Médico Familiar</h4>
                  <p>Médico Cirujano.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-title"></div>
                  <h3>CONSULTORIO MÉDICO FAMILIAR</h3>
                  <h4>Teléfono:</h4>
                  <p>915241745</p>

                  <h4>Dirección:</h4>
                  <p>Cajamarca 213, Chepén 13871</p>

                  <h4>Horario de Atención:</h4>
                  <p>3:00 pm a 07:00 pm</p>
                <div className="card-content"></div>
              </div>

            </div>
          </div>

          <div className="info-card"> </div>

        </div>

      </div>
    </main>
  );
}

export default Home;
