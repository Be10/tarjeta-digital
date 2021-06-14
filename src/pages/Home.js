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

          <div className="info-card-1"></div>

          <div className="info-card-1">

            <div className="info-card-body-left">

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

            <div className="info-card-body-left">

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
          
          <div className="info-card-2">
            <div className="info-card-body-middle">
              
              <div className="card">
                <div className="card-title">
                  <h3>FORMACIÓN ACADÉMICA</h3>
                </div>
                <div className="card-content">
                  <p>Pregrado en Universidad Nacional de Trujillo</p>
                  <p>Diplomado en Auditoría Médica</p>
                  <p>Certificados en Pediatría, Radiología, Infectología, Electrocardiografía y Emergencias Hospitalarias</p>
                  <p>Diplomado en Curso en Manejo Racional de COVID-19</p>
                  <p>Investigador en COVID-19</p>
                  <p>Autor principal de la Guía de Recomendaciones de Manejo de COVID-19 en pacientes ambulatorios y hospitalizados (2021)</p>
                </div>
              </div>

            </div>
          </div>

          <div className="info-card-2">
            <div className="info-card-body-right">

              <div className="card">
                <div className="card-title">
                  <h3>EXPERIENCIA LABORAL</h3>
                </div>
                <div className="card-content">
                  <h4>Hospital MINSA Chepén</h4>
                  <h4>Consultorio Médico Familiar</h4>
                  <h4>Médico Asistente</h4>
                </div>
              </div>

              <div className="card">
                <div className="card-title">
                  <h3>CONSULTORIO MÉDICO FAMILIAR</h3>
                </div>
                <div className="card-content">
                  <h4>Teléfono:</h4>
                  <p>915241745</p>

                  <h4>Dirección:</h4>
                  <p>Calle Cajamarca 213</p>

                  <h4>Horario de Atención:</h4>
                  <p>3:00 pm a 05:30 pm</p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="info-card-1"></div>

        </div>

        <div className="map-card">
          <div className="map-content">
          </div>
        </div>

      </div>
    </main>
  );
}

export default Home;
