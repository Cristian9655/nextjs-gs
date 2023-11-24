'use client'
const login = JSON.parse(sessionStorage.getItem("login"));
export default function Saude(){

    if (!login) window.location.pathname = "/login";

    return(
        <main className="saude">
            <article className="saude__principal">
                <section className="saude__principal__section">
                    <h2 className="saude__principal__section__h2">A Importância Fundamental da Saúde do Sono para o Bem-Estar</h2>
                    <p className="saude__principal__section__p">Vivemos em uma era movimentada, onde a vida cotidiana muitas vezes nos empurra para além de nossos limites, deixando-nos com pouco tempo para descanso adequado. Este artigo explora a vital importância da saúde do sono para o nosso bem-estar físico e mental, oferecendo insights valiosos sobre como melhorar a qualidade do sono.</p>
                </section>
                <img src="https://static.wixstatic.com/media/c01813_70ad7a39c4e64498a279e30d1b1c64da~mv2.jpeg/v1/fill/w_740,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c01813_70ad7a39c4e64498a279e30d1b1c64da~mv2.jpeg" alt=""  className="saude__principal__img"/>
            </article>
            <article className="saude__segundario">
                <h3 className="saude__segundario__h3">Consequências de uma Má Saúde do Sono</h3>
                <p className="saude__segundario__p">Dormir mal vai além de simplesmente se sentir cansado no dia seguinte. Pesquisas indicam que a privação do sono está diretamente ligada a uma série de problemas de saúde, desde comprometimento cognitivo até o aumento do risco de doenças crônicas.</p>
                <section className="saude__segundario__section">
                    <div>
                        <h4>Impacto no Desempenho Cognitivo</h4>
                        <p>A qualidade do sono está intrinsecamente ligada ao desempenho cognitivo. Noites mal dormidas podem resultar em dificuldades de concentração, lapsos de memória e redução da capacidade de tomar decisões informadas.</p>
                    </div>
                    <div>
                        <h4>Relação com Doenças Crônicas</h4>
                        <p>Estudos mostram que a falta crônica de sono está associada a condições de saúde graves, como doenças cardíacas, diabetes e obesidade. Compreender essa conexão é crucial para promover mudanças de hábitos que podem impactar positivamente a saúde geral.</p>
                    </div>
                </section>
            </article>
            <article className="saude__segundario">
                <h3 className="saude__segundario__h3">Estratégias para Melhorar a Saúde do Sono</h3>
                <p className="saude__segundario__p">Focar na qualidade do sono não é apenas uma recomendação, mas uma necessidade para uma vida saudável. Aqui estão algumas estratégias eficazes para melhorar a saúde do sono:</p>
                <section className="saude__segundario__section">
                    <div>
                        <h4>Estabeleça uma Rotina de Sono Consistente</h4>
                        <p>Manter um horário regular para dormir e acordar ajuda a regular o relógio biológico, melhorando a consistência do sono</p>
                    </div>
                    <div>
                        <h4>Crie um Ambiente Propício para o Sono</h4>
                        <p>Um quarto escuro, silencioso e fresco é fundamental para criar as condições ideais para uma boa noite de sono. Investir em colchões e travesseiros de qualidade também desempenha um papel crucial.</p>
                    </div>
                    <div>
                        <h4>Evite Estímulos Eletrônicos Antes de Dormir</h4>
                        <p>A luz azul emitida por dispositivos eletrônicos pode interferir na produção de melatonina, o hormônio do sono. Evitar telas pelo menos uma hora antes de dormir contribui para uma transição mais suave para o sono.</p>
                    </div>
                </section>
            </article>
        </main>
    )

}