import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/components/Login.scss'
 
const Register: React.FC = () => (
    <>
        <section className="login">
            <section className="login__container">
                <h2 className="login__container--title">Registrate</h2>
                <form className="login__container--form">
                    <input type="text" className="login__container--input" placeholder="Nombre" />
                    <input type="text" className="login__container--input" placeholder="Correo"/>
                    <input type="password" className="login__container--input" placeholder="Contraseña" />
                    <button className="login__container--button">Registrarme</button>
                </form>
                <p className="login__container--login"><a href="">Iniciar sesion</a></p>
            </section>
        </section>
    </>
)

export default Register