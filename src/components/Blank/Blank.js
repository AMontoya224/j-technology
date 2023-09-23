import { withRouter } from 'react-router-dom';
import './Blank.css';
import logo from '../../images/logo.svg';

function Blank() {
    return (
        <div className='Blank'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
            <h1>
                Página aún no disponible
            </h1>
            <span class="material-icons-round">engineering</span>
            <div className='row'>
                <p>
                    Aplicacion desarrollada en React
                </p>
                <img src={logo} className="Blank-logo" alt="logo" />
            </div>
        </div>
    );
}

export default withRouter(Blank);