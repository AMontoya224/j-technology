import React from 'react';
import {withRouter} from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Left from '../../components/Left/Left';


function ProductID( props ) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan, data } = props;
  const product = data.products[props.match.params._id-1];
  const url = props.location.hash;

  return (
    <div className="ProductID">
      <title>{selectLan ? `${product.titleEn}` : `${product.title}`} | J-Technology</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <div>
            <i>{selectLan ? `$ ${(product.price/3.99).toFixed(1)}` : `s/. ${product.price}`}</i>
            <h1>{selectLan ? `${product.titleEn}` : `${product.title}`}</h1>
            <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
            <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
          </div>
          <img src={require(`../../images/${product.image}`)} alt={product.titleEn}/>
        </section> 
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
          <p>arm</p>
          <img src={require(`../../images/${product.image2}`)} alt={product.titleEn}/>
          <div>
            <h1>dssdsdsdss ssssdssdsdsd ssssssssds ssssdsdsdsdsssss</h1>
            <p>dssdsd sdsss sssdssdsd sdssssssss dsssssds dsdsdsssss</p>
            <p>dssd sdsdssssssd ssdsdsds sssssssd sssssdsdsd sdsssss</p>
            <p>dssdsdsd ssssssdss dsdsdssssss ssdsssssdsd sdsdsssss</p>
          </div>
        </section>
        <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
          <nav>
            <ul>
              <li>
                <a href='#Description' className={url === '#Description' || url === '' ? 'ProductID-a one active' : 'ProductID-a one'}>{selectLan ? 'Description' : 'Descripción'}</a>
                <a href='#Especifications' className={url === '#Especifications'? 'ProductID-a two active' : 'ProductID-a two'}>{selectLan ? 'Especifications' : 'Especificaciones'}</a>
                <a href='#Guides' className={url === '#Guides'? 'ProductID-a three active' : 'ProductID-a three'}>{selectLan ? 'Guides' : 'Guías'}</a>
                <a href='#Activities' className={url === '#Activities'? 'ProductID-a four active' : 'ProductID-a four'}>{selectLan ? 'Activities' : 'Actividades'}</a>
              </li>
              <li>
                <div className={url === '#Description' || url === '' ? 'ProductID-div one active' : 'ProductID-div one'}>
                  <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
                  <p>{selectLan ? `${product.descriptionEn}` : `${product.description}`}</p>
                </div>
                <div className={url === '#Especifications' ? 'ProductID-div two active' : 'ProductID-div two'}>
                    {selectLan ? 
                      <ul>
                        {product.featuresEn.map( ( product ) => {
                          return(
                            <li>{product}</li>
                          )
                        })}
                      </ul> : 
                      <ul>
                        {product.features.map( ( product ) => {
                          return(
                            <li>{product}</li>
                          )
                        })}
                      </ul>}
                  </div>
                <div className={url === '#Guides' ? 'ProductID-div three active' : 'ProductID-div three'}>
                  <div>
                    <p>Manual de usuario v 0.2</p>
                    <p>Manual de usuario v 0.3</p>
                    <p>Guia de primeros pasos del robot v 0.2</p>

                  </div>
                </div>
                <div className={url === '#Activities' ? 'ProductID-div four active' : 'ProductID-div four'}>
                  <img src={require(`../../images/vid_1.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_2.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_3.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_4.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_5.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_1.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_2.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_3.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_4.jpg`)} alt={product.titleEn}/>
                  <img src={require(`../../images/vid_5.jpg`)} alt={product.titleEn}/>
                </div>
              </li>
            </ul>
          </nav>
        </section>
        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <Contact selectLan={selectLan}/>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
    </div>
  );
}

export default withRouter( ProductID );