"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const login = JSON.parse(sessionStorage.getItem("login")) 

export default function Historico(){
    const [user, setUser] = useState('')

    if(!login) window.location = "/login"

    return(
        <main>
            <h1>Historico</h1>
            <p>Seja bem-vindo {login ? login.nome : ""}</p>
            <Link href={'/'}>Voltar</Link>   
        </main>
    )
}