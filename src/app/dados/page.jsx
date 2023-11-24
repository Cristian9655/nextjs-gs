"use client"
import { useEffect, useState } from "react"
import Link from "next/link";

const login = JSON.parse(sessionStorage.getItem("login"));

export default function Dados() {

    if (!login) window.location.pathname = "/login";

    const handleLogout = () => {
        sessionStorage.removeItem("login");
        window.location.pathname = "/login";
    };

    const [Users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/users')
            .then(resp => resp.json())
            .then(resp => setUsers(resp))
            .catch(error => console.error(error))
    }, [])

    const [Sonos, setSonos] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/sonos')
            .then(resp => resp.json())
            .then(resp => setSonos(resp))
            .catch(error => console.error(error))
    }, [])

    const [Saude, setSaude] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/saude')
            .then(resp => resp.json())
            .then(resp => setSaude(resp))
            .catch(error => console.error(error))
    }, [])

    const [Habitos, setHabitos] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/habitos')
            .then(resp => resp.json())
            .then(resp => setHabitos(resp))
            .catch(error => console.error(error))
    }, [])

    const [Analises, setAnalises] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/analises')
            .then(resp => resp.json())
            .then(resp => setAnalises(resp))
            .catch(error => console.error(error))
    }, [])

    const [error, setError] = useState(null);

    const handDelete = (id, endpoint) => {
        fetch(`http://localhost:8080/demo/webapi/${endpoint}/${id}`, {
            method: "delete",
        })
            .then((resp) => {
                if (resp.ok) {
                    setError(null);
                    window.location = "/dados";
                } else {
                    setError("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
                    alert("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
                alert("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
            });
    };

    return (
        <main className="historico">
            <h1 className="historico__titulo">Dados Registrados em nosso Sistema</h1>
            <p>Seja bem-vindo <b>{login ? login.nome : ""}</b>. Aqui você pode ver os dados coletados dos nossos usuarios.</p>
            <h2 className="historico_tabelas">Dados de Usuarios Registrados</h2>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th></th>
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
                    {Users.map(use => (
                        <tr key={use.id} className="tr">
                            <td className="excluir">
                                <Link href={`/cadastrar/${use.idUser}`}>Editar</Link>
                                <button button onClick={handDelete.bind(this,use.idUser, 'users')}>Excluir</button>
                            </td>
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
            <h2 className="historico_tabelas">Dados de Sono Registrados</h2>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Identificação do Usuario</th>
                        <th>Duração do sono</th>
                        <th>Qualidade do Sono</th>
                    </tr>
                </thead>
                <tbody>
                    {Sonos.map(son => (
                        <tr key={son.id} className="tr">
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,son.idSono, 'sonos')}>Excluir</button>
                            </td>
                            <td className="td">{son.idUser}</td>
                            <td className="td">Horas: {son.sleepDuration} </td>
                            <td className="td">{son.sleepQuality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="historico_tabelas">Dados de Saúde Registrados</h2>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Identificação do Usuario</th>
                        <th>Estresse</th>
                        <th>BMI</th>
                        <th>Pressão Arterial</th>
                        <th>Frequência Cardíaca</th>
                    </tr>
                </thead>
                <tbody>
                    {Saude.map(sau => (
                        <tr key={sau.id} className="tr">
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,sau.idSaude, 'saude')}>Excluir</button>
                            </td>
                            <td className="td">{sau.idUser}</td>
                            <td className="td">{sau.stress}</td>
                            <td className="td">{sau.bmi}</td>
                            <td className="td">{sau.bloodPressure}</td>
                            <td className="td">{sau.heartRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="historico_tabelas">Dados de Habitos Registrados</h2>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Identificação do Usuario</th>
                        <th>Atividade Física</th>
                        <th>Passos Diários</th>
                    </tr>
                </thead>
                <tbody>
                    {Habitos.map(hab => (
                        <tr key={hab.id} className="tr">
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,hab.idHabitos, 'habitos')}>Excluir</button>
                            </td>
                            <td className="td">{hab.idUser}</td>
                            <td className="td">{hab.physicalActivity}</td>
                            <td className="td">{hab.dailySteps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="historico_tabelas">Dados de Analise Registrados</h2>
            <table className="historico__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Identificação do Usuario</th>
                        <th>Distúrbio do Sono</th>
                        <th>Diagnostico</th>
                    </tr>
                </thead>
                <tbody>
                    {Analises.map(ana => (
                        <tr key={ana.id} className="tr">
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,ana.idAnalise, 'analises')}>Excluir</button>
                            </td>
                            <td className="td">{ana.idUser}</td>
                            <td className="td">{ana.sleepDisorder}</td>
                            <td className="td">{ana.diagnostic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="historico__deslogar" onClick={handleLogout}>Realizar Logout</button>
        </main>
    );
}


