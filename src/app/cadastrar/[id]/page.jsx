"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cadastrar({params}){

    const prodId = params.id == 0 ? '' : params.id
 
    const [novo, setNovo] = useState({
        nome: "",
        senha: "",
        email: "",
        gender: "",
        age: "",
        occupation: ""
    })

    let metodo = "post"

    if(prodId) metodo = "put"

    const handleChange = e=>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e=>{
        e.preventDefault()
        fetch(`http://localhost:8080/demo/webapi/users/${prodId}`,{
            method: metodo,
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(novo)
        })
        .then(window.location = '/login')
        .catch(error=>console.error(resp))
    }

    useEffect(()=>{
        if(prodId){
            fetch(`http://localhost:8080/demo/webapi/users/${prodId}`)
            .then(resp=>resp.json())
            .then(resp=>setNovo(resp))
            .catch(error=>console.error(error))
        }
    },[prodId])

    return(
        <main className="cadastro">
            <form action="" className="cadastro__form" onSubmit={handleSubmit}>

                <h2 className="cadastro__form__titulo">Cadastre-se</h2>
                
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value={novo.nome} onChange={handleChange}/>

                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="senha" value={novo.senha} onChange={handleChange}/>

                <label htmlFor="genero">Genero </label>
                <input type="text" id="genero" name="gender" value={novo.gender} onChange={handleChange}/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={novo.email} onChange={handleChange}/>
                

                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" name="age" value={novo.age} onChange={handleChange}/>
                
                <label htmlFor="ocupacao">Ocupaçao </label>
                <input type="text" id="ocupacao" name="occupation" value={novo.occupation} onChange={handleChange}/>

                <button className="cadastro__form__botao">Cadastrar</button>
                <Link href={'/login'} className="cadastro__form__link">Cancelar Cadastro</Link>
            </form>
        </main>
    )
}