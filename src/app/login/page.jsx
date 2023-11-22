"use client"
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Login() {
    const [login, setLogin] = useState({ email: "", pass: "" });

    const handleChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:8080/demo/webapi/users");
            const users = response.data;

            const user = users.find((user) => user.email === login.email && user.senha === login.pass);

            if (user) {
                sessionStorage.setItem("login", JSON.stringify(login));
                window.location = "/historico";
            } else {
                alert("Credenciais inválidas. Por favor, verifique seu email e senha.");
            }
        } catch (error) {
            console.error("Erro ao fazer a requisição à API:", error);
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

                <button type="submit" className="cadastro__form__botao" >Logar</button>

                <Link href={'/cadastrar/0'} className="cadastro__form__link">Não tem cadastro? <br/>Cadastre-se</Link>
            </form>
        </main>
    )
}