import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';

function ContactService( props ) {
    const { selectLan, userService } = props;
    const frmContact = { userService, userEmail:'', firstName:'', lastName:'', userCountry:'', userNumber:'', userMessage:'' };
    const frmError = { userEmail:' ', firstName:' ', lastName:' ', userMessage:' '};
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const [error, setError] = useState(frmError);
    const [contact, setContact] = useState(frmContact); 
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => { 
        const {name, value} = e.target;
        setContact({...contact, [name]:value});
        if(name === 'userEmail'){
            (emailRegex.test(e.target.value ) && e.target.value.length > 3) ? setError({...error, [name]: ' '}) : selectLan ?
            setError({...error, [name]: 'invalid email'}) : setError({...error, [name]: 'Correo inválido'});
        }
        else{
            (e.target.value.length > 3) ? setError({...error, [name]: ' '}) : selectLan ?
            setError({...error, [name]: 'Too short'}) : setError({...error, [name]: 'Demasiado corto'});
        }
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
        <div className="ContactProduct">
            <h2>{selectLan ? 'Do you want to quote the service?' : '¿Quieres cotizar el service?'}</h2>
            {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='inp-container'>
                        <label htmlFor='update' className='inp'>
                            <input required type="text" id='update' className='inp-input' placeholder=' ' value={contact.firstName} name="firstName" onChange={handleChange}/>
                            <span className='inp-label'>{selectLan ? 'First names' : 'Nombres'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{error.firstName}</p>
                        </label>
                    </div>
                    <div className='inp-container'>
                        <label htmlFor='update' className='inp'>
                            <input required type="text" id='update' className='inp-input' placeholder=' ' value={contact.lastName} name="lastName" onChange={handleChange}/>
                            <span className='inp-label'>{selectLan ? 'Last names' : 'Apellidos'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{error.lastName}</p>
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='inp-container'>
                        <label htmlFor='update' className='inp'>
                            <input required type="text" id='update' className='inp-input' placeholder=' ' value={contact.userMessage} name="userMessage" onChange={handleChange}/>
                            <span className='inp-label'>{selectLan ? 'Description of the service' : 'Descripción del servicio'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{error.userMessage}</p>
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='inp-container'>
                        <label htmlFor='update' className='inp'>
                            <input required type="text" id='update' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                            <span className='inp-label'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{error.userEmail}</p>
                        </label>
                    </div>
                    <button type={(contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || contact.userMessage.length < 1 || error.firstName.length > 1 || error.lastName.length > 1 || error.userEmail.length > 1) ? 'reset' : 'submit'}
                            className={(contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || contact.userMessage.length < 1 || error.firstName.length > 1 || error.lastName.length > 1 || error.userEmail.length > 1) ? 'submit not-submit' : 'submit'}>
                        {selectLan ? 'Quote' : 'Cotizar'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default withRouter( ContactService );