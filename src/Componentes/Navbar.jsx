import React from 'react'

function Navbar () {
    return <div className='container'>
        <nav>
            <div className='logo'>
                <h2>Malek Regaleria</h2>
            </div>
            <ul>
                <li>
                    <a href="/inicio">Inicio</a>
                </li>
                <li>
                    <a href="/Productos">Productos</a>
                </li>
            </ul>
        </nav>
    </div>;
}

export default Navbar;