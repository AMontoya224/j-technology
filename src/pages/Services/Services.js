import React from 'react';
import {withRouter} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Services.css';

function Services( props ) {
  const { onSelectLeft, testRef1, selectLan, data } = props;

  const onPage = (page) => {
    onSelectLeft( '#1' );
    props.history.push( page );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  return (
    <div className="Services">
      <title>{selectLan ? 'Services' : 'Servicios'} | J-Technology</title>
      <h2>{selectLan ? 'Services' : 'Servicios'}</h2>
      <main>
        {data.services.map( ( service, idx ) => {
          return(
            <div onClick={() => onPage(`/services/${idx+1}`)}>
              <img src={require(`../../images/${service.image}`)} alt={service.titleEn}/>
              <h4>{selectLan ? `${service.titleEn}` : `${service.title}`}</h4>
              <p>{selectLan ? `${service.descriptionEn}` : `${service.description}`}</p>
            </div>
          )
        })}
      </main>
      <Footer/>
    </div>
  );
}

export default withRouter( Services );