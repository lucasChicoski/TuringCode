import React from 'react';
import logoPrincipal from '../images/newLogo2Borda.png';
import nomeLogo from '../images/logoNameBorda.png';
import gifRubiksCube from '../images/rubiks_cube.gif';
import teamWorking from '../images/teamWorkin.png';
import GroupShare from '../images/teamGroupShare.png';


import './../CSS/global.css'
import './../CSS/head.css'
import './../CSS/main.css'
import './../CSS/footer.css'



function Arq() {

    return (
        <div id="App">
            <header>

                <div className="logoGeral">
                    <a href="#">
                    <img alt="teste" className='logo-principal' src={logoPrincipal} />
                    <img alt="teste" className='nome-principal' src={nomeLogo} />
                    </a>
                </div>

                <div className='Login'>
                    <div >
                        <input type="text" className='emaiL' title="teste" />
                        <input type="text" className='senhA' />
                    </div>

                    <div className="inputButton">
                        <button className="botaoEntrar" type="submit">Entrar</button>
                        <button className="botaoCadastrar" type="submit">Cadastrar</button>
                    </div>
                </div>

            </header>

            <main>
                <div className="inf1">

                    <div className="gif">
                        <img alt="teste" src={gifRubiksCube} />
                        <p>
                            Use seus conhecimentos para resolver problemas !
                            </p>
                    </div>
                </div>


                <div className="inf2">
                    <img alt="teste" className="teamWorking" src={teamWorking} />
                    <p>" Construa projetos para melhorar o mundo utilizando a tecnologia. "</p>
                </div>

                <div className="inf3">
                    <img src={GroupShare} />
                    <p>" Crie grupos, compartilhe ideias e ajude projetos que possa muda a vida das pessoas"</p>

                </div>

            </main>

            <footer>
                <div className="GlobalFoot">
                    <div className="esquerda">
                        <li>
                            <ul><a href="#">Quem Somos</a></ul>
                            <ul><a href="#">Proposta da Turing Code</a></ul>
                            <ul><a href="#">Ajude a Implementar</a></ul>

                        </li>
                    </div>

                    <div className="centro">
                        <li>
                            <ul><a href="#">Desenvolvedores</a></ul>
                            <ul><a href="#">Tecnologias envolvidas</a></ul>
                            <ul><a href="#">Entre em contato</a></ul>
                          
                        </li>
                    </div>

                    <div className="direita">
                        <li>
                            <ul><a href="#">Apoie!</a></ul>
                            <ul><a href="#">Seja uma empresa parceira</a></ul>
                            <ul><a href="#">Box Tools preview</a></ul>
                        </li>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Arq;