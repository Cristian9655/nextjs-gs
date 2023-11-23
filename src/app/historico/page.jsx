// Importações necessárias
"use client"
import { useEffect, useState } from "react"

const login = JSON.parse(sessionStorage.getItem("login"));

export default function Historico() {

    if (!login) window.location.pathname = "/login";
    
    const handleLogout = () => {
        sessionStorage.removeItem("login");
        window.location.pathname = "/login";
    };
    
    const[Users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/users')
            .then(resp => resp.json())
            .then(resp => setUsers(resp))
            .catch(error => console.error(error))
    }, [])

    const[Sonos, setSonos] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/sonos')
            .then(resp => resp.json())
            .then(resp => setSonos(resp))
            .catch(error => console.error(error))
    }, [])

    const[Saude, setSaude] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/saude')
            .then(resp => resp.json())
            .then(resp => setSaude(resp))
            .catch(error => console.error(error))
    }, [])

    const[Habitos, setHabitos] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/habitos')
            .then(resp => resp.json())
            .then(resp => setHabitos(resp))
            .catch(error => console.error(error))
    }, [])

    const[Analises, setAnalises] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/analises')
            .then(resp => resp.json())
            .then(resp => setAnalises(resp))
            .catch(error => console.error(error))
    }, [])

    return (
        <main className="historico">
            <h1 className="historico__titulo">Historico</h1>
            <p>Seja bem-vindo <b>{login ? login.nome : ""}</b>. Aqui você pode ver os dados coletados dos nossos usuarios.</p>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>senha</th>
                        <th>Email</th>
                        <th>gender</th>
                        <th>age</th>
                        <th>occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map(use=>(
                        <tr key={use.id} className="tr">
                            <td className="td">{use.idUser}</td>
                            <td className="td">{use.nome}</td>
                            <td className="td">{use.senha}</td>
                            <td className="td">{use.email}</td>
                            <td className="td">{use.gender}</td>
                            <td className="td">{use.age}</td>
                            <td className="td">{use.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="historico__table">
                <thead>
                    <tr>
                        <th>Identificação do Usuario</th>
                        <th>Duração do sono</th>
                        <th>Qualidade do Sono</th>
                    </tr>
                </thead>
                <tbody>
                    {Sonos.map(son=>(
                        <tr key={son.id} className="tr">
                            <td className="td">{son.idUser}</td>
                            <td className="td">Horas: {son.sleepDuration} </td>
                            <td className="td">{son.sleepQuality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="historico__table">
                <thead>
                    <tr>
                        <th>Identificação do Usuario</th>
                        <th>Estresse</th>
                        <th>BMI</th>
                        <th>Pressão Arterial</th>
                        <th>Frequência Cardíaca</th>
                    </tr>
                </thead>
                <tbody>
                    {Saude.map(sau=>(
                        <tr key={sau.id} className="tr">
                            <td className="td">{sau.idUser}</td>
                            <td className="td">{sau.stress}</td>
                            <td className="td">{sau.bmi}</td>
                            <td className="td">{sau.bloodPressure}</td>
                            <td className="td">{sau.heartRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="historico__table">
                <thead>
                    <tr>
                        <th>Identificação do Usuario</th>
                        <th>Atividade Física</th>
                        <th>Passos Diários</th>
                    </tr>
                </thead>
                <tbody>
                    {Habitos.map(hab=>(
                        <tr key={hab.id} className="tr">
                            <td className="td">{hab.idUser}</td>
                            <td className="td">{hab.physicalActivity}</td>
                            <td className="td">{hab.dailySteps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="historico__table">
                <thead>
                    <tr>
                        <th>Identificação do Usuario</th>
                        <th>Distúrbio do Sono</th>
                        <th>Observacao</th>
                    </tr>
                </thead>
                <tbody>
                    {Analises.map(ana=>(
                        <tr key={ana.id} className="tr">
                            <td className="td">{ana.idUser}</td>
                            <td className="td">{ana.sleepDisorder}</td>
                            <td className="td">{ana.observacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="historico__deslogar" onClick={handleLogout}>Sair</button>
        </main>
    );
}


