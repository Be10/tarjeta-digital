import React from 'react';
import './form-styles.css';

window.addEventListener("DOMContentLoaded", function () {
  
    var form = document.getElementById("CMedFam");
    var status = document.getElementById("status");
  
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "¡Mensaje enviado!";
    }
  
    function error() {
      status.classList.add('error');
      status.innerHTML = "Hubo un error...";
    }

    if(form){
        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        })}
  });
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


function Form() {
    return (
    <main>
        <div class="navbar">
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

        <div class="container">
            <div id="content-desktop" className="blank"></div>
            <div className="form">
                <form action="https://formspree.io/f/xgerybrj" id="CMedFam" method="POST">

                    <div class="form-group">
                        <label for="firstName">Nombres</label>
                        <input type="text" id="firstName" name="firstName"/>
                    </div>

                    <div class="form-group">
                        <label for="lastName">Apellidos</label>
                        <input type="text" id="lastName" name="lastName"/>
                    </div>

                    <div class="form-group">
                        <label for="email">Correo</label>
                        <input type="email" id="email" name="Email"/>
                    </div>

                    <div class="form-group">
                        <label for="massage">Mensaje</label>
                        <textarea name="massage" id="massage" rows="10" maxlength="200"></textarea>
                    </div>

                    <button type="submit" id="test-form-submit">Enviar</button>
                </form>
            </div>
            <div id="status"></div>
        </div>
    </main>
    );
}

export default Form;