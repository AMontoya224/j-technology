import { withRouter } from 'react-router-dom';
import './Footer.css';


function Footer( props ) {
    const { onSelectLeft, selectLan, testRef1} = props;

    const onPage = (page) => {
        onSelectLeft( '#1' );
        props.history.push( page );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    return (
        <footer>
            <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<a href="https://jtechnologyaqp.com/" target="_blank" rel='noreferrer'>J-Tech</a></p>
            <p>© Copyright 2021 - 2023   |   J-Technology. {selectLan ? 'All rights reserved.' : 'Todos los derechos reservados'}   |   <b onClick={() => onPage('/privacy-policy')}>{selectLan ? 'Privacy Policy' : 'Politica de Privacidad'}</b>   |   <b onClick={() => onPage('/terms-conditions')}>{selectLan ? 'Terms and Conditions' : 'Términos y Condiciones'}</b></p>
        </footer>
    );
}

export default withRouter( Footer );