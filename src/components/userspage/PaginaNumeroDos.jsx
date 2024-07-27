import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginaNumeroDos = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Bienvenido a la Nueva Página</h1>
                    <p>Esta es una plantilla básica para una nueva página en React.</p>
                    <Link to="/" className="btn btn-primary">Volver a la Página Principal haz click aqui</Link>
                </div>
            </div>
        </div>
    );
};

export default PaginaNumeroDos;
