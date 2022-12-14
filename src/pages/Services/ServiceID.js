import React from 'react';
import {withRouter} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Left2 from '../../components/Left/Left2';


function ServiceID( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef4, selectLan, data } = props;
  const service = data.services[props.match.params._id-1]

  const scrollSelect = ( select ) => {
    onSelectLeft( select );
  };

  return (
    <div className="ServiceID">
      <title>{selectLan ? `Service ${props.match.params._id}` : `Servicio ${props.match.params._id}`} | J-Technology</title>
      <Left2 selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <img src={require(`../../images/${service.image}`)} alt={service.titleEn}/>
          <h1>{selectLan ? `${service.titleEn}` : `${service.title}`}</h1>
        </section>
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <h1>{selectLan ? `${service.titleEn}` : `${service.title}`}</h1>
          <p>{selectLan ? `${service.descriptionEn}` : `${service.description}`}</p>
          <i>{selectLan ? `$ ${(service.price/3.99).toFixed(1)}` : `s/. ${service.price}`}</i>
            {selectLan ? 
              <ul>
                {service.featuresEn.map( ( service ) => {
                  return(
                    <li>{service}</li>
                  )
                })}
              </ul> : 
              <ul>
                {service.features.map( ( service ) => {
                  return(
                    <li>{service}</li>
                  )
                })}
              </ul>}
        </section>
        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <p>ultima seccion</p>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( ServiceID );