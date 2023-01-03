import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Home.css';
import Left from './../../components/Left/Left';
import Footer from '../../components/Footer/Footer';
import logo1 from './../../images/logo_1.svg';
import logo2 from './../../images/logo_2.svg';


function Home( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectHidden, selectLan } = props;

  const frmContact = { service:'Home', userEmail:'', first_name:'', last_name:'', organization:'', message:'' };
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const [firstNameError, setFirstNameError] = useState( ' ' );
  const [lastNameError, setLastNameError] = useState( ' ' );
  const [userEmailError, setUserEmailError] = useState( ' ' );
  const [contact, setContact] = useState(frmContact); 
  const [showMessage, setShowMessage] = useState( false );

  const handleChange = e => { 
      const {name, value} = e.target;
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
    <div className="Home">
      <title>{selectLan ? 'Home' : 'Inicio'} | J-Technology</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <div>
            <h1>{selectLan ? 'Technology is our kingdom' : 'La Tecnología es nuestro reino'}</h1>
            <p>{selectLan ? 'We are not just another technology company, in J-technology we are dedicated to make your technological ideas come true.' : 
                          'No somos otra empresa más de tecnologia, en J-technology nos dedicamos a hacer realidad sus ideas tecnológicas'}</p>
          </div>
          <div>
            <img className={selectHidden ? 'logo1 active' : 'logo1'} src={logo1} alt='logo'/>
            <img className={selectHidden ? 'logo2 active' : 'logo2'} src={logo2} alt='logo'/>
          </div>
        </section>
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>

        </section>
        <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
          <div>
            <h1>Ubícanos</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.4370292350471!2d-71.53510552813133!3d-16.39960513715254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a573e677209%3A0xecd2eeff585b359a!2sGamesa%2C%20Arequipa%2004001!5e0!3m2!1ses!2spe!4v1672246738660!5m2!1ses!2spe" allowfullscreen="" loading='eager' referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div></div>
          </div>
        </section>
        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <div>
            <h1>{selectLan ? 'Talk to an expert' : 'Habla con un experto'}</h1>
            {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
            <form onSubmit={handleSubmit}>
              <div>
                <div className='inp-container'>
                    <label htmlFor='first_name' className='inp'>
                        <input required type="text" id='first_name' className='inp-input' placeholder=' ' value={contact.first_name} name="first_name" onChange={handleChange}/>
                        <span className='inp-label'>{selectLan ? 'First name' : 'Nombres'}</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{firstNameError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='last_name' className='inp'>
                        <input required type="text" id='last_name' className='inp-input' placeholder=' ' value={contact.last_name} name="last_name" onChange={handleChange}/>
                        <span className='inp-label'>{selectLan ? 'Last name' : 'Apellidos'}</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{lastNameError}</p>
                    </label>
                </div>
              </div>
              <div className='inp-container'>
                <label htmlFor='userEmail' className='inp'>
                  <input required type="text" id='userEmail' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                  <span className='inp-label'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                  <span className='inp-focus'></span>
                  <p className='inp-error'>{userEmailError}</p>
                </label>
              </div>
              <button type={( contact.first_name.length < 1 || contact.last_name.length < 1 || contact.userEmail.length < 1 || firstNameError > 1 || lastNameError > 1 || userEmailError.length > 1 ) ? 'reset' : 'submit'}
                      className={( contact.first_name.length < 1 || contact.last_name.length < 1 || contact.userEmail.length < 1 || firstNameError > 1 || lastNameError > 1 || userEmailError.length > 1 ) ? 'submit not-submit' : 'submit'}>
                Send
              </button>
            </form>
          </div>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( Home );