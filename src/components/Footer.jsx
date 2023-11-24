'use client'
import { usePathname } from 'next/navigation'

export default function Footer(){

    const pathname = usePathname();

    const seCadastrarLogin = pathname === '/' || pathname === '/dados' || pathname === '/ajuda' || pathname === '/saude';

    return seCadastrarLogin ? (
        <footer>
            <article>
                <img src="./deepslepe.png" alt="" />
                <table className='table__footer'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Rm</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Diego Seiti Ogita Iacabo</td>
                            <td>551289</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>João Lucas Marques Costa</td>
                            <td>98376</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Alejandro Rabelo</td>
                            <td>93606</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Cristian Alvaro Condori Paucara</td>
                            <td>550509</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Luiz Felipe Azevedo de Oliveira</td>
                            <td>550348</td>
                            <td>cargo</td>
                        </tr>
                    </tbody>
                </table>

            </article>
            <p>Global Solution - 1TDSPJ</p>
        </footer>
    ) : null;
}