import React from 'react';
import './form-styles.css';

function Form() {
    return (
    
    <div class="container">
        <div className="form">
            <form action="https://formspree.io/" id="test-form" method="POST">

                <div class="form-group">
                <label for="firstName">Nombre</label>
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
    </div>

    );
}

export default Form;