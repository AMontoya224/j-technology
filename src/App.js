import React, { useState, useRef, useEffect} from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductID from './pages/Products/ProductID';
import Services from './pages/Services/Services';
import ServiceID from './pages/Services/ServiceID';
import AboutUs from './pages/AboutUs/AboutUs';
import KnowUs from './pages/AboutUs/KnowUs';
import OurMethod from './pages/AboutUs/OurMethod';
//import Data from '../src/api/data.json'


function App() {
  const [selectLeft, setSelectLeft] = useState( '#1' );
  const [selectLan, setSelectLan] = useState( false );
  const [selectHidden, setSelectHidden] = useState( false );
  const [data, setData] = useState( false );
  const testRef1 = useRef( null );
  const testRef2 = useRef( null );
  const testRef3 = useRef( null );
  const testRef4 = useRef( null );

  const onSelectLeft = newSelect => {
    setSelectLeft( newSelect );
  };

  const onSelectLan = newSelect => {
    setSelectLan( newSelect );
  };

  const scrollSelect = ( select ) => {
    onSelectLeft( select );
    if(select === '#1' ){
      setSelectHidden( false )
    }
    else{
      setSelectHidden( true )
    }
  };

  useEffect( ()=>{
    axios.get( 'https://api.npoint.io/af96496d273fd87d4e91' )
      .then( res=>{
        setData( res.data );
      });
  },[] );

  return (
    data?<div className="App" >
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
    <BrowserRouter>
      <Header onSelectLeft={onSelectLeft} testRef1={testRef1} selectLan={selectLan} onSelectLan={onSelectLan} selectHidden={selectHidden} data={data}/>
      <Switch>
        <Route exact path="/" render={ routeProps => <Home onSelectLeft={onSelectLeft} scrollSelect={scrollSelect} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} setSelectHidden={setSelectHidden} {...routeProps} />}/>
        <Route exact path="/services" render={ routeProps => <Services onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} selectLan={selectLan} data={data} {...routeProps} />}/>
        <Route exact path="/services/:_id" render={ routeProps => <ServiceID onSelectLeft={onSelectLeft} scrollSelect={scrollSelect} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} data={data} {...routeProps} />}/>
        <Route exact path="/products" render={ routeProps => <Products onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} selectLan={selectLan} data={data} {...routeProps} />}/>
        <Route exact path="/products/:_id" render={ routeProps => <ProductID onSelectLeft={onSelectLeft} scrollSelect={scrollSelect} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} data={data} {...routeProps} />}/>
        <Route exact path="/about-us" render={ routeProps => <AboutUs onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} selectLan={selectLan} data={data} {...routeProps}/>}/>
        <Route exact path="/know-us" render={ routeProps => <KnowUs  onSelectLeft={onSelectLeft} scrollSelect={scrollSelect} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} data={data} {...routeProps} />}/>
        <Route exact path="/our-method" render={ routeProps => <OurMethod onSelectLeft={onSelectLeft} scrollSelect={scrollSelect} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} selectLan={selectLan} data={data} {...routeProps} />}/>
      </Switch>
    </BrowserRouter>
  </div>:<></>
  );
}

export default App;
