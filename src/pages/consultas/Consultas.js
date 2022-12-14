import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Consultas.css';

function Consultas() {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [list, setList] = useState([]);

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <body className='const-cont'>
            <div className='container-const'>
                <Table striped hover >
                    <thead class="bg-info">
                        <tr>
                            <td>Número De Documento</td>
                            <td>Tipo De Documento</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Fecha De Nacimiento</td>
                            <td>Género</td>
                            <td>Correo</td>
                            <td>Teléfono</td>
                            <td>País De Origen</td>
                            <td>Contraseña</td>
                            <td>Tipo De Usuario</td>
                            <td>Imagen</td>
                            <td>Acción</td>
                        </tr>
                    </thead>
                    {
                        list.map((list, index) => (
                            <tbody class="bg-light">
                                <tr>
                                    <td>{list._id}</td>
                                    <td>{list.tipodoc}</td>
                                    <td>{list.nombre}</td>
                                    <td>{list.apellido}</td>
                                    <td>{list.fnacimiento}</td>
                                    <td>{list.genero}</td>
                                    <td>{list.email}</td>
                                    <td>{list.telefono}</td>
                                    <td>{list.paisorigen}</td>
                                    <td>{list.password}</td>
                                    <td>{list.tipouser}</td>
                                    <td>{list.img}</td>
                                    <td>
                                        <Button variant='success'><i class="fa-solid fa-pen"></i> Editar</Button>
                                        <Button variant='danger'><i class="fa-solid fa-trash"></i> Eliminar</Button>
                                    </td>
                                </tr>
                            </tbody>))
                    }
                </Table>
            </div>

        </body>
    );
}

export default Consultas;
