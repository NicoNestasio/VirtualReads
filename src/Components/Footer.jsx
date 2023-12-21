import React from 'react';
import './Estilos.css';

function Footer() {

    return(
    <div className='footer'>
        <div className='contenedorFooter'>
            <h4 className='textoFooter'>Trabajo integrador VirtualREADS grupo7 comisión 23644</h4>
            <h4 className='textoFooter'><a href='https://github.com/HeinrichLeandro/23644-grupo7-VirtualReads' style={{textDecoration: 'none'}} className='textoFooter'>Link del repositorio</a></h4>
            <h5 className='textoFooter'>Integrantes:</h5>
            <h5 className='textoFooter'>Grupo7 comisión 23644</h5>
        </div>
        <div className='contenedorFooter2'>
            <h5 className='textoFooter'>Alvaro Gabriel Mamanina Almiron</h5>
            <h5 className='textoFooter'>Facundo Nicolas Nestasio</h5>
            <h5 className='textoFooter'>Neuyin Herrera</h5>
            <h5 className='textoFooter'>Luiceli Andreina Sánchez Torres</h5>
            <h5 className='textoFooter'>Cristina Almiron</h5>
            <h5 className='textoFooter'>Ricardo Balsimelli</h5>
            <h5 className='textoFooter'>Leandro Heinrich</h5>
            <h5 className='textoFooter'>Rosio Choque Lima</h5>
            <h5 className='textoFooter'>Maximiliano Jose Camargo</h5>
        </div>
    </div>
    )
}

export default Footer