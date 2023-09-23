import React, { useMemo, useState } from 'react';
import Select from 'react-select'
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';
import countryList from 'react-select-country-list'


function ContactService( props ) {
    const { selectLan, serviceOrigin } = props;
    const frmContact = { userService:{serviceOrigin}, userEmail:'', firstName:'', lastName:'', userCountry:'', userNumber:'', userMessage:'' };
    const [contact, setContact] = useState(frmContact); 
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const [firstNameError, setFirstNameError] = useState( ' ' );
    const [lastNameError, setLastNameError] = useState( ' ' );
    const [userEmailError, setUserEmailError] = useState( ' ' );
    const [userNumberError, setUserNumberError] = useState( ' ' );
    const [showMessage, setShowMessage] = useState( false );
    const options = useMemo(() => countryList().getData(), [])

    const changeCountry = value => {
        setContact({...contact, 'userCountry':value.label});
    }

    const changeHandle = e => {
        let {name, value} = e.target;
        setContact({...contact, [name]:value});
        if(name==='first_name'){
            (e.target.value.length > 3) ? setFirstNameError( ' ' ) : selectLan ?
            setFirstNameError( 'invalid first name' ) : setFirstNameError( 'Nombre inválido' );
        }
        else if(name==='last_name'){
            (e.target.value.length > 3) ? setLastNameError( ' ' ) : selectLan ?
            setLastNameError( 'invalid last name' ) : setLastNameError( 'Apellido inválido' );
        }
        else if(name==='userEmail'){
            (emailRegex.test(e.target.value ) && e.target.value.length > 3) ? setUserEmailError( ' ' ) : selectLan ?
            setUserEmailError( 'invalid email' ) : setUserEmailError( 'Correo inválido' );
        }
        else if(name==='userNumber'){
            (e.target.value.length > 5) ? setUserNumberError( ' ' ) : selectLan ?
            setUserNumberError( 'invalid number' ) : setUserNumberError( 'Número inválido' );
        }
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
        <div className="ContactService">
            <h1>{selectLan ? 'Connect with us' : 'Conecta con nosotros'}</h1>
            {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='inp-container'>
                        <label htmlFor='firstName' className='inp'>
                            <input required type="text" id='firstName' className='inp-input inp-white' placeholder=' ' value={contact.firstName} name="firstName" onChange={changeHandle}/>
                            <span className='inp-label label-white'>{selectLan ? 'First name' : 'Nombres'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{firstNameError}</p>
                        </label>
                    </div>
                    <div className='inp-container'>
                        <label htmlFor='lastName' className='inp'>
                            <input required type="text" id='lastName' className='inp-input' placeholder=' ' value={contact.lastName} name="lastName" onChange={changeHandle}/>
                            <span className='inp-label'>{selectLan ? 'Last name' : 'Apellidos'}</span>
                            <span className='inp-focus'></span>
                            <p className='inp-error'>{lastNameError}</p>
                        </label>
                    </div>
                </div>
                <div className='inp-container'>
                    <label htmlFor='userEmail' className='inp'>
                    <input required type="text" id='userEmail' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={changeHandle}/>
                    <span className='inp-label inp-label-e'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                    <span className='inp-focus'></span>
                    <p className='inp-error'>{userEmailError}</p>
                    </label>
                </div>
                <div>
                    <div className=''>
                        <Select options={options} value={contact.userCountry.label} onChange={changeCountry}/>
                    </div>
                    <div className='inp-container'>
                        <label htmlFor='userNumber' className='inp'>
                        <input required type="number" id='userNumber' className='inp-input' placeholder=' ' value={contact.userNumber} name="userNumber" onChange={changeHandle}/>
                        <span className='inp-label'>{selectLan ? 'Cellphone' : 'Telefono'}</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{userNumberError}</p>
                        </label>
                    </div>
                </div>
                <button type={( contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || firstNameError > 1 || lastNameError > 1 || userEmailError.length > 1 ) ? 'reset' : 'submit'}
                        className={( contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || firstNameError > 1 || lastNameError > 1 || userEmailError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                    {selectLan ? 'Send' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}

export default withRouter( ContactService );