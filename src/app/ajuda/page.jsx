'use client'
import React, { useState } from 'react';
export default function Ajuda() {

    

    const [accordionIndex, setAccordionIndex] = useState(null);

    const toggleAccordion = (index) => {
        setAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqItems = [
        {
            question: 'O que é este projeto?',
            answer:
                'Este projeto visa promover a conscientização e o cuidado com a saúde do sono. Oferecemos ferramentas para monitorar e melhorar seus hábitos de sono.',
        },
        {
            question: 'Como faço para começar?',
            answer:
                'Primeiro, registre-se em nossa plataforma. Após o login, você poderá registrar informações sobre seu sono, hábitos saudáveis e dados de saúde.',
        },
        {
            question: 'Posso editar ou excluir meus registros?',
            answer:
                'Sim, na página do seu perfil, você encontrará opções para editar ou excluir seus registros de sono, hábitos e saúde.',
        },
        {
            question: 'Qual a importância dos hábitos saudáveis no sono?',
            answer:
                'Hábitos saudáveis, como atividade física e uma rotina consistente, contribuem para uma melhor qualidade de sono. Registre essas informações na página "Hábitos Saudáveis".',
        },
        {
            question: 'Como as análises são geradas?',
            answer:
                'As análises são geradas com base nos dados que você registra. Na página "Análise do Sono" e "Análise Geral da Saúde", você encontrará insights sobre padrões e possíveis melhorias.',
        },

        // Adicione mais itens conforme necessário
    ];

    return (
        <main className="ajuda">
            <h2>Perguntas Frequentes</h2>
            <p>Entendemos que você possa ter dúvidas sobre nossos serviços médicos. Aqui estão algumas perguntas e respostas comuns para ajudá-lo:</p>

            
            {faqItems.map((item, index) => (
                <div key={index} className={`faqItem ${accordionIndex === index ? 'active' : ''}`}>
                    <div className="faqTitle" onClick={() => toggleAccordion(index)}>
                        {item.question}
                    </div>
                    {accordionIndex === index && (
                        <div className="faqAnswer">{item.answer}</div>
                    )}
                </div>
            ))}
        </main>
    );
}
