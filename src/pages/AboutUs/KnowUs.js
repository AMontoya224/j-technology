import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import Left2 from './../../components/Left/Left2';
import Contact from './../../components/Contact/Contact';
import './AboutUs.css';
import Footer from '../../components/Footer/Footer';
import Photo1 from './../../images/photo-1.png';
import Photo2 from './../../images/photo2.jpg';
import Photo3 from './../../images/photo-3.jpg';

function KnowUs( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef4, selectLan } = props;
  const [selectPhoto, setSelectPhoto] = useState( '#1' );

  const onSelectPhoto = (select) => {
    setSelectPhoto( select );
  };

  return (
    <div className="KnowUs">
      <head>
        <title>{selectLan ? 'Know Us' : 'Conócenos'} | J-Technology</title>
      </head>
      <Left2 selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <h1>{selectLan ? 'Know Us' : 'Conócenos'}</h1>
          <p>{selectLan ? 'We are a company dedicated in industrial automation services, information technology, software development, specialist in web design, robotic developers, domotics specialized in different sectors.' : 
                          'Somos una empresa dedicada en servicios de automatización industrial, tecnología de la información, desarrollo del software, especialista en diseño de páginas web, desarrolladores roboticos, domotica especializada en distintos sectores.'}</p>
          <a href="https://www.canva.com/design/DAFvv41keJY/ev3R6ZTA3lu9cKZdXaiBAQ/view?utm_content=DAFvv41keJY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer">
            {selectLan ? 'Company Presentation' : 'Presentación de la Compañía'}
          </a>
        </section>

        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <p>{selectLan ? 'We are a family, and therefore we should feel the same or better than we do at home.' : 'Somos una familia, y por eso debemos sentirnos igual o mejor que en nuestro hogar.'}</p>
          <h2>{selectLan ? 'Get to know our family:' : 'Conoce a nuestra familia:'}</h2>
          <div>
            <div className='P-1'>
              <div className='P-2'>
                <img className={(selectPhoto === '#1' ) ? 'profile' : 'not-profile'} src={Photo1} alt='photo1'/>
                <img className={(selectPhoto === '#2' ) ? 'profile' : 'not-profile'} src={Photo2} alt='photo1'/>
                <img className={(selectPhoto === '#3' ) ? 'profile' : 'not-profile'} src={Photo3} alt='photo1'/>
              </div>
              <div className='P-3'>
                <img className={(selectPhoto === '#1' ) ? 'select' : ''} onClick={() => onSelectPhoto('#1')} src={Photo1} alt='photo1'/>
                <img className={(selectPhoto === '#2' ) ? 'select' : ''} onClick={() => onSelectPhoto('#2')} src={Photo2} alt='photo2'/>
                <img className={(selectPhoto === '#3' ) ? 'select' : ''} onClick={() => onSelectPhoto('#3')} src={Photo3} alt='photo3'/>
              </div>
            </div>
            <div className='I-1'>
              <div className={(selectPhoto === '#1' ) ? 'information' : 'not-information'}>
                <h3>{selectLan ? 'Eng. Jarelh Galdos' : 'Ing. Jarelh Galdos'}</h3>
                <b>{selectLan ? 'Director of Finance and Information' : 'Director de Finanzas e Información'}</b>
                <p>{selectLan ? "Bachelor's Degree in Electronic Engineering from Universidad Nacional de San Agustín" : 'Bachiller en Ingenieria Electrónica de Universidad Nacional de San Agustín'}</p>
                <div>
                  <a className="pagina" href='https://www.linkedin.com/in/jarelh-galdos-barrios-4145b7179/' target="_blank" rel="noreferrer">
                    <img src={require('./../../images/linkedin.png')} alt='Linkedin' title='Linkedin'/>
                  </a>
                  <a href="mailto:jgaldosb@unsa.edu.pe?subject=Quiero contactar contigo Jarelh">
                  <img src={require('./../../images/mail.png')} alt='Mail' title='Mail'/>
                  </a>
                </div>
              </div>
              <div className={(selectPhoto === '#2' ) ? 'information' : 'not-information'}>
                <h3>{selectLan ? 'Eng. Juan Perez' : 'Ing. Italo Andaluz'}</h3>
                <b>{selectLan ? 'Marketing and Technology Director' : 'Director de Marketing y Tecnología'}</b>
                <p>{selectLan ? 'Technology is the future of humanity' : 'La tecnología es el futuro de la humanidad'}</p>
                <div>
                  <a className="pagina" href='https://www.linkedin.com/in/italo-andaluz-huarsaya-5712071a7/' target="_blank" rel="noreferrer">
                    <img src={require('./../../images/linkedin.png')} alt='Linkedin' title='Linkedin'/>
                  </a>
                  <a href="mailto:italoandaluz@gmail.com?subject=Quiero contactar contigo Italo">
                  <img src={require('./../../images/mail.png')} alt='Mail' title='Mail'/>
                  </a>
                </div>
              </div>
              <div className={(selectPhoto === '#3' ) ? 'information' : 'not-information'}>
                <h3>{selectLan ? 'Eng. Joseph Guevara' : 'Ing. Joseph Guevara'}</h3>
                <b>{selectLan ? 'Director of Communications and Operations' : 'Director de Comunicaciones y Operaciones'}</b>
                <p>{selectLan ? 'Robotics Researcher | Electronic Engineer specialized in DCS and SCADA Systems | Industrial and Mining Safety Engineer | Industrial and Mining Safety Engineer' : 'Investigador Robótico | Ingeniero Electrónico especialista en Sistemas DCS y SCADA | Ingeniero de Seguridad Industrial y Minera'}</p>
                <div>
                  <a className="pagina" href='https://www.linkedin.com/in/joseph-guevaram/' target="_blank" rel="noreferrer">
                    <img src={require('./../../images/linkedin.png')} alt='Linkedin' title='Linkedin'/>
                  </a>
                  <a href="mailto:jguevaram@unsa.edu.pe?subject=Quiero contactar contigo Joseph">
                  <img src={require('./../../images/mail.png')} alt='Mail' title='Mail'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <Contact selectLan={selectLan}/>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( KnowUs );
