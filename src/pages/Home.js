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
          <div className="profile-picture">
            <img src="/home/juan_quiroz.png" alt="Dr. Juan Quiroz"/>
          </div>
        </div>

        <div className="profile-title">
          <p>Dr. Juan Eduardo Quiroz</p>
        </div>
        <div className="profile-subtitle">
          <p>MÉDICO CIRUJANO</p>
        </div>
        
      </div>

      <div className="main-content">

        <div className="main-info-card">

          <div className="info-card">

            <div className="info-card-body">

              <div className="social-element">
                <a href="tel:915241745">
                  <div className="social-image">
                    <img src="/social/phone.png" alt="Llamar"/>
                  </div>
                  <div className="social-text">
                    <p>Llamar</p>
                  </div>
                </a>
              </div>

              <div className="social-element">
                <div className="social-image">
                  <img src="/social/whatsapp.png" alt="Whatsapp"/>
                </div>
                <div className="social-text">
                  <p>Whatsapp</p>
                </div>
              </div>

              <div className="social-element">
                <div className="social-image">
                  <img src="/social/map.png" alt="Ubicación"/>
                </div>
                <div className="social-text">
                  <p>Ubicación</p>
                </div>
              </div>

            </div>

            <div className="info-card-body">

              <div className="social-element">
                <div className="social-image">
                  <img src="/social/facebook.png" alt="Facebook"/>
                </div>
                <div className="social-text">
                  <p>Facebook</p>
                </div>
              </div>

              <div className="social-element">
                <div className="social-image">
                  <img src="/social/instagram.png" alt="Instagram"/>
                </div>
                <div className="social-text">
                  <p>Instagram</p>
                </div>
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
              <h3>Info Card 2</h3>
            </div>
            <div className="info-card-body">

            </div>
          </div>

        </div>

        <div className="video-card">
            <div className="video-card-title">
              <h3>Info Card 4</h3>
            </div>
            <div className="video-card-body">
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ad, molestias, officia eligendi delectus saepe temporibus nihil at distinctio vero a pariatur quia, 
                unde eveniet aspernatur expedita consequuntur voluptatum reiciendis ex?</h2>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ad, molestias, officia eligendi delectus saepe temporibus nihil at distinctio vero a pariatur quia, 
                unde eveniet aspernatur expedita consequuntur voluptatum reiciendis ex?</h2>
            </div>
        </div>

      </div>
    </main>
  );
}

export default Home;
