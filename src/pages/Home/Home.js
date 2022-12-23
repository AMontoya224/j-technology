import React from 'react';
import {withRouter} from 'react-router-dom';
import './Home.css';
import Left from './../../components/Left/Left';
import Footer from '../../components/Footer/Footer';


function Home( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

  return (
    <div className="Home">
      <title>{selectLan ? 'Home' : 'Inicio'} | J-Technology</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <h1>{selectLan ? 'Technology is our kingdom' : 'La tecnología es nuestro reino'}</h1>
          <p >{selectLan ? 'At J-Technology, we promote the digitization of your company through the ideation, design and development of web and mobile applications. In July 2022 Reign joins Apply Digital.' : 
                          'En J-Technology, potenciamos la digitalización de tu empresa mediante la ideación, diseño y desarrollo de aplicaciones web y móviles. En julio de 2022 Reign se integra a Apply Digital.'}</p>
        </section>
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>

        </section>
        <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>

        </section>
        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <p>ultima seccion</p>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( Home );