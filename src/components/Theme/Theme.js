import React, { useState } from 'react';
import './Theme.css';


function Theme(props){
    const { setTheme, selectLan } = props;
    const [iconTheme, setIconTheme] = useState( () => {
        const initialValue = JSON.parse( localStorage.getItem( 'iconTheme' ) );
        return initialValue || true;
    });

    const changeTheme = () => {
        document.body.classList.toggle( 'dark-theme-variables' );
        if( document.body.classList.toString() === '' ){
            localStorage.setItem( 'iconTheme', JSON.stringify( false ) );
            setIconTheme( true );
            setTheme( true );
        }
        else{
            localStorage.setItem( 'iconTheme', JSON.stringify( true ) );
            setIconTheme( false );
            setTheme( false );
        }
    };

    return (
        <div className='Theme' onClick={changeTheme} title={selectLan ? 'Theme' : 'Tema'}>
            <div></div>
            <span className='material-icons-round'>
                {iconTheme ? 'light_mode' : 'dark_mode'}
            </span>
        </div>
    )
};

export default Theme;