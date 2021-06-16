import React, {useState, useEffect} from 'react';
import './home-styles.css';
import BarLoader from "react-spinners/BarLoader";

function Home() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []) 

  return (
    <div className="Home">
      {
        loading ?

        <BarLoader
        size={10}
        color={"#76D5CB"}
        loading={loading}
        />

        :

        <main>

          <div className="main-cover">
            <div className="cover-image">
              <img src="/home/cover.jpg" alt="Cover"/>
            </div>

            <div className="main-cover-content">
              <div className="cover-content">
                <div className="profile-picture">
                  <a href="https://www.facebook.com/CMedFam" target="_blank" rel="noreferrer">
                    <img src="/home/juan_quiroz.png" alt="Dr. Juan Quiroz"/>
                  </a>
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

              <div className="info-card"></div>

              <div className="info-card-1">

                <div className="info-card-body-left-1">

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
                    <a href="https://api.whatsapp.com/send?phone=+51%20915241745&text=&source=&data=&app_absent=" style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
                      <div className="social-image">
                        <img src="/social/whatsapp.png" alt="Whatsapp"/>
                      </div>
                      <div className="social-text">
                        <p>Whatsapp</p>
                      </div>
                    </a>
                  </div>

                  <div className="social-element">
                    <a href="https://goo.gl/maps/99sX3bJUrQVbiSGL8" style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
                      <div className="social-image">
                        <img src="/social/map.png" alt="Ubicación"/>
                      </div>
                      <div className="social-text">
                        <p>Ubicación</p>
                      </div>
                    </a>
                  </div>

                </div>

                <div className="info-card-body-left-2">

                  <div className="social-element">
                    <a href="https://www.facebook.com/CMedFam" style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
                      <div className="social-image">
                        <img src="/social/facebook.png" alt="Facebook"/>
                      </div>
                      <div className="social-text">
                        <p>Facebook</p>
                      </div>
                    </a>
                  </div>

                  <div className="social-element">
                    <a href="https://www.instagram.com/consultoriomedicofamiliar_/" style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noreferrer">
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

                <div className="info-card-body-left-feed">
                  <a href="/Feed" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="feed-card">
                      <p>Publicaciones Recientes</p>
                    </div>
                  </a>
                </div>

              </div>
              
              <div className="info-card-2">
                <div className="info-card-body-middleright">
                  
                  <div className="card">
                    <div className="card-title">
                      <h3><b> FORMACIÓN ACADÉMICA </b></h3>
                    </div>
                    <div className="card-content">
                      <p>Pregrado en Universidad Nacional de Trujillo</p>
                      <p>Diplomado en Auditoría Médica</p>
                      <p>Certificados en Pediatría, Radiología, Infectología, Electrocardiografía y Emergencias Hospitalarias</p>
                      <p>Diplomado en Curso en Manejo Racional de <b>COVID-19</b></p>
                      <p>Investigador en <b>COVID-19</b></p>
                      <p>Autor principal de la Guía de Recomendaciones de Manejo de <b>COVID-19</b> en pacientes ambulatorios y hospitalizados (2021)</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="info-card-2">
                <div className="info-card-body-middleright">

                  <div className="card">
                    <div className="card-title">
                      <h3><b> EXPERIENCIA LABORAL </b></h3>
                    </div>
                    <div className="card-content">
                      <h4>Hospital MINSA Chepén</h4>
                      <h4>Consultorio Médico Familiar</h4>
                      <h4>Médico Asistente</h4>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-title">
                      <h3><b> CONSULTORIO MÉDICO FAMILIAR </b></h3>
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

              <div className="info-card"></div>

            </div>
          </div>

          <div className="map-content">
            <div className="map">
              <img src="/home/Map.png" alt="Mapa"/>
            </div>
          </div>

        </main>
      }
    </div>
  );
}

export default Home;
