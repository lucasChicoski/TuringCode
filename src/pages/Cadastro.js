import React, { useEffect, useState } from 'react';

import '../CSS/Cadastro.css'

import logo from './../images/newLogo2Borda.png'
import logoName from './../images/logoNameBorda.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cadastro(e) {

    const [nome, SetNome] = React.useState('');
    const [sobrenome, SetSobrenome] = React.useState('');
    const [email, SetEmail] = React.useState('');
    const [senha, SetSenha] = React.useState('');
    const [interesse, SetInteresse] = React.useState('');

    function Cadastrar() {

        axios.post('http://localhost:3333/cadastro', {

            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            interesse: interesse

        }).then(answerservice => {
            console.log(answerservice)

            if (answerservice.data == '1') {
                console.log('Cadastro efetivado')
                alert('Cadastro efetivado')
                window.location.href = 'http://localhost:3000/' //redireciona para página principal

            }

        }).catch(erro => {
            console.log(erro)
        })

    }

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
                        <input
                            type="text"
                            value={nome}
                            onChange={e => SetNome(e.target.value)}
                        />
                        <p>Sobrenome</p>
                        <input
                            type="text"
                            value={sobrenome}
                            onChange={e => SetSobrenome(e.target.value)}
                        />
                        <p>Email</p>
                        <input
                            type="text"
                            value={email}
                            onChange={e => SetEmail(e.target.value)}
                        />
                        <p>Senha</p>
                        <input
                            type="text"
                            value={senha}
                            onChange={e => SetSenha(e.target.value)}
                        />
                        <p>Interesse de trabalho</p>
                        <input
                            type="text"
                            value={interesse}
                            onChange={e => SetInteresse(e.target.value)}
                        />

                        <button onClick={Cadastrar} type="button">Cadastrar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;