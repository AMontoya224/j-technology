import React from 'react';
import {withRouter} from 'react-router-dom';
import './Services.css';

function Services( props ) {
  const { onSelectLeft, testRef1, selectLan, data } = props;

  const onPage = (page) => {
    onSelectLeft( '#1' );
    props.history.push( page );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  return (
    <div className="Services General">
      <title>{selectLan ? 'Services' : 'Servicios'} | J-Technology</title>
      <h1>{selectLan ? 'Services' : 'Servicios'}</h1>
      <main>
        {data.services.map( ( service, idx ) => {
          return(
            <div onClick={() => onPage(`/services/${idx+1}`)}>
              <h1>{selectLan ? `${service.titleEn}` : `${service.title}`}</h1>
              <img src={require(`../../images/${service.image}`)} alt={service.titleEn}/>
              <p>{selectLan ? `${service.descriptionEn}` : `${service.description}`}</p>
              <i>{selectLan ? `$ ${(service.price/3.99).toFixed(1)}` : `s/. ${service.price}`}</i>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default withRouter( Services );