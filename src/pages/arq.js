import React from 'react'
import logoPrincipal from '../images/newLogo2Borda.png'
import nomeLogo from '../images/logoNameBorda.png'
import gifRubiksCube from '../images/rubiks_cube.gif'
import teamWorking from '../images/teamWorkin.png'


import './global.css'
import './head.css'
import './main.css'



function Arq() {
    
    return (
        <div id="App">
            <header>

                <div>
                    <img className='logo-principal' src={logoPrincipal} />
                </div>

                <div>
                    <img className='nome-principal' src={nomeLogo} />
                </div>

                <div className='Login'>
                    <div className="input">
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
                        <img src={gifRubiksCube} />
                        <p>
                            Use seus conhecimentos para resolver problemas !
                        </p>
                    </div>
                </div>


            <div className="inf2">
                    <img className="teamWorking" src={teamWorking}/>
                    <p>" Construa projetos para melhorar o mundo utilizando a tecnologia. "</p>

            </div>


            </main>

            <footer>
                <h1>Aqui é o rodapé</h1>
                

            </footer>

        </div>
    )
}

export default Arq;