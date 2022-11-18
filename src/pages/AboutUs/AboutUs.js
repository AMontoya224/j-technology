import React from 'react';
import {withRouter} from 'react-router-dom';
import Left from './../../components/Left/Left';


function AboutUs( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

  return (
    <div className="AboutUs General">
      <head>
        <title>{selectLan ? 'About us' : 'Sobre Nosotros'} | J-Technology</title>
      </head>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <h1>{selectLan ? 'About Us' : 'Sobre Nosotros'}</h1>
        <p>Somos una empresa joven...</p>
      </main>
    </div>
  );
}

export default withRouter( AboutUs );