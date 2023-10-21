import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Home.css';
import Left from './../../components/Left/Left';
import Footer from '../../components/Footer/Footer';
import logo1 from './../../images/logo_1.svg';
import logo2 from './../../images/logo_2.svg';


function Home( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectHidden, selectLan, data } = props;

  const frmContact = { userService:'Home', userEmail:'', firstName:'', lastName:'', userCountry:'', userNumber:'', userMessage:'' };
  const frmError = { userEmail:' ', firstName:' ', lastName:' '};
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const [error, setError] = useState(frmError);
  const [contact, setContact] = useState(frmContact); 
  const [showMessage, setShowMessage] = useState( false );
  
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
    emailjs.send('j-technology', 'template_omrm83l', contact, 'c43fg4YmjHjiqE4Xh')
      .then(() => {
        setContact(frmContact);
        setShowMessage(true);
        setTimeout(function(){ setShowMessage(false) }, 3000);
      }, err => {
      console.log('FAILED...', err);
  });
  }

  const scrollToElement4 = () => {
    onSelectLeft( '#4' );
    testRef4.current.scrollIntoView( {block: 'start', behavior: 'smooth'} )
  };

  return (
    <div className="Home General">
      <title>{selectLan ? 'Home' : 'Inicio'} | J-Technology</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <div>
            <h1>{selectLan ? 'Technology at your fingertips' : 'La Tecnología a tu alcance'}</h1>
            <p>{selectLan ? 'We are not just another technology company, in J-technology we are dedicated to make your technological ideas come true.' : 
                          'No somos otra empresa más de tecnologia, en J-technology nos dedicamos a hacer realidad sus ideas tecnológicas'}</p>
          </div>
          <div>
            <img className={selectHidden ? 'logo1 active' : 'logo1'} src={logo1} alt='logo'/>
            <img className={selectHidden ? 'logo2 active' : 'logo2'} src={logo2} alt='logo'/>
            <button onClick={scrollToElement4}>{selectLan ? 'Contact us' : 'Contáctanos'}</button>
          </div>
        </section>

        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <div>
            <h2>Algunos de nuestros trabajos</h2>
            <div>
              <div>
                {data.works.map( ( work, idx ) => {
                  return(
                    <div>
                      <img src={require(`../../images/${work.image}`)} alt={work.titleEn}/>
                      <div>
                        <h3>{selectLan ? `${work.titleEn}` : `${work.title}`}</h3>
                        <p>{selectLan ? `${work.descriptionEn}` : `${work.description}`}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4E68C4" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,85.3C480,75,549,85,617,80C685.7,75,754,53,823,37.3C891.4,21,960,11,1029,42.7C1097.1,75,1166,149,1234,176C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </section>

        <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
          <div>
            <h2>{selectLan ? 'Locate us at' : 'Ubícanos'}</h2>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.4370292350471!2d-71.53510552813133!3d-16.39960513715254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a573e677209%3A0xecd2eeff585b359a!2sGamesa%2C%20Arequipa%2004001!5e0!3m2!1ses!2spe!4v1672246738660!5m2!1ses!2spe" allowfullscreen="" loading='eager' referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div></div>
          </div>
        </section>

        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <div>
            <h2>{selectLan ? 'Talk to an expert' : 'Habla con un experto'}</h2>
            {showMessage ? <div role="alert">{selectLan ? 'Email Send Success' : 'Correo enviado satisfactoriamente'}</div> : ' '}
            <form onSubmit={handleSubmit}>
              <div>
                <div className='inp-container'>
                    <label htmlFor='firstName' className='inp'>
                        <input required type="text" id='firstName' className='inp-input' placeholder=' ' value={contact.firstName} name="firstName" onChange={handleChange}/>
                        <span className='inp-label'>{selectLan ? 'First name' : 'Nombres'}</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{error.firstName}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='lastName' className='inp'>
                        <input required type="text" id='lastName' className='inp-input' placeholder=' ' value={contact.lastName} name="lastName" onChange={handleChange}/>
                        <span className='inp-label'>{selectLan ? 'Last name' : 'Apellidos'}</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{error.lastName}</p>
                    </label>
                </div>
              </div>
              <div>
                <div className='inp-container'>
                  <label htmlFor='userEmail' className='inp'>
                    <input required type="text" id='userEmail' className='inp-input' placeholder=' ' value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                    <span className='inp-label'>{selectLan ? 'E-mail' : 'Correo Electrónico'}</span>
                    <span className='inp-focus'></span>
                    <p className='inp-error'>{error.userEmail}</p>
                  </label>
                </div>
                <button type={(contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || error.firstName.length > 1 || error.lastName.length > 1 || error.userEmail.length > 1) ? 'reset' : 'submit'}
                        className={(contact.firstName.length < 1 || contact.lastName.length < 1 || contact.userEmail.length < 1 || error.firstName.length > 1 || error.lastName.length > 1 || error.userEmail.length > 1) ? 'submit not-submit' : 'submit'}>
                    {selectLan ? 'Send' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( Home );