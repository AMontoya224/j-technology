import { withRouter } from 'react-router-dom';
import './Footer.css';


function Footer( props ) {
    const { selectLan } = props;

    return (
        <footer>
            <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<a href="https://montyang.com/" target="_blank" rel='noreferrer'>Andres Montoya</a></p>
        </footer>
    );
}

export default withRouter( Footer );