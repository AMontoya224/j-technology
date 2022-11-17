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
      <title>{selectLan ? 'Products' : 'Productos'} | J-Technology</title>
      <h1>{selectLan ? 'Products' : 'Productos'}</h1>
      <main>
        {data.products.map( ( product, idx ) => {
          return(
            <div onClick={() => onPage(`/Products/${idx+1}`)}>
              <h1>{selectLan ? `${product.titleEn}` : `${product.title}`}</h1>
              <img src={require(`../../images/${product.image}`)} alt={product.titleEn}/>
              <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
              <i>{selectLan ? `$ ${(product.price/3.99).toFixed(1)}` : `s/. ${product.price}`}</i>
            </div>
          )
        })}
      </main>
      <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
    </div>
  );
}

export default withRouter( Products );