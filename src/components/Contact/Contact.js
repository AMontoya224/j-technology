import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';


function Contact( props ) {
    const { selectLan } = props;
    const frmContact = { userService:'know us', userEmail:'', firstName:'', lastName:'', userCountry:'', userNumber:'', userMessage:'' };
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const [updateError, setUpdateError] = useState( ' ' );
    const [contact, setContact] = useState(frmContact); 
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => { 
        const {name, value} = e.target;
        setContact({...contact, [name]:value});
        (emailRegex.test(e.target.value ) && e.target.value.length > 3) ? setUpdateError( ' ' ) : selectLan ?
        setUpdateError( 'invalid email' ) : setUpdateError( 'Correo inválido' );
    };

    const handleSubmit = e =>{
	    e.preventDefault();
		emailjs.send('j-technology', 'template_vi56bth', contact, 'c43fg4YmjHjiqE4Xh')
		    .then(() => {
			    setContact(frmContact);
				setShowMessage(true);
                setTimeout(function(){ setShowMessage(false) }, 3000);
		    }, err => {
				console.log('FAILED...', err);
		});
    }

    return (
        <div className="Contact">
            <h2>{selectLan ? 'Connect with us' : 'Conecta con nosotros'}</h2>
            <div>
                <div>
                    <h4>{selectLan ? 'Do you want to work with us?' : '¿Quiere trabajar con nosotros?'}</h4>
                    <button className='submit'>{selectLan ? 'Contact us' : 'Contáctanos'}</button>
                </div>
                <div className='container'>
                    <h4>{selectLan ? 'Our latest news in your mailbox' : 'Nuestras últimas noticias en su correo'}</h4>
                    {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
                    <form onSubmit={handleSubmit}>
                        <div className='inp-container'>
                            <label htmlFor='update' className='inp'>
                                <input required type="text" id='update' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                                <span className='inp-label'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                                <span className='inp-focus'></span>
                                <p className='inp-error'>{updateError}</p>
                            </label>
                        </div>
                        <button type={( contact.userEmail.length < 1 || updateError.length > 1 ) ? 'reset' : 'submit'}
                                className={( contact.userEmail.length < 1 || updateError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                            <span className="material-icons-outlined">keyboard_return</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter( Contact );