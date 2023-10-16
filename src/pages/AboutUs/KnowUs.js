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
  const [selectPhoto, setSelectPhoto] = useState( '' );

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
          <button>
            {selectLan ? 'Company Presentation' : 'Presentación de la Compañía'}
          </button>
        </section>

        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <p>{selectLan ? 'We are a family, and therefore we should feel the same or better than we do at home.' : 'Somos una familia, y por eso debemos sentirnos igual o mejor que en nuestro hogar.'}</p>
          <h3>{selectLan ? 'Get to know ours:' : 'Conoce el nuestro:'}</h3>
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
                <i>{selectLan ? 'Phrase...' : 'Frase...'}</i>
                <p>{selectLan ? 'Decription...' : 'Decripción...'}</p>
                <div>
                  redes: ...
                </div>
              </div>
              <div className={(selectPhoto === '#2' ) ? 'information' : 'not-information'}>
                <h3>{selectLan ? 'Eng. Juan Perez' : 'Ing. Juan Andaluz'}</h3>
                <b>{selectLan ? 'Marketing and Technology Director' : 'Director de Marketing y Tecnología'}</b>
                <i>{selectLan ? 'Technology is the future of humanity' : 'La tecnología es el futuro de la humanidad'}</i>
                <p>{selectLan ? 'Decription...' : 'Decripción...'}</p>
                <div>
                  LinkedIn, CV
                </div>
              </div>
              <div className={(selectPhoto === '#3' ) ? 'information' : 'not-information'}>
                <h3>{selectLan ? 'Eng. Joseph Guevara' : 'Ing. Joseph Guevara'}</h3>
                <b>{selectLan ? 'Director of Communications and Operations' : 'Director de Comunicaciones y Operaciones'}</b>
                <i>{selectLan ? 'Phrase...' : 'Frase...'}</i>
                <p>{selectLan ? 'Decription...' : 'Decripción...'}</p>
                <div>
                  redes
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
