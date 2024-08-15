import React from 'react';
import "./about.css";

function About () {
    return (
        <div className="about-card">
            <img src="./card-photo.jpg" alt="Mi foto" className= "profile-photo"/>
            <h2 className="profile-name">Valeria Barbet Guerrero</h2>
            <p className="profile-info">Soy una mujer apasionada por la resolución de problemas e interés en temas de índole social. Tengo experiencia en servicio al cliente bilingüe, con inglés como seundo idioma en nivel avanzado. Soy cinta azul avanzada en tae kwon do y me gusta aprender y desenvolverme en el área tecnológica. Mi email es: barbetguerrero.v@gmail.com</p>
        </div>
    )

}

export default About;