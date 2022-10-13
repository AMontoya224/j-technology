import React from 'react';
import {withRouter} from 'react-router-dom';
import Left from './../../components/Left/Left';


function OurMethod( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

  return (
    <div className="OurMethod General">
      <head>
        <title>{selectLan ? 'Our method' : 'Nuestro método'} | J-Technology</title>
      </head>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <h1>{selectLan ? 'Our method' : 'Nuestro método'}</h1>
      </main>
    </div>
  );
}

export default withRouter( OurMethod );