import React, { useEffect } from 'react';
import axios from 'axios'
import logoPrincipal from '../images/newLogo2Borda.png';
import nomeLogo from '../images/logoNameBorda.png';
import gifRubiksCube from '../images/rubiks_cube.gif';
import teamWorking from '../images/teamWorkin.png';
import GroupShare from '../images/teamGroupShare.png';


import './../CSS/global.css'
import './../CSS/head.css'
import './../CSS/main.css'
import './../CSS/footer.css'



function Arq({ onSubmit }) {

    const [senha, setSenha] = React.useState('');
    const [email, setEmail] = React.useState('');


    useEffect(() => {

    }, []) //OBS. Caso o array estiver vazio, será executado uma vez


    /**
     * 
     * Função que envia todos os parâmetros para a API
     */
    async function handleSubmit(e) {

       
        //alert(senha + "/" + email )

        // requisição axios
        axios.post('http://localhost:3333/login', {

            email: email,
            senha: senha

        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });

    }


    return (
        <div id="App">
            <header>

                <div className="logoGeral">
                    <a href='!#'>
                        <img alt="teste" className='logo-principal' src={logoPrincipal} />
                        <img alt="teste" className='nome-principal' src={nomeLogo} />
                    </a>
                </div>

                <div className='Login'>

                    <div>
                        <input
                            type="text"
                            className='emaiL'
                            title="teste"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                        <input
                            type="text"
                            className='senhA'
                            value={senha}
                            onChange={e => setSenha(e.target.value)} />
                    </div>


                    <div className="inputButton">
                        <button className="botaoEntrar" type="button" onClick={handleSubmit}>Entrar</button> /**Forma de enviar infomações JSX6 */
                        <a href="#">  <button className="botaoCadastrar" type="button">Cadastrar</button> </a>
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
                    <img alt="teste" src={GroupShare} />
                    <p>" Crie grupos, compartilhe ideias e ajude projetos que possa muda a vida das pessoas"</p>

                </div>

            </main>

            <footer>
                <div className="GlobalFoot">
                    <div className="esquerda">
                        <li>
                            <ul><a href='!#'>Quem Somos</a></ul>
                            <ul><a href='!#'>Proposta da Turing Code</a></ul>
                            <ul><a href='!#'>Ajude a Implementar</a></ul>

                        </li>
                    </div>

                    <div className="centro">
                        <li>
                            <ul><a href='!#'>Desenvolvedores</a></ul>
                            <ul><a href='!#'>Tecnologias envolvidas</a></ul>
                            <ul><a href='!#'>Entre em contato</a></ul>

                        </li>
                    </div>

                    <div className="direita">
                        <li>
                            <ul><a href='!#'>Apoie!</a></ul>
                            <ul><a href='!#'>Seja uma empresa parceira</a></ul>
                            <ul><a href='!#'>Box Tools preview</a></ul>
                        </li>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Arq;