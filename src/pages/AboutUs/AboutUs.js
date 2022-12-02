import React from 'react';
import {withRouter} from 'react-router-dom';
import './AboutUs.css';
import Footer from '../../components/Footer/Footer';


function AboutUs( props ) {
  const { onSelectLeft, testRef1, selectLan } = props;

  const onPage = (page) => {
    onSelectLeft( '#1' );
    props.history.push( page );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  return (
    <div className="AboutUs">
      <head>
        <title>{selectLan ? 'About us' : 'Sobre Nosotros'} | J-Technology</title>
      </head>
      <main>
        <div className='one'>
          <h1>{selectLan ? 'Know us' : 'Conócenos'}</h1>
          <button onClick={() => onPage('/know-us')}>{selectLan ? 'See more' : 'Ver más'}</button>
        </div>
        <div className='two'>
          <h1>{selectLan ? 'Our method' : 'Nuestro método'}</h1>
          <button onClick={() => onPage('/our-method')}>{selectLan ? 'See more' : 'Ver más'}</button>
        </div>
      </main>
      <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
    </div>
  );
}

export default withRouter( AboutUs );