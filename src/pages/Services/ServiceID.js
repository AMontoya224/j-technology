import React from 'react';
import {withRouter} from 'react-router-dom';
import Left from '../../components/Left/Left';


function ServiceID( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan, data } = props;
  const service = data.services[props.match.params._id-1]

  return (
    <div className="ServiceID General">
      <title>{selectLan ? `Service ${props.match.params._id}` : `Servicio ${props.match.params._id}`} | J-Technology</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <h1>{selectLan ? `${service.titleEn}` : `${service.title}`}</h1>
        <img src={require(`../../images/${service.image}`)} alt={service.titleEn}/>
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
      </main>
    </div>
  );
}

export default withRouter( ServiceID );