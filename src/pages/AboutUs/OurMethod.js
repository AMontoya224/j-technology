import React from 'react';
import {withRouter} from 'react-router-dom';
import Blank from '../../components/Blank/Blank';


function OurMethod( props ) {
  const { selectLan } = props;

  return (
    <div className="OurMethod">
      <head>
        <title>{selectLan ? 'Our method' : 'Nuestro método'} | J-Technology</title>
      </head>
      <Blank/>
      {/*
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef4={testRef4}/>
      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
          <h1>{selectLan ? 'Our method' : 'Nuestro método'}</h1>
          <p>Nuestro método se centra..</p>
        </section>
        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>

        </section>
        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
          <Footer onSelectLeft={onSelectLeft} selectLan={selectLan} testRef1={testRef1}/>
        </section>
      </main>
      */}
    </div>
  );
}

export default withRouter( OurMethod );