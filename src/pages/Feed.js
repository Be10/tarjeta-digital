import React from 'react';
import './feed-styles.css';

function Feed2() {
    
    return (
      <main>

        <div id="container" className="navbar">
            <div id="left" className="navbar-button">
                <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                <div className="return-button">
                    <img src="/feed/return.png" alt="Return"/>
                </div>
                </a>
            </div>
            <div id="center" className="navbar-title">
                <p style={{ fontSize: 22 }}>Dr. Juan Eduardo Quiroz</p>
                <p style={{ fontSize: 16 }}>Médico Cirujano</p>
            </div>
        </div>

        <div className="main-content">

        <div class="slider">
            
            <div className="slider-numbers">
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>
                <a href="#slide-5">6</a>
                <a href="#slide-5">7</a>
                <a href="#slide-5">8</a>
                <a href="#slide-5">9</a>
                <a href="#slide-5">10</a>
                <a href="#slide-5">11</a>
                <a href="#slide-5">12</a>
            </div>

            <div class="slides">

                    <div className="slide" id="slide-1">
                        <div className="fb-post">
                            <img src="/feed/posts/post1.jpg" alt=""/>

                            <div className="post-text">
                                <p>👹 𝗘𝗟 𝗛𝗢𝗡𝗚𝗢 𝗡𝗘𝗚𝗥𝗢 𝗗𝗘𝗟 𝗖𝗢𝗩𝗜𝗗-𝟭𝟵 ☠️</p>
                                <p>☣️ El famoso 𝙝𝙤𝙣𝙜𝙤 𝙣𝙚𝙜𝙧𝙤 hace alusión a una enfermedad llamada "mucormicosis", que es una infección 𝘰𝘱𝘰𝘳𝘵𝘶𝘯𝘪𝘴𝘵𝘢. Las infecciones oportunistas afectan a las personas que tienen inmunidad disminuida.</p> 
                                <p>¿Dónde se encuentran estos hongos?</p>
                                <p>🍄 En el suelo, plantas, estiércol de animales, y frutas y verduras en descomposición.</p>
                                <p>👃 También podría estar en el aire o incluso en la nariz y mucosas de personas sanas.</p>
                                <p>Qué tan frecuente es esta infección?</p>
                            </div>

                            <div className="post-btn">
                                <div className="btn-content">
                                    <h3>Leer Más</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="slide" id="slide-2">
                        <div className="fb-post">
                            <img src="/feed/posts/post2.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="slide" id="slide-3">
                        <div className="fb-post">
                            <img src="/feed/posts/post3.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="slide" id="slide-4">
                    </div>

                    <div className="slide" id="slide-5">
                    </div>

                    <div className="slide" id="slide-6">
                    </div>

                    <div className="slide" id="slide-7">
                    </div>

                    <div className="slide" id="slide-8">
                    </div>

                    <div className="slide" id="slide-9">
                    </div>

                    <div className="slide" id="slide-10">
                    </div>

                    <div className="slide" id="slide-11">
                    </div>

                    <div className="slide" id="slide-12">
                    </div>

            </div>
        </div>
        </div>
      </main>
    );
}

export default Feed2;