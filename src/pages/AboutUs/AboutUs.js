import React from 'react';
import {withRouter} from 'react-router-dom';
import './AboutUs.css';
import Footer from '../../components/Footer/Footer';


function AboutUs( props ) {
  const { onSelectLeft, testRef1, selectLan, data } = props;

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
      <h2>{selectLan ? 'ABOUT US' : 'SOBRE NOSOTROS'}</h2>
      <main>
        {data.aboutus.map( ( about, idx ) => {
          return(
            <div onClick={() => onPage(`/${about.url}`)}>
              <img src={require(`../../images/${about.image}`)} alt={about.titleEn}/>
              <h4>{selectLan ? `${about.titleEn}` : `${about.title}`}</h4>
              <p>{selectLan ? `${about.descriptionEn}` : `${about.description}`}</p>
            </div>
          )
        })}
      </main>
      <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
    </div>
  );
}

export default withRouter( AboutUs );