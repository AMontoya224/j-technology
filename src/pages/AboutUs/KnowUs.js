import React from 'react';
import {withRouter} from 'react-router-dom';
import Left2 from './../../components/Left/Left2';
import Contact from './../../components/Contact/Contact';
import './AboutUs.css';
import Footer from '../../components/Footer/Footer';


function KnowUs( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef4, selectLan } = props;

  const scrollSelect = ( select ) => {
    onSelectLeft( select );
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
          <p>Somos una empresa joven...</p>
        </section>
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>

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