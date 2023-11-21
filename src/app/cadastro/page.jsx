export default function Cadastro(){
    return(
        <main className="cadastro">
            <form action="" className="cadastro__form">
                <h2 className="cadastro__form__titulo">Cadastre-se</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome"/>

                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha"/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email"/>
                

                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade"/>
                
                <label htmlFor="ocupacao">Ocupaçao </label>
                <input type="text" id="ocupacao"/>

                <div className="cadastro__form__genero">
                    <input type="radio" id="masculino" name="genero" value="Masculino"/>
                    <label htmlFor="masculino">Maculino</label>

                    <input type="radio" id="feminino" name="genero" value="Feminino"/>
                    <label htmlFor="feminino">Feminino</label>
                </div>

                <button className="cadastro__form__botao">Cadastrar</button>
            </form>
        </main>
    )
}