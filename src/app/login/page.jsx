"use client"
import { useState } from "react";
import axios from "axios";


export default function Login() {
    const [login, setLogin] = useState({ email: "", pass: "" });

    const handleChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:8080/demo/webapi/users");
            const users = response.data;

            // Verificar se há um usuário com o email e senha fornecidos
            const user = users.find((user) => user.email === login.email && user.senha === login.pass);

            if (user) {
                // Usuário autenticado
                sessionStorage.setItem("login", JSON.stringify(login));
                window.location = "/";
            } else {
                // Exibir alerta em caso de credenciais inválidas
                alert("Credenciais inválidas. Por favor, verifique seu email e senha.");
            }
        } catch (error) {
            console.error("Erro ao fazer a requisição à API:", error);
            // Exibir alerta em caso de erro na requisição
            alert("Erro ao processar a requisição. Tente novamente mais tarde.");
        }
    }

    return (
        <main className="cadastro">
            <form className="cadastro__form" onSubmit={handleSubmit}>
                <h2 className="cadastro__form__titulo">Faça seu Login</h2>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={login.email} onChange={handleChange} />{" "}

                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="pass" value={login.pass} onChange={handleChange} />{" "}

                <button type="submit" className="cadastro__form__botao" >Cadastrar</button>
            </form>
        </main>
    )
}