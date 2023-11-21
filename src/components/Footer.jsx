'use client'
import { usePathname } from 'next/navigation'

export default function Footer(){

    const pathname = usePathname();

    const seCadastrarLogin = pathname === '/' || pathname === '/historico';

    return seCadastrarLogin ? (
        <footer>
            <section>
                <p>Diego Seiti Ogita Iacabo</p>
                <p>João Lucas Marques Costa</p>
                <p>Alejandro Rabelo</p>
                <p>Cristian Alvaro Condori Paucara</p>
                <p>Luiz Felipe Azevedo de Oliveira</p>
            </section>
            <section>
                <p>551289</p>
                <p>98376</p>
                <p>93606</p>
                <p>550509</p>
                <p>550348</p>
            </section>
            <section>
                <p>cargo</p>
                <p>cargo</p>
                <p>cargo</p>
                <p>cargo</p>
                <p>cargo</p>
            </section>
        </footer>
    ) : null;
}