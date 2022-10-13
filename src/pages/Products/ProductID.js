import React from 'react';
import {withRouter} from 'react-router-dom';
import Left from './../../components/Left/Left';


function ProductID( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

  return (
    <div className="ProductID General">
      <head>
        <title>{selectLan ? `Product ${props.match.params._id}` : `Producto ${props.match.params._id}`} | J-Technology</title>
      </head>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <h1>{selectLan ? `Product ${props.match.params._id}` : `Producto ${props.match.params._id}`}</h1>
      </main>
    </div>
  );
}

export default withRouter( ProductID );