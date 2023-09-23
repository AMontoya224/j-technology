import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';


function ContactStory( props ) {
    const { selectLan } = props;
    const frmContact = { service:'Story', userEmail:'', firstName:'', lastName:'', organization:'', message:'' };
    const frmError = { userEmail:'', firstName:'', lastName:'', organization:'', message:'' };
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const [contact, setContact] = useState(frmContact); 
    const [error, setError] = useState( frmError );
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => { 
        const {name, value} = e.target;
        setContact({...contact, [name]:value});
        (emailRegex.test(e.target.value ) && e.target.value.length > 3) ? setError( {...contact, [name]:' '} ) : selectLan ?
        setError( {...contact, [name]:'invalid email'} ) : setError( {...contact, [name]:'Correo inválido'} );
    };

    const handleSubmit = e =>{
	    e.preventDefault();
		emailjs.send('default_service', 'template_u06d55g', contact, 'Q_5mH4h7kPFWcyGFJ')
		    .then((response) => {
			    setContact(frmContact);
				setShowMessage(true);
                setTimeout(function(){ setShowMessage(false) }, 3000);
		    }, (err) => {
				console.log('FAILED...', err);
		});
    }

    return (
        <div className="ContactStory">
            <h1>{selectLan ? 'Connect with us' : 'Conecta con nosotros'}</h1>
            <div>
                <div>
                    <h1>{selectLan ? 'Want to tell us your story?' : '¿Quiere contarnos su historia?'}</h1>
                    <button>{selectLan ? 'Contact us' : 'Contáctanos'}</button>
                </div>
                <div className='container'>
                    <h1>{selectLan ? 'Our latest news in your mailbox' : 'Nuestras últimas noticias en su correo'}</h1>
                    {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
                    <form onSubmit={handleSubmit}>
                        <div className='inp-container'>
                            <label htmlFor='email' className='inp'>
                                <input required type="text" id='email' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                                <span className='inp-label'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                                <span className='inp-focus'></span>
                                <p className='inp-error'>{error.userEmail}</p>
                            </label>
                        </div>
                        <div style={{display:'flex', alignItem:'center',justifyContent:'space-between'}}>
                            <div className='inp-container'>
                                <label htmlFor='firstName' className='inp'>
                                    <input required type="text" id='firstName' className='inp-input' placeholder=' ' value={contact.firstName} name="firstName" onChange={handleChange}/>
                                    <span className='inp-label'>{selectLan ? 'First name' : 'Nombre'}</span>
                                    <span className='inp-focus'></span>
                                    <p className='inp-error'>{error.firstName}</p>
                                </label>
                            </div>
                            <div className='inp-container'>
                                <label htmlFor='lastName' className='inp'>
                                    <input required type="text" id='lastName' className='inp-input' placeholder=' ' value={contact.lastName} name="lastName" onChange={handleChange}/>
                                    <span className='inp-label'>{selectLan ? 'Last name' : 'Apellido'}</span>
                                    <span className='inp-focus'></span>
                                    <p className='inp-error'>{error.lastName}</p>
                                </label>
                            </div>
                        </div>
                        <div className='inp-container'>
                            <label htmlFor='organization' className='inp'>
                                <input required type="text" id='organization' className='inp-input' placeholder=' ' value={contact.organization} name="organization" onChange={handleChange}/>
                                <span className='inp-label'>{selectLan ? 'Organization' : 'Organización'}</span>
                                <span className='inp-focus'></span>
                                <p className='inp-error'>{error.organization}</p>
                            </label>
                        </div>
                        <div className='inp-container'>
                            <label htmlFor='message' className='inp'>
                                <input required type="text" id='message' className='inp-input' placeholder=' ' value={contact.message} name="message" onChange={handleChange}/>
                                <span className='inp-label'>{selectLan ? 'Message' : 'Mensaje'}</span>
                                <span className='inp-focus'></span>
                                <p className='inp-error'>{error.message}</p>
                            </label>
                        </div>
                        <button type={( contact.userEmail.length < 1 || error.length > 1 ) ? 'reset' : 'submit'}
                                className={( contact.userEmail.length < 1 || error.length > 1 ) ? 'submit not-submit' : 'submit'}>
                            <span className="material-icons-outlined">keyboard_return</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter( ContactStory );