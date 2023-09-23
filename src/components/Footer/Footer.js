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
            <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<a href="https://montyang.com/" target="_blank" rel='noreferrer'>Andres Montoya</a></p>
            <p>© Copyright 2021 - 2023   |   J-Technology. All rights reserved.   |   <b onClick={() => onPage('/privacy-policy')}>Privacy Policy</b>   |   <b onClick={() => onPage('/terms-conditions')}>Terms and Conditions</b></p>
        </footer>
    );
}

export default withRouter( Footer );