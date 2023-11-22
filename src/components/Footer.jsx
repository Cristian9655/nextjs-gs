'use client'
import { usePathname } from 'next/navigation'

export default function Footer(){

    const pathname = usePathname();

    const seCadastrarLogin = pathname === '/' || pathname === '/historico' || pathname === '/ajuda';

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
                            <td>Diego Seiti Ogita Iacabo</td>
                            <td>551289</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Diego Seiti Ogita Iacabo</td>
                            <td>551289</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Diego Seiti Ogita Iacabo</td>
                            <td>551289</td>
                            <td>cargo</td>
                        </tr>
                        <tr>
                            <td>Diego Seiti Ogita Iacabo</td>
                            <td>551289</td>
                            <td>cargo</td>
                        </tr>
                    </tbody>
                </table>

            </article>
            <p>Global Solution - 1TDSPJ</p>
        </footer>
    ) : null;
}