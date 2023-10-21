import React from 'react';
import {withRouter} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import ContactService from '../../components/Contact/ContactService';
import Left2 from '../../components/Left/Left2';


function ServiceID( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef4, selectLan, data } = props;
  const service = data.services[props.match.params._id-1]

  return (
    <div className="ServiceID">
      <title>{selectLan ? `Service ${props.match.params._id}` : `Servicio ${props.match.params._id}`} | J-Technology</title>
      <Left2 selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <img src={require(`../../images/${service.image}`)} alt={service.titleEn}/>
          <h1>{selectLan ? `${service.titleEn}` : `${service.title}`}</h1>
          <p>{selectLan ? `${service.descriptionEn}` : `${service.description}`}</p>
        </section>

        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <h2>{selectLan ? `${service.title2En}` : `${service.title2}`}</h2>
          <i>{selectLan ? `$ ${(service.price/3.99).toFixed(1)}` : `s/. ${service.price}`}</i>
          <p>{selectLan ? `${service.description2En}` : `${service.description2}`}</p>
          {selectLan ? 
            <ul>
              {service.featuresEn.map( ( service ) => {
                return(
                  <li><b>{service[0]}</b>{service[1]}</li>
                )
              })}
            </ul> : 
            <ul>
              {service.features.map( ( service ) => {
                return(
                  <li><b>{service[0]}</b>{service[1]}</li>
                )
              })}
            </ul>}
        </section>

        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <ContactService selectLan={selectLan} userService={service.title}/>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( ServiceID );