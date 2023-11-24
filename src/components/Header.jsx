'use client'
import Link from "next/link";

export default function Header(){
    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "./menu_black.svg";
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "./close_black.svg";
        }
    }

    return (
        <header>
            <nav className="nav-bar">
                <img src="./deepslepe.png" alt="" />
                <div className="nav-list">
                    <ul>
                        <li className="nav-item"><Link href={'/'} className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link href={'/historico'} className="nav-link">Historico</Link></li>
                        <li className="nav-item"><Link href={'/ajuda'} className="nav-link">Ajuda/FAQ</Link></li>
                        <li className="nav-item"><Link href={'/saude'} className="nav-link">Saúde</Link></li>
                    </ul>
                </div>
                <div className="login-button">
                    <button><Link href={'/login'}>Login</Link></button>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={menuShow}>
                        <img className='icon' src={"./menu_black.svg"} alt="" />
                    </button>
                </div>
            </nav>
            <div className="mobile-menu">
                <ul>
                    <li className="nav-item"><Link href={'/'} className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link href={'/historico'} className="nav-link">Historico</Link></li>
                    <li className="nav-item"><Link href={'/ajuda'} className="nav-link">Ajuda/FAQ</Link></li>
                    <li className="nav-item"><Link href={'/saude'} className="nav-link">Saúde</Link></li>
                </ul>

                <div className="login-button">
                    <button><Link href={'/login'}>Entrar</Link></button>
                </div>
            </div>
        </header>
    )
}