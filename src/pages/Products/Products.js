import React from 'react';
import {withRouter} from 'react-router-dom';


function Products( props ) {
  const { selectLan, data } = props;

  return (
    <div className="Products General">
      <head>
        <title>{selectLan ? 'Products' : 'Productos'} | J-Technology</title>
      </head>
      <main>
        <h1>{selectLan ? 'Products' : 'Productos'}</h1>
      </main>
    </div>
  );
}

export default withRouter( Products );