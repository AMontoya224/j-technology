import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import logo from './../../images/Logo.png'
import gorro from './../../images/gorro.png'
import whatsapp from './../../images/whatsapp.png'


function Header( props ) {
    const { onSelectLeft, testRef1, selectLan, onSelectLan, selectHidden, data } = props;
    const [btnEsc, setBtnEsc] = useState( false );
    const [btnProducts, setBtnProducts] = useState( false );
    const [btnServices, setBtnServices] = useState( false );
    const [btnAbout, setBtnAbout] = useState( false );

    const onBtnEsc = () => {
        if(!btnEsc){
            setBtnEsc( true );
        }
        else{
            setBtnEsc( false );
        }
    };

    const onBtnProducts = () => {
        if(!btnProducts){
            setBtnProducts( true );
        }
        else{
            setBtnProducts( false );
        }
    };

    const onBtnServices = () => {
        if(!btnServices){
            setBtnServices( true );
        }
        else{
            setBtnServices( false );
        }
    };

    const onBtnAbout = () => {
        if(!btnAbout){
            setBtnAbout( true );
        }
        else{
            setBtnAbout( false );
        }
    };

    const onBtnLan = () => {
        if(!selectLan){
            onSelectLan( true );
        }
        else{
            onSelectLan( false );
        }
    };

    const onHome = () => {
        setBtnEsc( false );
        onSelectLeft( '#1' );
        props.history.push( '/' );
        testRef1.current.scrollIntoView( {block: "start", behavior: "smooth"} );
    };

    const onPage = (page) => {
        onSelectLeft( '#1' );
        props.history.push( page );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const onPageX = (page) => {
        onBtnEsc();
        onSelectLeft( '#1' );
        props.history.push( page );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="Header">
            <div className={selectHidden ? 'H-row bottom' : 'H-row top'}>
                <p onClick={onHome}><img src={logo} alt='logo'/>  J  T  <c>|</c><b>≡</b>C  H</p>
                <img src={gorro} alt='gorro'/>
                <div> </div>
                <div className='H-Services'>
                    <p onClick={() => onPage('/services')}>{selectLan ? 'Services ' : 'Servicios '}</p>
                    <span className="material-icons-round P-more">expand_more</span>
                    <span className="material-icons-round P-less">expand_less</span>
                    <div className='P-menu'>
                        {data.services.map( ( service, idx ) => {
                            return(
                                <div onClick={() => onPage(`/services/${idx+1}`)}>
                                    <p>{selectLan ? service.titleEn : service.title}</p>
                                    <span class="material-icons-outlined">{service.icon}</span>
                                </div>
                            )
                        })}
                        <p onClick={() => onPage('/services')}>{selectLan ? 'All services...' : 'Todos los servicios...'}</p>
                    </div>
                </div>
                <div className='H-Products'>
                    <p onClick={() => onPage('/products')}>{selectLan ? 'Products ' : 'Productos '}</p>
                    <span className="material-icons-round P-more">expand_more</span>
                    <span className="material-icons-round P-less">expand_less</span>
                    <div className='P-menu'>
                        {data.products.map( ( product, idx ) => {
                            return(
                                <div onClick={() => onPage(`/products/${idx+1}`)}>
                                    <p>{selectLan ? product.titleEn : product.title}</p>
                                    <span class="material-icons-outlined">{product.icon}</span>
                                </div>
                            )
                        })}
                        <p onClick={() => onPage('/products')}>{selectLan ? 'All products...' : 'Todos los productos...'}</p>
                    </div>
                </div>
                <div className='H-About'>
                    <p onClick={() => onPage('/about-us')}>{selectLan ? 'About us ' : 'Sobre nosotros '}</p>
                    <span className="material-icons-round P-more">expand_more</span>
                    <span className="material-icons-round P-less">expand_less</span>
                    <div className='P-menu'>
                        <p onClick={() => onPage('/know-us')}>{selectLan ? 'Know us' : 'Conócenos'}</p>
                        <p onClick={() => onPage('/our-method')}>{selectLan ? 'Our method' : 'Nuestro método'}</p>
                    </div>
                </div>
                <button className='L-btn' onClick={onBtnLan}><span className="material-icons-round">translate</span><p>{selectLan ? 'English' : 'Español'}</p></button>
                <button className='H-btn' onClick={onBtnEsc}><div className={btnEsc ? 's1 active' : 's1'}></div><div className={btnEsc ? 's2 active' : 's2'}></div></button>
            </div>
            <div className={btnEsc ? 'menu menu-fw' : 'menu menu-bk'}>
                <div className={btnServices ? 'M-Services' : 'M-Services active'}>
                    <div>
                        <p onClick={() => onPageX('/services')}>{selectLan ? 'Services ' : 'Servicios '}</p>
                        {/*<span className="material-icons-round" onClick={onBtnServices}>{btnServices ? 'expand_less' : 'expand_more'}</span>*/}
                    </div>
                    <div className='P-menu'>
                        {data.services.map( ( service, idx ) => {
                            return(
                                <div onClick={() => onPage(`/services/${idx+1}`)}>
                                    <p>{selectLan ? service.titleEn : service.title}</p>
                                    <i>{selectLan ? `$ ${(service.price/3.99).toFixed(1)}` : `s/. ${service.price}`}</i>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={btnProducts ? 'M-Products' : 'M-Products active'}>
                    <div>
                        <p onClick={() => onPageX('/products')}>{selectLan ? 'Products ' : 'Productos '}</p>
                        {/*<span className="material-icons-round" onClick={onBtnProducts}>{btnProducts ? 'expand_less' : 'expand_more'}</span>*/}
                    </div>
                    <div className='P-menu'>
                        {data.products.map( ( product, idx ) => {
                            return(
                                <div onClick={() => onPage(`/products/${idx+1}`)}>
                                    <p>{selectLan ? product.titleEn : product.title}</p>
                                    <i>{selectLan ? `$ ${(product.price/3.99).toFixed(1)}` : `s/. ${product.price}`}</i>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={btnAbout ? 'M-About' : 'M-About active'}>
                    <div>
                        <p onClick={() => onPageX('/about-us')}>{selectLan ? 'About us ' : 'Sobre nosotros '}</p>
                        {/*<span className="material-icons-round" onClick={onBtnAbout}>{btnAbout ? 'expand_less' : 'expand_more'}</span>*/}
                    </div>
                    <div className='P-menu'>
                        <p onClick={() => onPageX('/know-us')}>{selectLan ? 'Know us' : 'Conócenos'}</p>
                        <p onClick={() => onPageX('/our-method')}>{selectLan ? 'Our method' : 'Nuestro método'}</p>
                    </div>
                </div>
                <button className='L-btn' onClick={onBtnLan}><span className="material-icons-round">translate</span><p>{selectLan ? 'English' : 'Español'}</p></button>
            </div>
            <a className="whatsapp" href="https://wa.me/51953269019/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt='whatsapp'/>
            </a>
        </div>
    );
}

export default withRouter( Header );