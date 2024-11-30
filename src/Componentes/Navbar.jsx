import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <header>
                <div className='container'>
                    <nav>
                        <div className='logo'>
                            <h2>Malek Regaleria</h2>
                        </div>
                        <ul className='nav-link'>
                            <li>
                                <a href="/inicio">Inicio</a>
                            </li>
                            <li>
                                <a href="/BazarYCocina">Bazar y cocina</a>
                            </li>
                            <li>
                                <a href="/Ceramica">Ceramica</a>
                            </li>
                            <li>
                                <a href="/Mates">Mates</a>
                            </li>
                        </ul>
                        <section>
                            <div className="icon">
                                <a href="/Shop"><FaCartShopping /></a>
                            </div>
                        </section>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;