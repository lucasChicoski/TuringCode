import React, { useEffect } from 'react';

import '../CSS/Cadastro.css'

import logo from './../images/newLogo2Borda.png'
import logoName from './../images/logoNameBorda.png'

function Cadastro() {
    return (
        <div className="mainframe">
            <div className="cabecalho">
                <div>
                    <img className="logo" src={logo} />
                </div>
                <div>
                    <img className="nome" src={logoName} />
                </div>
            </div>

            <div className="formCadastro">
                <div className="child">
                    <p>Nome</p>
                    <input />
                    <p>Sobrenome</p>
                    <input />
                    <p>Senha</p>
                    <input />
                    <p>Interesse de trabalho</p>
                    <input />
                    <button type="button">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;