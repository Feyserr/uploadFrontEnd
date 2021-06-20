import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { useHistory } from 'react-router';


export default function Menu(){
    const [isOpen, setIsOpen] = useState(false);

 

    const history = useHistory();

    const handleClick = () => {
        history.push("/ListarFuncionarios");
    }

    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
            <button
                className = "navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar01"
                aria-controls="navbar01"
                aria-expanded="false"
                aria-label = "Toggle navigation"
                
            >
                <span className="text-white">Menu</span>

            </button>
            <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id ="navbar01">
                <ul className="navbar-nav mr-auto">
                    <li className ="nav-item">
                        <button to ="/" className="nav-link" onClick={handleClick}>Home</button>

                    </li>
                    <li className ="nav-item">
                        <button to ="/ListarFuncionarios" className="nav-link" onClick={handleClick}>Lista</button>

                    </li>
                    <li className ="nav-item">
                        <button to ="/EditarFuncionarios" className="nav-link" onClick={handleClick}>Editar</button>

                    </li>

                </ul>

            </div>
        </nav>
    )
}