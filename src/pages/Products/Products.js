import React from 'react';
import {withRouter} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Products.css';

function Products( props ) {
  const { onSelectLeft, testRef1, selectLan, data } = props;

  const onPage = (page) => {
    onSelectLeft( '#1' );
    props.history.push( page );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  return (
    <div className="Products">
      <head>
        <title>{selectLan ? 'Products' : 'Productos'} | J-Technology</title>
      </head>
      <h2>{selectLan ? 'Products' : 'Productos'}</h2>
      <main>
        {data.products.map( ( product, idx ) => {
          return(
            <div onClick={() => onPage(`/Products/${idx+1}`)}>
              <h4>{selectLan ? `${product.titleEn}` : `${product.title}`}</h4>
              <img src={require(`../../images/${product.image}`)} alt={product.titleEn}/>
              <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
            </div>
          )
        })}
      </main>
      <div>
        <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
      </div>
    </div>
  );
}

export default withRouter( Products );