import React, { useEffect } from 'react';

import '../CSS/Cadastro.css'

import logo from './../images/newLogo2Borda.png'
import logoName from './../images/logoNameBorda.png'
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <div className="tela">
            <div className="mainframe">
                <div className="cabecalho">
                    <div>
                      <Link to="/">  <img className="logo" src={logo} /></Link>
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
                        <button type="button">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;